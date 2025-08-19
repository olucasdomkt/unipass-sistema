"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { QuickStats } from '@/components/ui/stats-cards'
import { RecentActivity } from '@/components/ui/recent-activity'
import { LoadingOverlay, PageSkeleton } from '@/components/ui/loading'
import { toast } from '@/components/ui/toast'
import { useQuickSearch } from '@/components/ui/quick-search'
import { 
  Globe, 
  Users, 
  Key, 
  DollarSign, 
  AlertTriangle, 
  Shield,
  Clock,
  TrendingUp,
  Info,
  Search,
  Command
} from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'

// Interface para dados do dashboard
interface DashboardData {
  totalPlataformas: number
  totalColaboradores: number
  colaboradoresAtivos: number
  senhasExpirando: number
  senhasExpiradas: number
  custoMensal: number
  ticketsAbertos: number
  visualizacoesHoje: number
}

const plataformasRecentes = [
  { nome: 'Google Ads', tipo: 'Mídia', vinculo: 'Cliente', status: 'Expirando' },
  { nome: 'Meta Business', tipo: 'Mídia', vinculo: 'Único', status: 'Válida' },
  { nome: 'RD Station', tipo: 'CRM', vinculo: 'Único', status: 'Válida' },
  { nome: 'ClickUp', tipo: 'Gestão', vinculo: 'Único', status: 'Expirada' },
]

const alertasImportantes = [
  {
    tipo: 'senha_expirando',
    mensagem: '5 senhas expirarão nos próximos 7 dias',
    urgencia: 'warning'
  },
  {
    tipo: 'senha_expirada',
    mensagem: '2 senhas já expiraram e precisam ser atualizadas',
    urgencia: 'danger'
  },
  {
    tipo: 'ticket_aberto',
    mensagem: '3 tickets de problemas aguardam resolução',
    urgencia: 'info'
  }
]

export default function Dashboard() {
  const { user, isAdmin, isAdminByEmail } = useAuth()
  const router = useRouter()
  // Toast função já importada diretamente
  const quickSearch = useQuickSearch()
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    totalPlataformas: 0,
    totalColaboradores: 0,
    colaboradoresAtivos: 0,
    senhasExpirando: 0,
    senhasExpiradas: 0,
    custoMensal: 0,
    ticketsAbertos: 0,
    visualizacoesHoje: 0
  })

  // Função para carregar dados do dashboard
  const loadDashboardData = async () => {
    try {
      const [
        plataformasRes,
        colaboradoresRes,
        ticketsRes,
        visualizacoesRes
      ] = await Promise.all([
        supabase.from('plataformas').select('*'),
        supabase.from('colaboradores').select('*'),
        supabase.from('tickets_senha').select('*').eq('status', 'ABERTO'),
        supabase.from('visualizacoes_senha').select('*').gte('data_visualizacao', new Date().toISOString().split('T')[0])
      ])

      // Calcular estatísticas
      const plataformas = plataformasRes.data || []
      const colaboradores = colaboradoresRes.data || []
      const tickets = ticketsRes.data || []
      const visualizacoesHoje = visualizacoesRes.data || []

      // Calcular senhas expirando/expiradas
      const agora = new Date()
      let senhasExpirando = 0
      let senhasExpiradas = 0
      let custoTotal = 0

      plataformas.forEach((plataforma: any) => {
        const ultimaAtualizacao = new Date(plataforma.ultima_atualizacao_senha)
        const diasDesdeAtualizacao = Math.floor((agora.getTime() - ultimaAtualizacao.getTime()) / (1000 * 60 * 60 * 24))
        
        if (diasDesdeAtualizacao >= plataforma.frequencia_atualizacao) {
          senhasExpiradas++
        } else if (diasDesdeAtualizacao >= plataforma.frequencia_atualizacao - 7) {
          senhasExpirando++
        }

        custoTotal += Number(plataforma.custo_mensal || 0)
      })

      setDashboardData({
        totalPlataformas: plataformas.length,
        totalColaboradores: colaboradores.length,
        colaboradoresAtivos: colaboradores.filter((c: any) => c.status === 'ATIVO').length,
        senhasExpirando,
        senhasExpiradas,
        custoMensal: custoTotal,
        ticketsAbertos: tickets.length,
        visualizacoesHoje: visualizacoesHoje.length
      })
    } catch (error) {
      console.error('Erro ao carregar dados do dashboard:', error)
      // Manter dados padrão em caso de erro
    } finally {
      setIsLoading(false)
    }
  }

  // Verifica se o usuário é admin, se não for, redireciona para plataformas
  useEffect(() => {
    if (user && !isAdminByEmail()) {
      router.push('/plataformas')
    } else if (user && isAdminByEmail()) {
      loadDashboardData()
    }
  }, [user, isAdminByEmail, router])

  const handleStatsCardClick = (type: 'acessos' | 'colaboradores' | 'senhas' | 'custos') => {
    switch (type) {
      case 'acessos':
        router.push('/plataformas')
        break
      case 'colaboradores':
        router.push('/colaboradores')
        break
      case 'senhas':
        router.push('/senhas')
        break
      case 'custos':
        toast({
          title: 'Relatório de custos',
          description: 'Navegando para relatórios detalhados...',
          variant: 'default',
          duration: 3000
        })
        router.push('/relatorios')
        break
    }
  }

  // Se não é admin, não renderiza nada (ou loading) enquanto redireciona
  if (user && !isAdminByEmail()) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-blue-600 text-4xl mb-4">🔄</div>
          <p className="text-gray-600">Redirecionando...</p>
        </div>
      </div>
    )
  }

  // Se não é admin, não mostra o dashboard
  if (!isAdminByEmail()) {
    return null
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-6 space-y-8">
          <PageSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Visão geral do sistema de gestão de acessos
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={quickSearch.open}
              className="gap-2"
            >
              <Command className="h-4 w-4" />
              <span className="hidden sm:inline">Busca rápida</span>
              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-sm text-gray-600">Acesso Admin</span>
            </div>
          </div>
        </div>

        {/* Alertas importantes */}
        {alertasImportantes.length > 0 && (
          <div className="grid gap-4">
            {alertasImportantes.map((alerta, index) => (
              <div key={index} className={`
                p-4 rounded-lg border-l-4 ${
                  alerta.urgencia === 'danger' ? 'bg-red-50 border-red-500' :
                  alerta.urgencia === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                  'bg-blue-50 border-blue-500'
                }
              `}>
                <div className="flex items-center gap-2">
                  <AlertTriangle className={`h-5 w-5 ${
                    alerta.urgencia === 'danger' ? 'text-red-600' :
                    alerta.urgencia === 'warning' ? 'text-yellow-600' :
                    'text-blue-600'
                  }`} />
                  <span className="font-medium">{alerta.mensagem}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Estatísticas rápidas */}
        <QuickStats
          totalAcessos={dashboardData.totalPlataformas}
          totalColaboradores={dashboardData.colaboradoresAtivos}
          senhasExpirandoEm7Dias={dashboardData.senhasExpirando}
          custoMensalTotal={dashboardData.custoMensal}
          onCardClick={handleStatsCardClick}
        />

        {/* Seção de atividades e plataformas recentes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Atividade recente */}
          <RecentActivity />
          
          {/* Plataformas com alertas */}
          <Card>
            <CardHeader>
              <CardTitle>Plataformas Prioritárias</CardTitle>
              <CardDescription>
                Plataformas que precisam de atenção
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {plataformasRecentes.map((plataforma, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{plataforma.nome}</span>
                        <Badge variant="outline" className="text-xs">
                          {plataforma.tipo}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">Vínculo: {plataforma.vinculo}</p>
                    </div>
                    <Badge 
                      variant={
                        plataforma.status === 'Expirada' ? 'danger' :
                        plataforma.status === 'Expirando' ? 'warning' :
                        'success'
                      }
                    >
                      {plataforma.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Métricas de segurança */}
          <Card>
            <CardHeader>
              <CardTitle>Métricas de Segurança</CardTitle>
              <CardDescription>
                Atividade e monitoramento do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Visualizações hoje</p>
                    <p className="text-sm text-gray-600">Senhas acessadas</p>
                  </div>
                </div>
                <span className="text-2xl font-bold">{dashboardData.visualizacoesHoje}</span>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Tickets abertos</p>
                    <p className="text-sm text-gray-600">Problemas reportados</p>
                  </div>
                </div>
                <span className="text-2xl font-bold">{dashboardData.ticketsAbertos}</span>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Última atualização</p>
                    <p className="text-sm text-gray-600">Sistema sincronizado</p>
                  </div>
                </div>
                <span className="text-sm text-gray-600">Agora</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 