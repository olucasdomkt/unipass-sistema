"use client"

import { Eye, Edit, Plus, Clock, User, Lock } from 'lucide-react'
import { useRecentActions } from '@/hooks/use-local-storage'

interface ActivityItem {
  id: string
  type: 'view' | 'edit' | 'create' | 'password_view'
  title: string
  description: string
  timestamp: number
  user?: string
}

export function RecentActivity() {
  const { recentActions } = useRecentActions()

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'view': return <Eye className="h-4 w-4 text-blue-600" />
      case 'edit': return <Edit className="h-4 w-4 text-yellow-600" />
      case 'create': return <Plus className="h-4 w-4 text-green-600" />
      case 'password_view': return <Lock className="h-4 w-4 text-purple-600" />
      default: return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'view': return 'bg-blue-100'
      case 'edit': return 'bg-yellow-100'
      case 'create': return 'bg-green-100'
      case 'password_view': return 'bg-purple-100'
      default: return 'bg-gray-100'
    }
  }

  const formatTimestamp = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (minutes < 1) return 'Agora'
    if (minutes < 60) return `${minutes}m atrás`
    if (hours < 24) return `${hours}h atrás`
    if (days < 7) return `${days}d atrás`
    
    return new Date(timestamp).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit'
    })
  }

  if (recentActions.length === 0) {
    return (
      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Atividade Recente
        </h3>
        <div className="text-center py-8">
          <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Nenhuma atividade recente</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Atividade Recente
          </h3>
          <span className="text-sm text-gray-500">
            Últimas {recentActions.length} ações
          </span>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {recentActions.slice(0, 8).map((action, index) => (
          <div 
            key={action.id}
            className="p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className={`
                flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                ${getActivityColor(action.type)}
              `}>
                {getActivityIcon(action.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {action.title}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  {action.description}
                </p>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-xs text-gray-500">
                    {formatTimestamp(action.timestamp)}
                  </span>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {recentActions.length > 8 && (
        <div className="p-4 border-t bg-gray-50">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            Ver todas as atividades
          </button>
        </div>
      )}
    </div>
  )
}

// Componente compacto para sidebars
export function RecentActivityCompact({ limit = 5 }: { limit?: number }) {
  const { recentActions } = useRecentActions()

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'view': return <Eye className="h-3 w-3 text-blue-600" />
      case 'edit': return <Edit className="h-3 w-3 text-yellow-600" />
      case 'create': return <Plus className="h-3 w-3 text-green-600" />
      case 'password_view': return <Lock className="h-3 w-3 text-purple-600" />
      default: return <Clock className="h-3 w-3 text-gray-600" />
    }
  }

  const formatTimestamp = (timestamp: number) => {
    const diff = Date.now() - timestamp
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))

    if (minutes < 1) return 'agora'
    if (minutes < 60) return `${minutes}m`
    if (hours < 24) return `${hours}h`
    return `${Math.floor(hours / 24)}d`
  }

  if (recentActions.length === 0) {
    return (
      <div className="text-center py-4">
        <Clock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
        <p className="text-xs text-gray-500">Nenhuma atividade</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {recentActions.slice(0, limit).map((action) => (
        <div 
          key={action.id}
          className="flex items-center gap-2 text-sm"
        >
          <div className="flex-shrink-0">
            {getActivityIcon(action.type)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-gray-900 truncate text-xs">
              {action.title}
            </p>
            <p className="text-gray-600 truncate text-xs">
              {action.description}
            </p>
          </div>
          <span className="text-xs text-gray-500 flex-shrink-0">
            {formatTimestamp(action.timestamp)}
          </span>
        </div>
      ))}
    </div>
  )
} 