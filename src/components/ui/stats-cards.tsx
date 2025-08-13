"use client"

import { ReactNode } from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: ReactNode
  trend?: {
    value: number
    direction: 'up' | 'down' | 'neutral'
    label: string
  }
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'gray'
  onClick?: () => void
}

export function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend, 
  color = 'blue',
  onClick 
}: StatsCardProps) {
  const colorClasses = {
    blue: 'border-blue-200 bg-blue-50',
    green: 'border-green-200 bg-green-50',
    yellow: 'border-yellow-200 bg-yellow-50', 
    red: 'border-red-200 bg-red-50',
    purple: 'border-purple-200 bg-purple-50',
    gray: 'border-gray-200 bg-gray-50'
  }

  const iconColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
    gray: 'text-gray-600'
  }

  const getTrendIcon = () => {
    switch (trend?.direction) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />
      case 'down': return <TrendingDown className="h-4 w-4 text-red-600" />
      case 'neutral': return <Minus className="h-4 w-4 text-gray-600" />
      default: return null
    }
  }

  return (
    <div 
      className={`
        relative overflow-hidden rounded-lg border-2 p-6 transition-all duration-200
        ${colorClasses[color]}
        ${onClick ? 'cursor-pointer hover:shadow-lg hover:scale-105' : ''}
      `}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              {title}
            </h3>
            {icon && (
              <div className={`${iconColors[color]}`}>
                {icon}
              </div>
            )}
          </div>
          
          <div className="mt-2">
            <div className="text-3xl font-bold text-gray-900">
              {value}
            </div>
            {subtitle && (
              <p className="text-sm text-gray-600 mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {trend && (
            <div className="mt-4 flex items-center gap-2">
              {getTrendIcon()}
              <span className={`text-sm font-medium ${
                trend.direction === 'up' ? 'text-green-600' :
                trend.direction === 'down' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {trend.value > 0 ? '+' : ''}{trend.value}%
              </span>
              <span className="text-sm text-gray-600">
                {trend.label}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Gradient overlay for visual interest */}
      <div className={`
        absolute inset-0 bg-gradient-to-br opacity-5 pointer-events-none
        ${color === 'blue' ? 'from-blue-600 to-blue-800' :
          color === 'green' ? 'from-green-600 to-green-800' :
          color === 'yellow' ? 'from-yellow-600 to-yellow-800' :
          color === 'red' ? 'from-red-600 to-red-800' :
          color === 'purple' ? 'from-purple-600 to-purple-800' :
          'from-gray-600 to-gray-800'}
      `} />
    </div>
  )
}

interface StatsGridProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
}

export function StatsGrid({ children, cols = 4 }: StatsGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <div className={`grid gap-6 ${gridCols[cols]}`}>
      {children}
    </div>
  )
}

// Componentes de stats específicos para o sistema
interface QuickStatsProps {
  totalAcessos: number
  totalColaboradores: number
  senhasExpirandoEm7Dias: number
  custoMensalTotal: number
  onCardClick?: (type: 'acessos' | 'colaboradores' | 'senhas' | 'custos') => void
}

export function QuickStats({ 
  totalAcessos, 
  totalColaboradores, 
  senhasExpirandoEm7Dias,
  custoMensalTotal,
  onCardClick 
}: QuickStatsProps) {
  return (
    <StatsGrid cols={4}>
      <StatsCard
        title="Total de Acessos"
        value={totalAcessos}
        subtitle="Plataformas ativas"
        color="blue"
        onClick={() => onCardClick?.('acessos')}
        trend={{
          value: 12,
          direction: 'up',
          label: 'este mês'
        }}
      />
      
      <StatsCard
        title="Colaboradores"
        value={totalColaboradores}
        subtitle="Usuários ativos"
        color="green"
        onClick={() => onCardClick?.('colaboradores')}
        trend={{
          value: 0,
          direction: 'neutral',
          label: 'sem mudanças'
        }}
      />
      
      <StatsCard
        title="Senhas Expirando"
        value={senhasExpirandoEm7Dias}
        subtitle="Próximos 7 dias"
        color={senhasExpirandoEm7Dias > 0 ? 'yellow' : 'gray'}
        onClick={() => onCardClick?.('senhas')}
        trend={{
          value: senhasExpirandoEm7Dias > 3 ? 15 : -5,
          direction: senhasExpirandoEm7Dias > 3 ? 'up' : 'down',
          label: 'vs semana anterior'
        }}
      />
      
      <StatsCard
        title="Custo Mensal"
        value={`R$ ${custoMensalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
        subtitle="Ferramentas pagas"
        color="purple"
        onClick={() => onCardClick?.('custos')}
        trend={{
          value: -3,
          direction: 'down',
          label: 'vs mês anterior'
        }}
      />
    </StatsGrid>
  )
} 