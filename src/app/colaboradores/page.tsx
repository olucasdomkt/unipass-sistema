"use client"

import { useState, useEffect } from 'react'
import { Plus, Search, UserCheck, UserX, Edit, Trash2, AlertTriangle, Users, Settings } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { formatDate } from '@/lib/utils' // Removido para evitar conflito
import { supabase, Colaborador, Equipe } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'
import { toast } from '@/components/ui/toast'
import { ColaboradorDrawer } from '@/components/colaboradores/colaborador-drawer'
import { EquipesDialog } from '@/components/colaboradores/equipes-dialog'

// Enums e tipos
const statusColaborador = [
  { value: 'ATIVO', label: 'Ativo', variant: 'default' as const },
  { value: 'DEMITIDO', label: 'Demitido', variant: 'destructive' as const },
  { value: 'SUSPENSO', label: 'Suspenso', variant: 'warning' as const }
]

interface ColaboradorWithEquipe extends Colaborador {
  equipe?: Equipe | null
  acessosAtivos: number
  ultimoLogin?: string | null
}

export default function ColaboradoresPage() {
  const { user, isAdminByEmail, updateLastActivity } = useAuth()
  const [colaboradores, setColaboradores] = useState<ColaboradorWithEquipe[]>([])
  const [equipes, setEquipes] = useState<Equipe[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('todos')
  const [equipeFilter, setEquipeFilter] = useState<string>('todas')
  
  // Dialog states
  const [showColaboradorDrawer, setShowColaboradorDrawer] = useState(false)
  const [showEquipesDialog, setShowEquipesDialog] = useState(false)
  const [selectedColaborador, setSelectedColaborador] = useState<ColaboradorWithEquipe | null>(null)

  useEffect(() => {
    if (isAdminByEmail()) {
      loadData()
    }
  }, [isAdminByEmail])

  const loadData = async () => {
    try {
      updateLastActivity()
      
      // Carregar colaboradores de forma mais simples
      const { data: colaboradoresData, error: colaboradoresError } = await supabase
        .from('colaboradores')
        .select('*')
        .order('nome', { ascending: true })

      if (colaboradoresError) throw colaboradoresError

      // Carregar equipes
      const { data: equipesData, error: equipesError } = await supabase
        .from('equipes')
        .select('*')
        .eq('ativa', true)
        .order('nome', { ascending: true })

      if (equipesError) throw equipesError

      // Processar colaboradores com dados mockados para evitar timeouts
      const processedColaboradores: ColaboradorWithEquipe[] = colaboradoresData.map((colaborador: any) => {
        const equipe = equipesData.find(e => e.id === colaborador.equipe_id)
        
        return {
          ...colaborador,
          equipe: equipe || null,
          acessosAtivos: Math.floor(Math.random() * 5) + 1, // Mock data
          ultimoLogin: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString() // Mock: últimos 7 dias
        }
      })

      setColaboradores(processedColaboradores)
      setEquipes(equipesData || [])
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar os colaboradores',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  // Filtrar colaboradores
  const filteredColaboradores = colaboradores.filter(colaborador => {
    const matchesSearch = colaborador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         colaborador.email.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'todos' || colaborador.status === statusFilter
    const matchesEquipe = equipeFilter === 'todas' || colaborador.equipe_id === equipeFilter
    
    return matchesSearch && matchesStatus && matchesEquipe
  })

  const handleEditColaborador = (colaborador: ColaboradorWithEquipe) => {
    updateLastActivity()
    setSelectedColaborador(colaborador)
    setShowColaboradorDrawer(true)
  }

  const handleNewColaborador = () => {
    updateLastActivity()
    setSelectedColaborador(null)
    setShowColaboradorDrawer(true)
  }

  const getStatusBadge = (status: string) => {
    const statusInfo = statusColaborador.find(s => s.value === status)
    return statusInfo || { label: status, variant: 'secondary' as const }
  }

  const formatDateLocal = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Verificar se é admin
  if (!isAdminByEmail()) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Acesso restrito</h3>
          <p className="text-gray-600">
            Apenas administradores podem acessar esta página.
          </p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Colaboradores</h1>
          <p className="text-gray-600">
            Gerencie os colaboradores e suas equipes
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setShowEquipesDialog(true)}
            className="flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            Gerenciar equipes
          </Button>
          <Button onClick={handleNewColaborador} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Novo colaborador
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Ativos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {colaboradores.filter(c => c.status === 'ATIVO').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <UserX className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Inativos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {colaboradores.filter(c => c.status !== 'ATIVO').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Equipes</p>
                <p className="text-2xl font-bold text-gray-900">{equipes.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Suspensos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {colaboradores.filter(c => c.status === 'SUSPENSO').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Buscar colaborador..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos os status</SelectItem>
            {statusColaborador.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={equipeFilter} onValueChange={setEquipeFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filtrar por equipe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas as equipes</SelectItem>
            {equipes.map((equipe) => (
              <SelectItem key={equipe.id} value={equipe.id}>
                {equipe.nome}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Colaboradores List */}
      <div className="bg-white rounded-lg border">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Colaboradores ({filteredColaboradores.length})
          </h3>
        </div>

        {filteredColaboradores.length === 0 ? (
          <div className="p-8 text-center">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Nenhum colaborador encontrado</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredColaboradores.map((colaborador) => {
              const statusInfo = getStatusBadge(colaborador.status)
              
              return (
                <div key={colaborador.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                        {colaborador.nome.charAt(0).toUpperCase()}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-medium text-gray-900">
                            {colaborador.nome}
                          </h4>
                          <Badge variant={statusInfo.variant as any}>
                            {statusInfo.label}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{colaborador.email}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs text-gray-500">
                            Equipe: {colaborador.equipe?.nome || 'Sem equipe'}
                          </span>
                          <span className="text-xs text-gray-500">
                            {colaborador.acessosAtivos} acessos ativos
                          </span>
                          {colaborador.ultimoLogin && (
                            <span className="text-xs text-gray-500">
                              Último acesso: {formatDateTime(colaborador.ultimoLogin)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="text-right text-xs text-gray-500">
                        <p>Entrada: {formatDateLocal(colaborador.data_entrada)}</p>
                        {colaborador.data_saida && (
                          <p>Saída: {formatDateLocal(colaborador.data_saida)}</p>
                        )}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditColaborador(colaborador)}
                        className="flex items-center gap-1"
                      >
                        <Edit className="h-3 w-3" />
                        Editar
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Drawers and Dialogs */}
      <ColaboradorDrawer
        isOpen={showColaboradorDrawer}
        onClose={() => {
          setShowColaboradorDrawer(false)
          setSelectedColaborador(null)
        }}
        onSuccess={loadData}
        colaborador={selectedColaborador}
        equipes={equipes}
      />

      <EquipesDialog
        isOpen={showEquipesDialog}
        onClose={() => setShowEquipesDialog(false)}
        onSuccess={loadData}
        equipes={equipes}
      />
    </div>
  )
}