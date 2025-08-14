"use client"

import { useState, useEffect } from 'react'
import { Plus, Search, Building2, Mail, Phone, Edit, Trash2, Users, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'
import { toast } from '@/components/ui/toast'
import { ClientDrawer } from '@/components/clientes/client-drawer'

interface Cliente {
  id: string
  nome: string
  email?: string
  telefone?: string
  ativo: boolean
  created_at: string
  updated_at: string
  _count?: {
    plataformas: number
  }
}

export default function ClientesPage() {
  const { user, isAdminByEmail, updateLastActivity } = useAuth()
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  
  // Dialog states
  const [showClientDrawer, setShowClientDrawer] = useState(false)
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null)

  useEffect(() => {
    if (isAdminByEmail()) {
      loadData()
    }
  }, [isAdminByEmail])

  const loadData = async () => {
    try {
      updateLastActivity()
      
      // Carregar clientes com contagem de plataformas
      const { data: clientesData, error: clientesError } = await supabase
        .from('clientes')
        .select(`
          *,
          plataformas(count)
        `)
        .order('nome', { ascending: true })

      if (clientesError) throw clientesError

      // Processar dados para incluir contagem
      const clientesWithCount = clientesData.map(cliente => ({
        ...cliente,
        _count: {
          plataformas: cliente.plataformas?.length || 0
        }
      }))

      setClientes(clientesWithCount)
    } catch (error) {
      console.error('Erro ao carregar clientes:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar os clientes',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteCliente = async (cliente: Cliente) => {
    if (!confirm(`Tem certeza que deseja excluir o cliente "${cliente.nome}"?`)) {
      return
    }

    try {
      updateLastActivity()

      // Verificar se há plataformas vinculadas
      const { data: plataformas, error: checkError } = await supabase
        .from('plataformas')
        .select('id')
        .eq('cliente_id', cliente.id)

      if (checkError) throw checkError

      if (plataformas && plataformas.length > 0) {
        toast({
          title: 'Não é possível excluir',
          description: `Este cliente possui ${plataformas.length} plataforma(s) vinculada(s). Remova as vinculações primeiro.`,
          variant: 'destructive'
        })
        return
      }

      const { error } = await supabase
        .from('clientes')
        .delete()
        .eq('id', cliente.id)

      if (error) throw error

      toast({
        title: 'Cliente excluído',
        description: 'Cliente foi removido com sucesso',
        variant: 'default'
      })

      loadData()
    } catch (error) {
      console.error('Erro ao excluir cliente:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível excluir o cliente',
        variant: 'destructive'
      })
    }
  }

  const handleToggleStatus = async (cliente: Cliente) => {
    try {
      updateLastActivity()

      const { error } = await supabase
        .from('clientes')
        .update({ ativo: !cliente.ativo })
        .eq('id', cliente.id)

      if (error) throw error

      toast({
        title: cliente.ativo ? 'Cliente desativado' : 'Cliente ativado',
        description: `Cliente ${cliente.ativo ? 'desativado' : 'ativado'} com sucesso`,
        variant: 'default'
      })

      loadData()
    } catch (error) {
      console.error('Erro ao alterar status:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível alterar o status do cliente',
        variant: 'destructive'
      })
    }
  }

  // Filtrar clientes
  const filteredClientes = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.telefone?.includes(searchTerm)
  )

  const handleEditCliente = (cliente: Cliente) => {
    updateLastActivity()
    setSelectedCliente(cliente)
    setShowClientDrawer(true)
  }

  const handleNewCliente = () => {
    updateLastActivity()
    setSelectedCliente(null)
    setShowClientDrawer(true)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  // Verificar se é admin
  if (!isAdminByEmail()) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Acesso Restrito</h3>
          <p className="text-gray-600">Apenas administradores podem gerenciar clientes.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
          <p className="text-gray-600">Gerencie os clientes da sua agência</p>
        </div>
        <Button onClick={handleNewCliente} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Novo cliente
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clientes.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {clientes.filter(c => c.ativo).length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Plataformas</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {clientes.reduce((acc, cliente) => acc + (cliente._count?.plataformas || 0), 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar clientes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Clientes List */}
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-500 mt-2">Carregando clientes...</p>
          </div>
        ) : filteredClientes.length === 0 ? (
          <div className="text-center py-8">
            <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm ? 'Nenhum cliente encontrado' : 'Nenhum cliente cadastrado'}
            </h3>
            <p className="text-gray-600 mb-4">
              {searchTerm 
                ? 'Tente ajustar os termos de busca'
                : 'Comece criando seu primeiro cliente'
              }
            </p>
            {!searchTerm && (
              <Button onClick={handleNewCliente}>
                <Plus className="h-4 w-4 mr-2" />
                Criar primeiro cliente
              </Button>
            )}
          </div>
        ) : (
          filteredClientes.map((cliente) => (
            <Card key={cliente.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                          {cliente.nome}
                          <Badge variant={cliente.ativo ? "default" : "secondary"}>
                            {cliente.ativo ? "Ativo" : "Inativo"}
                          </Badge>
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          {cliente.email && (
                            <div className="flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {cliente.email}
                            </div>
                          )}
                          {cliente.telefone && (
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {cliente.telefone}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Criado em: {formatDate(cliente.created_at)}</span>
                      <span>•</span>
                      <span>{cliente._count?.plataformas || 0} plataforma(s)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleStatus(cliente)}
                      className={cliente.ativo ? "text-orange-600 hover:text-orange-700" : "text-green-600 hover:text-green-700"}
                    >
                      {cliente.ativo ? "Desativar" : "Ativar"}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditCliente(cliente)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteCliente(cliente)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Excluir
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Client Drawer */}
      <ClientDrawer
        isOpen={showClientDrawer}
        onClose={() => {
          setShowClientDrawer(false)
          setSelectedCliente(null)
        }}
        onSuccess={loadData}
        cliente={selectedCliente}
      />
    </div>
  )
}
