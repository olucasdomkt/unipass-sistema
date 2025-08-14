"use client"

import { useState, useMemo, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Filter, Download, Calendar, User, Activity } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'
import { toast } from '@/components/ui/toast'

interface LogEntry {
  id: string
  usuario: string
  acao: string
  entidade: string
  entidadeId?: string
  detalhes: string
  ip: string
  userAgent: string
  timestamp: Date
  tipo: 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS' | 'AUTENTICACAO' | 'SENHA' | 'PLATAFORMA' | 'COLABORADOR' | 'PROBLEMA' | 'SISTEMA'
}

// Dados mockados de logs
const logsData: LogEntry[] = [
  {
    id: '1',
    usuario: 'ana@agencia.com',
    acao: 'VISUALIZAR_SENHA',
    entidade: 'plataforma',
    entidadeId: 'plat_1',
    detalhes: 'Visualizou senha da plataforma Google Ads',
    ip: '192.168.1.100',
    userAgent: 'Mozilla/5.0 (Mac) Chrome/120.0',
    timestamp: new Date('2024-07-01T10:30:00'),
    tipo: 'INFO'
  },
  {
    id: '2',
    usuario: 'joao@agencia.com',
    acao: 'ACESSAR_PLATAFORMA',
    entidade: 'plataforma',
    entidadeId: 'plat_2',
    detalhes: 'Acessou plataforma Meta Business',
    ip: '192.168.1.101',
    userAgent: 'Mozilla/5.0 (Windows) Firefox/119.0',
    timestamp: new Date('2024-07-01T09:15:00'),
    tipo: 'INFO'
  },
  {
    id: '3',
    usuario: 'ana@agencia.com',
    acao: 'CRIAR_COLABORADOR',
    entidade: 'colaborador',
    entidadeId: 'user_5',
    detalhes: 'Criou novo colaborador: Maria Silva',
    ip: '192.168.1.100',
    userAgent: 'Mozilla/5.0 (Mac) Chrome/120.0',
    timestamp: new Date('2024-06-30T16:45:00'),
    tipo: 'SUCCESS'
  },
  {
    id: '4',
    usuario: 'joao@agencia.com',
    acao: 'TENTATIVA_ACESSO_NEGADO',
    entidade: 'plataforma',
    entidadeId: 'plat_3',
    detalhes: 'Tentativa de acesso negada à plataforma RD Station (sem permissão)',
    ip: '192.168.1.101',
    userAgent: 'Mozilla/5.0 (Windows) Firefox/119.0',
    timestamp: new Date('2024-06-30T14:20:00'),
    tipo: 'WARNING'
  },
  {
    id: '5',
    usuario: 'sistema',
    acao: 'AUTO_LOGOUT',
    entidade: 'sessao',
    entidadeId: 'session_123',
    detalhes: 'Logout automático por inatividade - usuário: joao@agencia.com',
    ip: '192.168.1.101',
    userAgent: 'Mozilla/5.0 (Windows) Firefox/119.0',
    timestamp: new Date('2024-06-30T13:05:00'),
    tipo: 'INFO'
  },
  {
    id: '6',
    usuario: 'ana@agencia.com',
    acao: 'EDITAR_PLATAFORMA',
    entidade: 'plataforma',
    entidadeId: 'plat_1',
    detalhes: 'Editou informações da plataforma Google Ads (alterou URL)',
    ip: '192.168.1.100',
    userAgent: 'Mozilla/5.0 (Mac) Chrome/120.0',
    timestamp: new Date('2024-06-30T11:30:00'),
    tipo: 'SUCCESS'
  },
  {
    id: '7',
    usuario: 'joao@agencia.com',
    acao: 'REPORTAR_PROBLEMA',
    entidade: 'ticket',
    entidadeId: 'ticket_456',
    detalhes: 'Reportou problema na plataforma Meta Business: Login não funciona',
    ip: '192.168.1.101',
    userAgent: 'Mozilla/5.0 (Windows) Firefox/119.0',
    timestamp: new Date('2024-06-29T15:45:00'),
    tipo: 'WARNING'
  },
  {
    id: '8',
    usuario: 'sistema',
    acao: 'SENHA_EXPIRADA',
    entidade: 'plataforma',
    entidadeId: 'plat_4',
    detalhes: 'Senha da plataforma ClickUp expirou (90 dias)',
    ip: 'sistema',
    userAgent: 'Sistema Interno',
    timestamp: new Date('2024-06-29T08:00:00'),
    tipo: 'ERROR'
  }
]

const tiposAcao = [
  { value: 'TODAS', label: 'Todas as ações' },
  { value: 'VISUALIZAR_SENHA', label: 'Visualizar Senha' },
  { value: 'ACESSAR_PLATAFORMA', label: 'Acessar Plataforma' },
  { value: 'EDITAR_PLATAFORMA', label: 'Editar Plataforma' },
  { value: 'CRIAR_COLABORADOR', label: 'Criar Colaborador' },
  { value: 'REPORTAR_PROBLEMA', label: 'Reportar Problema' },
  { value: 'AUTO_LOGOUT', label: 'Auto Logout' },
  { value: 'TENTATIVA_ACESSO_NEGADO', label: 'Acesso Negado' },
  { value: 'SENHA_EXPIRADA', label: 'Senha Expirada' }
]

const tiposLog = [
  { value: 'TODOS', label: 'Todos os tipos' },
  { value: 'INFO', label: 'Informação' },
  { value: 'SUCCESS', label: 'Sucesso' },
  { value: 'WARNING', label: 'Aviso' },
  { value: 'ERROR', label: 'Erro' }
]

function getLogBadgeVariant(tipo: string) {
  switch (tipo) {
    case 'SUCCESS': return 'success'
    case 'WARNING': return 'warning'
    case 'ERROR': return 'danger'
    default: return 'default'
  }
}

function getLogIcon(acao: string) {
  switch (acao) {
    case 'VISUALIZAR_SENHA': return '👁️'
    case 'ACESSAR_PLATAFORMA': return '🔗'
    case 'EDITAR_PLATAFORMA': return '✏️'
    case 'CRIAR_COLABORADOR': return '👤'
    case 'REPORTAR_PROBLEMA': return '⚠️'
    case 'AUTO_LOGOUT': return '🚪'
    case 'TENTATIVA_ACESSO_NEGADO': return '🚫'
    case 'SENHA_EXPIRADA': return '⏰'
    default: return '📝'
  }
}

export default function LogsPage() {
  const { isAdmin, updateLastActivity } = useAuth()
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAction, setSelectedAction] = useState('TODAS')
  const [selectedType, setSelectedType] = useState('TODOS')
  const [selectedUser, setSelectedUser] = useState('TODOS')

  useEffect(() => {
    loadLogs()
  }, [])

  const loadLogs = async () => {
    try {
      updateLastActivity()
      
      const { data: logsData, error } = await supabase
        .from('log_acessos')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(100)

      if (error) throw error

      // Transformar dados para o formato esperado
      const transformedLogs: LogEntry[] = logsData.map(log => ({
        id: log.id,
        usuario: log.usuario,
        acao: log.acao,
        entidade: log.entidade,
        entidadeId: log.entidade_id,
        detalhes: getLogDetails(log.acao, log.entidade),
        ip: log.ip || 'N/A',
        userAgent: log.user_agent || 'N/A',
        timestamp: log.timestamp,
        tipo: getLogType(log.acao)
      }))

      setLogs(transformedLogs)
    } catch (error) {
      console.error('Erro ao carregar logs:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível carregar os logs',
        variant: 'destructive'
      })
      // Fallback para dados mock em caso de erro
      setLogs(logsData)
    } finally {
      setLoading(false)
    }
  }

  const getLogDetails = (acao: string, entidade: string) => {
    switch (acao) {
      case 'LOGIN':
        return 'Usuário fez login no sistema'
      case 'LOGOUT':
        return 'Usuário fez logout do sistema'
      case 'VISUALIZAR_SENHA':
        return `Visualizou senha da ${entidade}`
      case 'CRIAR_PLATAFORMA':
        return `Criou nova ${entidade}`
      case 'EDITAR_PLATAFORMA':
        return `Editou ${entidade}`
      case 'EDITAR_COLABORADOR':
        return `Editou ${entidade}`
      case 'REPORTAR_PROBLEMA':
        return `Reportou problema na ${entidade}`
      default:
        return `${acao} em ${entidade}`
    }
  }

  const getLogType = (acao: string) => {
    if (['LOGIN', 'LOGOUT'].includes(acao)) return 'AUTENTICACAO'
    if (['VISUALIZAR_SENHA'].includes(acao)) return 'SENHA'
    if (['CRIAR_PLATAFORMA', 'EDITAR_PLATAFORMA'].includes(acao)) return 'PLATAFORMA'
    if (['EDITAR_COLABORADOR'].includes(acao)) return 'COLABORADOR'
    if (['REPORTAR_PROBLEMA'].includes(acao)) return 'PROBLEMA'
    return 'SISTEMA'
  }

  // Lista de usuários únicos para filtro
  const usuarios = useMemo(() => {
    const uniqueUsers = Array.from(new Set(logs.map(log => log.usuario)))
    return [
      { value: 'TODOS', label: 'Todos os usuários' },
      ...uniqueUsers.map(user => ({ value: user, label: user }))
    ]
  }, [logs])

  const logsFiltrados = useMemo(() => {
    let filtered = logs.filter(log => {
      const matchSearch = !searchTerm || 
        log.detalhes.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.usuario.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.acao.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchAction = selectedAction === 'TODAS' || log.acao === selectedAction
      const matchType = selectedType === 'TODOS' || log.tipo === selectedType
      const matchUser = selectedUser === 'TODOS' || log.usuario === selectedUser
      
      return matchSearch && matchAction && matchType && matchUser
    })

    // Ordenar por data mais recente
    return filtered.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  }, [logs, searchTerm, selectedAction, selectedType, selectedUser])

  const handleExportLogs = () => {
    console.log('Exportando logs...', logsFiltrados)
    // Implementar exportação para CSV/Excel
  }

  if (!isAdmin()) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Acesso Restrito</h2>
          <p className="text-gray-600">Apenas administradores podem acessar os logs do sistema.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6 md:space-y-8">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Logs do Sistema</h1>
            <p className="text-gray-600 mt-1">
              Histórico de todas as ações realizadas no sistema
            </p>
          </div>
          <Button onClick={handleExportLogs} className="gap-2">
            <Download className="h-4 w-4" />
            Exportar Logs
          </Button>
        </div>

        {/* Filtros */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtros
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Busca */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar nos logs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Filtro por ação */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ação
                </label>
                <Select value={selectedAction} onValueChange={setSelectedAction}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {tiposAcao.map((tipo) => (
                      <SelectItem key={tipo.value} value={tipo.value}>
                        {tipo.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Filtro por tipo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo
                </label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {tiposLog.map((tipo) => (
                      <SelectItem key={tipo.value} value={tipo.value}>
                        {tipo.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Filtro por usuário */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Usuário
                </label>
                <Select value={selectedUser} onValueChange={setSelectedUser}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {usuarios.map((user) => (
                      <SelectItem key={user.value} value={user.value}>
                        {user.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Activity className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total de Logs</p>
                  <p className="text-2xl font-bold text-gray-900">{logsFiltrados.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Usuários Ativos</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {new Set(logsFiltrados.map(log => log.usuario)).size}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Hoje</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {logsFiltrados.filter(log => {
                      const today = new Date()
                      const logDate = log.timestamp
                      return logDate.toDateString() === today.toDateString()
                    }).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="h-8 w-8 text-red-600 text-2xl">⚠️</div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Erros/Avisos</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {logsFiltrados.filter(log => log.tipo === 'ERROR' || log.tipo === 'WARNING').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Logs */}
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Ações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="text-gray-500 mt-2">Carregando logs...</p>
                </div>
              ) : logsFiltrados.length > 0 ? (
                logsFiltrados.map((log) => (
                  <div key={log.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        {/* Ícone da ação */}
                        <div className="text-2xl">
                          {getLogIcon(log.acao)}
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Linha principal */}
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900">{log.usuario}</span>
                            <Badge variant={getLogBadgeVariant(log.tipo)}>
                              {log.tipo}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {formatDate(log.timestamp)}
                            </span>
                          </div>

                          {/* Descrição */}
                          <p className="text-gray-700 mb-2">{log.detalhes}</p>

                          {/* Detalhes técnicos */}
                          <div className="text-xs text-gray-500 space-x-4">
                            <span>IP: {log.ip}</span>
                            <span>Ação: {log.acao}</span>
                            {log.entidadeId && <span>ID: {log.entidadeId}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">📝</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Nenhum log encontrado
                  </h3>
                  <p className="text-gray-600">
                    Não há logs que correspondam aos filtros aplicados.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 