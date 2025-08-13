"use client"

import { useState } from 'react'
import { BarChart3, PieChart, Download, Calendar, Filter, TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'

// Mock data para relatórios
const mockData = {
  platformsUsage: [
    { name: 'Google Ads', acessos: 45, tempo: '2h 30m' },
    { name: 'Meta Business', acessos: 38, tempo: '1h 45m' },
    { name: 'RD Station', acessos: 28, tempo: '1h 20m' },
    { name: 'Figma', acessos: 52, tempo: '3h 15m' }
  ],
  passwordStats: {
    validas: 12,
    expirando: 3,
    expiradas: 2,
    total: 17
  },
  monthlyAccess: [
    { mes: 'Jan', acessos: 120 },
    { mes: 'Fev', acessos: 135 },
    { mes: 'Mar', acessos: 148 },
    { mes: 'Abr', acessos: 162 },
    { mes: 'Mai', acessos: 189 },
    { mes: 'Jun', acessos: 203 }
  ],
  topUsers: [
    { nome: 'Administrador', acessos: 89, percentual: 25 },
    { nome: 'Lucas Agência', acessos: 67, percentual: 19 },
    { nome: 'Usuário Demo', acessos: 45, percentual: 13 }
  ]
}

export default function RelatoriosPage() {
  const { user, isAdminByEmail, updateLastActivity } = useAuth()
  const [selectedPeriod, setSelectedPeriod] = useState('30d')

  if (!isAdminByEmail()) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Acesso restrito</h3>
          <p className="text-gray-600">
            Apenas administradores podem acessar os relatórios.
          </p>
        </div>
      </div>
    )
  }

  const handleExport = (type: string) => {
    updateLastActivity()
    // Simular export
    setTimeout(() => {
      const link = document.createElement('a')
      link.href = 'data:text/csv;charset=utf-8,Nome,Acessos,Tempo\nGoogle Ads,45,2h 30m'
      link.download = `relatorio-${type}-${new Date().toISOString().split('T')[0]}.csv`
      link.click()
    }, 500)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Relatórios</h1>
          <p className="text-gray-600">
            Análises e métricas de uso do sistema
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 90 dias</option>
            <option value="1y">Último ano</option>
          </select>
          
          <Button
            variant="outline"
            onClick={() => handleExport('geral')}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total de Acessos</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% vs mês anterior
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <PieChart className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Plataformas Ativas</p>
                <p className="text-2xl font-bold text-gray-900">17</p>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2 novas este mês
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Senhas Expirando</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <div className="flex items-center text-sm text-yellow-600">
                  Próximos 7 dias
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <Filter className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Usuários Ativos</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <div className="flex items-center text-sm text-red-600">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -1 vs mês anterior
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Uso por Plataforma */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Uso por Plataforma
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.platformsUsage.map((platform, index) => (
                <div key={platform.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500" style={{
                      backgroundColor: `hsl(${index * 60}, 70%, 50%)`
                    }} />
                    <span className="font-medium text-gray-900">{platform.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{platform.acessos} acessos</div>
                    <div className="text-xs text-gray-500">{platform.tempo}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status das Senhas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Status das Senhas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-900">Válidas</span>
                </div>
                <span className="font-medium text-gray-900">{mockData.passwordStats.validas}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="text-gray-900">Expirando</span>
                </div>
                <span className="font-medium text-gray-900">{mockData.passwordStats.expirando}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-gray-900">Expiradas</span>
                </div>
                <span className="font-medium text-gray-900">{mockData.passwordStats.expiradas}</span>
              </div>
              
              <div className="pt-2 border-t">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">{mockData.passwordStats.total}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Acessos Mensais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Acessos Mensais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.monthlyAccess.map((month) => (
                <div key={month.mes} className="flex items-center justify-between">
                  <span className="text-gray-900">{month.mes}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(month.acessos / 250) * 100}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-900 w-8 text-right">{month.acessos}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Usuários */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Usuários Mais Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.topUsers.map((user, index) => (
                <div key={user.nome} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-900">{user.nome}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{user.acessos} acessos</div>
                    <div className="text-xs text-gray-500">{user.percentual}% do total</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle>Exportar Relatórios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              onClick={() => handleExport('plataformas')}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Relatório de Plataformas
            </Button>
            
            <Button
              variant="outline"
              onClick={() => handleExport('senhas')}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Relatório de Senhas
            </Button>
            
            <Button
              variant="outline"
              onClick={() => handleExport('usuarios')}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Relatório de Usuários
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}