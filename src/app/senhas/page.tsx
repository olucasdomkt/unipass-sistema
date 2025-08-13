"use client"

import { useState, useEffect } from 'react'
import { Search, Eye, Copy, Key, Lock, CheckCircle, Clock, XCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/lib/auth-context'
import { PasswordDrawer } from '@/components/plataformas/password-drawer'
import { toast } from '@/components/ui/toast'

// Mock data para senhas (baseado nas plataformas)
const mockSenhas = [
  {
    id: '1',
    plataforma: 'Google Ads',
    email: 'ads@agencia.com',
    senha: 'MinhaSenh@123',
    status: 'valid' as const,
    ultimaAlteracao: '2024-06-15',
    proximaTroca: '2024-09-15',
    tipo: 'MIDIA',
    cliente: null
  },
  {
    id: '2',
    plataforma: 'Meta Business',
    email: 'meta@agencia.com',
    senha: 'MetaPass@456',
    status: 'expiring' as const,
    ultimaAlteracao: '2024-04-20',
    proximaTroca: '2024-07-20',
    tipo: 'MIDIA',
    cliente: 'Cliente ABC Ltda'
  },
  {
    id: '3',
    plataforma: 'RD Station',
    email: 'crm@agencia.com',
    senha: 'RdStation@789',
    status: 'expired' as const,
    ultimaAlteracao: '2024-01-10',
    proximaTroca: '2024-04-10',
    tipo: 'CRM',
    cliente: null
  },
  {
    id: '4',
    plataforma: 'Figma',
    email: 'design@agencia.com',
    senha: 'FigmaDesign@101',
    status: 'valid' as const,
    ultimaAlteracao: '2024-06-01',
    proximaTroca: '2024-09-01',
    tipo: 'DESIGN',
    cliente: null
  }
]

export default function SenhasPage() {
  const { user, updateLastActivity } = useAuth()
  const [senhas, setSenhas] = useState(mockSenhas)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [selectedSenha, setSelectedSenha] = useState<any>(null)
  const [showPasswordDrawer, setShowPasswordDrawer] = useState(false)

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'valid':
        return {
          icon: CheckCircle,
          color: 'text-green-600',
          bg: 'bg-green-100',
          label: 'Válida',
          description: 'Senha dentro do prazo'
        }
      case 'expiring':
        return {
          icon: Clock,
          color: 'text-yellow-600',
          bg: 'bg-yellow-100',
          label: 'Expirando',
          description: 'Trocar em breve'
        }
      case 'expired':
        return {
          icon: XCircle,
          color: 'text-red-600',
          bg: 'bg-red-100',
          label: 'Expirada',
          description: 'Trocar urgente'
        }
      default:
        return {
          icon: Key,
          color: 'text-gray-600',
          bg: 'bg-gray-100',
          label: 'Desconhecido',
          description: 'Status indefinido'
        }
    }
  }

  const filteredSenhas = senhas.filter(senha => {
    const matchesSearch = senha.plataforma.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         senha.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         senha.cliente?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = !statusFilter || senha.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const handleViewPassword = (senha: any) => {
    updateLastActivity()
    setSelectedSenha(senha)
    setShowPasswordDrawer(true)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const getStatsData = () => {
    const total = senhas.length
    const validas = senhas.filter(s => s.status === 'valid').length
    const expirando = senhas.filter(s => s.status === 'expiring').length
    const expiradas = senhas.filter(s => s.status === 'expired').length

    return { total, validas, expirando, expiradas }
  }

  const stats = getStatsData()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Senhas</h1>
        <p className="text-gray-600">
          Visualize e gerencie as senhas das plataformas
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Key className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Válidas</p>
              <p className="text-2xl font-bold text-gray-900">{stats.validas}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Expirando</p>
              <p className="text-2xl font-bold text-gray-900">{stats.expirando}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Expiradas</p>
              <p className="text-2xl font-bold text-gray-900">{stats.expiradas}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Buscar plataforma ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Todos os status</option>
          <option value="valid">Válidas</option>
          <option value="expiring">Expirando</option>
          <option value="expired">Expiradas</option>
        </select>
      </div>

      {/* Senhas List */}
      <div className="space-y-4">
        {filteredSenhas.length === 0 ? (
          <Card className="p-8 text-center">
            <Lock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Nenhuma senha encontrada</p>
          </Card>
        ) : (
          filteredSenhas.map((senha) => {
            const statusInfo = getStatusInfo(senha.status)
            
            return (
              <Card key={senha.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                      <Key className="h-5 w-5 text-gray-500" />
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-gray-900">
                          {senha.plataforma}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {senha.cliente || 'Único'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{senha.email}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-500">
                          Alterada: {formatDate(senha.ultimaAlteracao)}
                        </span>
                        <span className="text-xs text-gray-500">
                          Próxima troca: {formatDate(senha.proximaTroca)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Status */}
                    <div 
                      className={`flex items-center gap-1 px-2 py-1 rounded-full ${statusInfo.bg}`}
                      title={statusInfo.description}
                    >
                      <statusInfo.icon className={`h-3 w-3 ${statusInfo.color}`} />
                      <span className={`text-xs font-medium ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </div>

                    {/* Actions */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewPassword(senha)}
                      className="flex items-center gap-1"
                    >
                      <Eye className="h-3 w-3" />
                      Ver senha
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })
        )}
      </div>

      {/* Password Drawer */}
      <PasswordDrawer
        isOpen={showPasswordDrawer}
        onClose={() => {
          setShowPasswordDrawer(false)
          setSelectedSenha(null)
        }}
        plataforma={selectedSenha}
      />
    </div>
  )
}