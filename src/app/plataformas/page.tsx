"use client"

import { useState, useEffect } from 'react'
import { Search, Plus, Filter, ExternalLink, Eye, AlertTriangle, Clock, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'
import { PlataformaDrawer } from '@/components/plataformas/plataforma-drawer'
import { PasswordDrawer } from '@/components/plataformas/password-drawer'
import { ProblemDrawer } from '@/components/plataformas/problem-drawer'
import { toast } from '@/components/ui/toast'

interface PlataformaWithClient {
  id: string
  nome: string
  tipo: string
  url_login: string | null
  email_utilizado: string | null
  ultima_atualizacao_senha: string
  frequencia_atualizacao: number
  observacoes: string | null
  vinculo: string
  cliente_id: string | null
  favicon_url: string | null
  login_via_google: boolean
  google_email: string | null
  conta_google_id: string | null
  created_at: string
  updated_at: string
  cliente?: { id: string; nome: string } | null
  lastAccess?: string
  statusPassword: 'valid' | 'expiring' | 'expired'
  hasAccess: boolean
  senha_encriptada?: string
}

// Dados mockados para demonstração
const mockPlataformas: PlataformaWithClient[] = [
  {
    id: '1',
    nome: 'Google Ads',
    tipo: 'MIDIA',
    url_login: 'https://ads.google.com',
    email_utilizado: 'ads@agencia.com',
    ultima_atualizacao_senha: '2024-06-15T10:00:00Z',
    frequencia_atualizacao: 90,
    observacoes: 'Conta principal da agência',
    vinculo: 'UNICO',
    cliente_id: null,
    favicon_url: 'https://ads.google.com/favicon.ico',
    login_via_google: false,
    google_email: null,
    conta_google_id: null,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-06-15T10:00:00Z',
    cliente: null,
    lastAccess: '2024-07-01T09:30:00Z',
    statusPassword: 'valid',
    hasAccess: true,
    senha_encriptada: 'MinhaSenh@123'
  },
  {
    id: '2',
    nome: 'Meta Business',
    tipo: 'MIDIA',
    url_login: 'https://business.facebook.com',
    email_utilizado: 'meta@agencia.com',
    ultima_atualizacao_senha: '2024-04-20T10:00:00Z',
    frequencia_atualizacao: 90,
    observacoes: 'Gerenciamento de campanhas Facebook e Instagram',
    vinculo: 'CLIENTE',
    cliente_id: 'cliente1',
    favicon_url: 'https://business.facebook.com/favicon.ico',
    login_via_google: false,
    google_email: null,
    conta_google_id: null,
    created_at: '2024-01-20T10:00:00Z',
    updated_at: '2024-04-20T10:00:00Z',
    cliente: { id: 'cliente1', nome: 'Cliente ABC Ltda' },
    lastAccess: '2024-06-28T14:22:00Z',
    statusPassword: 'expiring',
    hasAccess: true,
    senha_encriptada: 'MetaPass@456'
  },
  {
    id: '3',
    nome: 'RD Station',
    tipo: 'CRM',
    url_login: 'https://app.rdstation.com.br',
    email_utilizado: 'crm@agencia.com',
    ultima_atualizacao_senha: '2024-01-10T10:00:00Z',
    frequencia_atualizacao: 90,
    observacoes: 'Automação de marketing',
    vinculo: 'UNICO',
    cliente_id: null,
    favicon_url: 'https://app.rdstation.com.br/favicon.ico',
    login_via_google: false,
    google_email: null,
    conta_google_id: null,
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-01-10T10:00:00Z',
    cliente: null,
    lastAccess: '2024-06-25T11:15:00Z',
    statusPassword: 'expired',
    hasAccess: true,
    senha_encriptada: 'RdStation@789'
  },
  {
    id: '4',
    nome: 'Figma',
    tipo: 'DESIGN',
    url_login: 'https://www.figma.com',
    email_utilizado: 'design@agencia.com',
    ultima_atualizacao_senha: '2024-06-01T10:00:00Z',
    frequencia_atualizacao: 90,
    observacoes: 'Design colaborativo',
    vinculo: 'UNICO',
    cliente_id: null,
    favicon_url: 'https://www.figma.com/favicon.ico',
    login_via_google: true,
    google_email: 'design@agencia.com',
    conta_google_id: null,
    created_at: '2024-02-01T10:00:00Z',
    updated_at: '2024-06-01T10:00:00Z',
    cliente: null,
    lastAccess: '2024-07-01T16:45:00Z',
    statusPassword: 'valid',
    hasAccess: true,
    senha_encriptada: 'FigmaDesign@101'
  }
]

const mockClientes = [
  { id: 'cliente1', nome: 'Cliente ABC Ltda' },
  { id: 'cliente2', nome: 'Empresa XYZ S.A.' },
  { id: 'cliente3', nome: 'Startup Innovation' }
]

export default function PlataformasPage() {
  const { user, isAdminByEmail, hasAccessToPlatform, updateLastActivity } = useAuth()
  const [plataformas, setPlataformas] = useState<PlataformaWithClient[]>([])
  const [clientes, setClientes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClient, setSelectedClient] = useState<string>('')
  
  // Drawer states
  const [showPlataformaDrawer, setShowPlataformaDrawer] = useState(false)
  const [showPasswordDrawer, setShowPasswordDrawer] = useState(false)
  const [showProblemDrawer, setShowProblemDrawer] = useState(false)
  const [selectedPlataforma, setSelectedPlataforma] = useState<PlataformaWithClient | null>(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      updateLastActivity()
      
      // Carregar dados reais do Supabase
      const viewName = isAdminByEmail() ? 'plataformas' : 'plataformas'
      const { data: plataformasData, error: plataformasError } = await supabase
        .from(viewName)
        .select('*')
        .order('nome', { ascending: true })

      if (plataformasError) {
        console.error('Erro ao carregar plataformas:', plataformasError)
        // Fallback para dados mockados
        setPlataformas(mockPlataformas)
        setClientes(mockClientes)
        return
      }

      // Carregar clientes
      const { data: clientesData = [], error: clientesError } = await supabase
        .from('clientes')
        .select('*')
        .eq('ativo', true)
        .order('nome', { ascending: true })

      if (clientesError) {
        console.error('Erro ao carregar clientes:', clientesError)
      }

      // Processar plataformas com informações adicionais
      const processedPlataformas: PlataformaWithClient[] = await Promise.all(
        plataformasData.map(async (plataforma: any) => {
          // Buscar cliente se aplicável
          let cliente = null
          if (plataforma.cliente_id && clientesData) {
            cliente = clientesData.find((c: any) => c.id === plataforma.cliente_id)
          }

          // Calcular status da senha
          const diasDesdeUltimaAlteracao = Math.floor(
            (new Date().getTime() - new Date(plataforma.ultima_atualizacao_senha).getTime()) / (1000 * 60 * 60 * 24)
          )
          
          let statusPassword: 'valid' | 'expiring' | 'expired' = 'valid'
          if (diasDesdeUltimaAlteracao >= plataforma.frequencia_atualizacao) {
            statusPassword = 'expired'
          } else if (diasDesdeUltimaAlteracao >= plataforma.frequencia_atualizacao - 7) {
            statusPassword = 'expiring'
          }

          // Verificar se usuário tem acesso (por enquanto, todos têm acesso)
          const hasAccess = true

          // Buscar último acesso (mockado por enquanto)
          const lastAccess = new Date().toISOString()

          return {
            ...plataforma,
            cliente,
            statusPassword,
            hasAccess,
            lastAccess
          }
        })
      )

      // Ordenar por último acesso (se disponível) ou alfabeticamente
      processedPlataformas.sort((a, b) => {
        if (a.lastAccess && b.lastAccess) {
          return new Date(b.lastAccess).getTime() - new Date(a.lastAccess).getTime()
        }
        return a.nome.localeCompare(b.nome)
      })

      setPlataformas(processedPlataformas)
      setClientes(clientesData || [])
      
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
      // Fallback para dados mockados em caso de erro
      setPlataformas(mockPlataformas)
      setClientes(mockClientes)
      
      toast({
        title: 'Aviso',
        description: 'Carregando dados de demonstração',
        variant: 'default'
      })
    } finally {
      setLoading(false)
    }
  }

  // Filtrar plataformas
  const filteredPlataformas = plataformas.filter(plataforma => {
    const matchesSearch = plataforma.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plataforma.email_utilizado?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plataforma.cliente?.nome.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesClient = !selectedClient || 
                         (selectedClient === 'unico' && plataforma.vinculo === 'UNICO') ||
                         (plataforma.cliente_id === selectedClient)
    
    return matchesSearch && matchesClient
  })

  const handleOpenUrl = (url: string | null) => {
    if (url) {
      updateLastActivity()
      window.open(url, '_blank')
    }
  }

  const handleViewPassword = (plataforma: PlataformaWithClient) => {
    updateLastActivity()
    setSelectedPlataforma(plataforma)
    setShowPasswordDrawer(true)
  }

  const handleReportProblem = (plataforma: PlataformaWithClient) => {
    updateLastActivity()
    setSelectedPlataforma(plataforma)
    setShowProblemDrawer(true)
  }

  const handleNewPlataforma = () => {
    updateLastActivity()
    setSelectedPlataforma(null)
    setShowPlataformaDrawer(true)
  }

  const handleEditPlataforma = (plataforma: PlataformaWithClient) => {
    updateLastActivity()
    setSelectedPlataforma(plataforma)
    setShowPlataformaDrawer(true)
  }

  const getPasswordStatusInfo = (status: 'valid' | 'expiring' | 'expired') => {
    switch (status) {
      case 'valid':
        return {
          icon: CheckCircle,
          color: 'text-green-600',
          bgColor: 'bg-green-100',
          label: 'Válida',
          tooltip: 'Senha dentro do prazo de validade'
        }
      case 'expiring':
        return {
          icon: Clock,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-100',
          label: 'Expirando',
          tooltip: 'Senha próxima do prazo de troca'
        }
      case 'expired':
        return {
          icon: XCircle,
          color: 'text-red-600',
          bgColor: 'bg-red-100',
          label: 'Expirada',
          tooltip: 'Senha deve ser trocada'
        }
    }
  }

  const getFaviconUrl = (plataforma: PlataformaWithClient) => {
    if (plataforma.favicon_url) {
      return plataforma.favicon_url
    }
    
    if (plataforma.url_login) {
      try {
        const url = new URL(plataforma.url_login)
        return `${url.protocol}//${url.hostname}/favicon.ico`
      } catch {
        return null
      }
    }
    
    return null
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
          <h1 className="text-2xl font-bold text-gray-900">Plataformas</h1>
          <p className="text-gray-600">
            Gerencie o acesso às plataformas da agência
          </p>
        </div>
        
        <Button onClick={handleNewPlataforma} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Nova plataforma
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Buscar plataforma..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Todos os clientes</option>
            <option value="unico">Único</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Plataformas List */}
      <div className="space-y-4">
        {filteredPlataformas.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500 mb-4">Nenhuma plataforma encontrada</p>
            <Button onClick={handleNewPlataforma} className="flex items-center gap-2 mx-auto">
              <Plus className="h-4 w-4" />
              Adicionar primeira plataforma
            </Button>
          </Card>
        ) : (
          filteredPlataformas.map((plataforma) => {
            const passwordStatus = getPasswordStatusInfo(plataforma.statusPassword)
            const faviconUrl = getFaviconUrl(plataforma)
            
            return (
              <Card key={plataforma.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  {/* Favicon */}
                  <div className="w-10 h-10 flex-shrink-0">
                    {faviconUrl ? (
                      <img
                        src={faviconUrl}
                        alt={`${plataforma.nome} favicon`}
                        className="w-10 h-10 rounded-md object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          target.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                    ) : null}
                    <div className={`w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center ${faviconUrl ? 'hidden' : ''}`}>
                      <span className="text-gray-500 font-medium text-sm">
                        {plataforma.nome.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-gray-900 truncate">
                        {plataforma.nome}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {plataforma.vinculo === 'UNICO' ? 'Único' : plataforma.cliente?.nome || 'Cliente'}
                      </Badge>
                    </div>
                    
                    {plataforma.email_utilizado && (
                      <p className="text-sm text-gray-600 truncate">
                        {plataforma.email_utilizado}
                      </p>
                    )}
                  </div>

                  {/* Status Badge */}
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${passwordStatus.bgColor} cursor-help`}>
                        <passwordStatus.icon className={`h-3 w-3 ${passwordStatus.color}`} />
                        <span className={`text-xs font-medium ${passwordStatus.color}`}>
                          {passwordStatus.label}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="center" sideOffset={5}>
                      {passwordStatus.tooltip}
                    </TooltipContent>
                  </Tooltip>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {plataforma.url_login && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenUrl(plataforma.url_login)}
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Acessar
                      </Button>
                    )}
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewPassword(plataforma)}
                      className="flex items-center gap-1"
                    >
                      <Eye className="h-3 w-3" />
                      Ver senha
                    </Button>
                    
                    {plataforma.hasAccess && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleReportProblem(plataforma)}
                        className="flex items-center gap-1 text-orange-600 border-orange-200 hover:bg-orange-50"
                      >
                        <AlertTriangle className="h-3 w-3" />
                        Problema
                      </Button>
                    )}

                    {isAdminByEmail() && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditPlataforma(plataforma)}
                        className="flex items-center gap-1"
                      >
                        Editar
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            )
          })
        )}
      </div>

      {/* Drawers */}
      <PlataformaDrawer
        isOpen={showPlataformaDrawer}
        onClose={() => {
          setShowPlataformaDrawer(false)
          setSelectedPlataforma(null)
        }}
        onSuccess={loadData}
        plataforma={selectedPlataforma}
        clientes={clientes}
      />

      <PasswordDrawer
        isOpen={showPasswordDrawer}
        onClose={() => {
          setShowPasswordDrawer(false)
          setSelectedPlataforma(null)
        }}
        plataforma={selectedPlataforma}
      />

      <ProblemDrawer
        isOpen={showProblemDrawer}
        onClose={() => {
          setShowProblemDrawer(false)
          setSelectedPlataforma(null)
        }}
        onSuccess={loadData}
        plataforma={selectedPlataforma}
      />
    </div>
  )
}