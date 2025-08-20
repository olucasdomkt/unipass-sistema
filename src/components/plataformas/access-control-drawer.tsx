"use client"

import { useState, useEffect } from 'react'
import { X, Users, UserPlus, UserMinus, Search, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'
import { toast } from '@/components/ui/toast'

interface AccessControlDrawerProps {
  isOpen: boolean
  onClose: () => void
  plataforma: any
  onSuccess: () => void
}

interface ColaboradorAccess {
  id: string
  nome: string
  email: string
  equipe?: string
  hasAccess: boolean
  dataInicio?: string
  dataFim?: string
  ativo: boolean
}

export function AccessControlDrawer({ isOpen, onClose, plataforma, onSuccess }: AccessControlDrawerProps) {
  const { user, updateLastActivity, isAdminByEmail } = useAuth()
  const [colaboradores, setColaboradores] = useState<ColaboradorAccess[]>([])
  const [equipes, setEquipes] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEquipe, setSelectedEquipe] = useState<string>('')
  const [bulkAction, setBulkAction] = useState<string>('')

  useEffect(() => {
    if (isOpen && plataforma) {
      loadData()
    }
  }, [isOpen, plataforma])

  const loadData = async () => {
    setLoading(true)
    try {
      updateLastActivity()

      // Carregar colaboradores
      const { data: colaboradoresData, error: colaboradoresError } = await supabase
        .from('colaboradores')
        .select(`
          id,
          nome,
          email,
          status,
          equipes!inner(nome)
        `)
        .eq('status', 'ATIVO')

      if (colaboradoresError) throw colaboradoresError

      // Carregar acessos existentes
      const { data: acessosData, error: acessosError } = await supabase
        .from('acessos_plataforma')
        .select('*')
        .eq('plataforma_id', plataforma.id)

      if (acessosError) throw acessosError

      // Carregar equipes
      const { data: equipesData, error: equipesError } = await supabase
        .from('equipes')
        .select('*')
        .eq('ativa', true)

      if (equipesError) throw equipesError

      // Combinar dados
      const colaboradoresWithAccess = colaboradoresData.map(colab => {
        const acesso = acessosData.find(a => a.colaborador_id === colab.id && a.ativo)
        return {
          id: colab.id,
          nome: colab.nome,
          email: colab.email,
          equipe: (colab.equipes as any)?.nome || 'Sem equipe',
          hasAccess: !!acesso,
          dataInicio: acesso?.data_inicio,
          dataFim: acesso?.data_fim,
          ativo: acesso?.ativo || false
        }
      })

      setColaboradores(colaboradoresWithAccess)
      setEquipes(equipesData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar os dados de acesso',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const toggleAccess = async (colaboradorId: string, grantAccess: boolean) => {
    try {
      updateLastActivity()

      if (grantAccess) {
        // Conceder acesso
        const { error } = await supabase
          .from('acessos_plataforma')
          .upsert([{
            colaborador_id: colaboradorId,
            plataforma_id: plataforma.id,
            data_inicio: new Date().toISOString(),
            ativo: true
          }])

        if (error) throw error

        toast({
          title: 'Acesso concedido',
          description: 'Colaborador agora tem acesso à plataforma',
          variant: 'default'
        })
      } else {
        // Revogar acesso
        const { error } = await supabase
          .from('acessos_plataforma')
          .update({ 
            ativo: false,
            data_fim: new Date().toISOString()
          })
          .eq('colaborador_id', colaboradorId)
          .eq('plataforma_id', plataforma.id)

        if (error) throw error

        toast({
          title: 'Acesso revogado',
          description: 'Colaborador não tem mais acesso à plataforma',
          variant: 'default'
        })
      }

      loadData() // Recarregar dados
      onSuccess()
    } catch (error) {
      console.error('Erro ao alterar acesso:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível alterar o acesso',
        variant: 'destructive'
      })
    }
  }

  const handleBulkAction = async () => {
    if (!bulkAction || !selectedEquipe) return

    try {
      setLoading(true)
      updateLastActivity()

      const colaboradoresDaEquipe = colaboradores.filter(c => 
        c.equipe === equipes.find(e => e.id === selectedEquipe)?.nome
      )

      for (const colaborador of colaboradoresDaEquipe) {
        if (bulkAction === 'grant' && !colaborador.hasAccess) {
          await toggleAccess(colaborador.id, true)
        } else if (bulkAction === 'revoke' && colaborador.hasAccess) {
          await toggleAccess(colaborador.id, false)
        }
      }

      toast({
        title: 'Ação em lote concluída',
        description: `${bulkAction === 'grant' ? 'Acesso concedido' : 'Acesso revogado'} para ${colaboradoresDaEquipe.length} colaboradores`,
        variant: 'default'
      })

      setBulkAction('')
      setSelectedEquipe('')
    } catch (error) {
      console.error('Erro na ação em lote:', error)
      toast({
        title: 'Erro',
        description: 'Erro ao executar ação em lote',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const filteredColaboradores = colaboradores.filter(colaborador =>
    colaborador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    colaborador.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (colaborador.equipe && colaborador.equipe.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleClose = () => {
    setSearchTerm('')
    setSelectedEquipe('')
    setBulkAction('')
    onClose()
  }

  if (!isOpen || !plataforma || !isAdminByEmail()) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Controle de Acesso
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {plataforma.nome}
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Ações em lote */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5" />
                  Ações em Lote por Equipe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Select value={selectedEquipe} onValueChange={setSelectedEquipe}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Selecionar equipe" />
                    </SelectTrigger>
                    <SelectContent>
                      {equipes.map((equipe) => (
                        <SelectItem key={equipe.id} value={equipe.id}>
                          {equipe.nome}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={bulkAction} onValueChange={setBulkAction}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Ação" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grant">Conceder acesso</SelectItem>
                      <SelectItem value="revoke">Revogar acesso</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button 
                    onClick={handleBulkAction}
                    disabled={!selectedEquipe || !bulkAction || loading}
                  >
                    Aplicar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Busca */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar colaboradores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Lista de colaboradores */}
            <div className="space-y-3">
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-500 mt-2">Carregando...</p>
                </div>
              ) : filteredColaboradores.length === 0 ? (
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Nenhum colaborador encontrado</p>
                </div>
              ) : (
                filteredColaboradores.map((colaborador) => (
                  <Card key={colaborador.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {colaborador.nome}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {colaborador.email}
                            </p>
                            {colaborador.equipe && (
                              <Badge variant="outline" className="mt-1">
                                {colaborador.equipe}
                              </Badge>
                            )}
                          </div>
                        </div>

                        {colaborador.hasAccess && colaborador.dataInicio && (
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            Acesso desde: {new Date(colaborador.dataInicio).toLocaleDateString('pt-BR')}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {colaborador.hasAccess ? (
                          <>
                            <Badge variant="default" className="bg-green-100 text-green-800">
                              <Shield className="h-3 w-3 mr-1" />
                              Com acesso
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleAccess(colaborador.id, false)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <UserMinus className="h-4 w-4 mr-1" />
                              Revogar
                            </Button>
                          </>
                        ) : (
                          <>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                              Sem acesso
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleAccess(colaborador.id, true)}
                              className="text-green-600 hover:text-green-700"
                            >
                              <UserPlus className="h-4 w-4 mr-1" />
                              Conceder
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Footer */}
        </div>
      </div>
    </div>
  )
}
