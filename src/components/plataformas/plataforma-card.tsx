"use client"

import { useState } from 'react'
import { Eye, Globe, Clock, AlertTriangle, ExternalLink, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SecurePasswordViewer } from '@/components/ui/secure-password-viewer'
import { ProblemReporter } from '@/components/ui/problem-reporter'
import { formatDate, formatCurrency, isPasswordExpiring, isPasswordExpired } from '@/lib/utils'
import { Plataforma, Cliente } from '@/types'
import Image from 'next/image'

interface PlataformaCardProps {
  plataforma: Plataforma
  cliente?: Cliente
  tipoLabel: string
  showCosts: boolean
  canViewPassword: boolean
  canReportProblem: boolean
  onPasswordView?: (platformId: string, password: string) => void
  onEdit?: (plataforma: Plataforma) => void
  onProblemReport?: (description: string) => void
  onAccessPlatform?: (url: string) => void
}

function getPasswordStatus(ultimaAtualizacao: Date, frequencia: number) {
  if (isPasswordExpired(ultimaAtualizacao, frequencia)) {
    return { 
      status: 'Expirada', 
      variant: 'danger' as const,
      icon: AlertTriangle,
      color: 'text-red-600',
      tooltip: 'Esta senha já expirou e precisa ser atualizada urgentemente'
    }
  }
  if (isPasswordExpiring(ultimaAtualizacao, frequencia)) {
    return { 
      status: 'Expira em breve', 
      variant: 'warning' as const,
      icon: Clock,
      color: 'text-yellow-600',
      tooltip: 'Esta senha expirará nos próximos 7 dias'
    }
  }
  return { 
    status: 'Válida', 
    variant: 'success' as const,
    icon: null,
    color: 'text-green-600',
    tooltip: 'Esta senha está atualizada e válida'
  }
}

export function PlataformaCard({ 
  plataforma, 
  cliente, 
  tipoLabel, 
  showCosts,
  canViewPassword,
  canReportProblem,
  onPasswordView, 
  onEdit, 
  onProblemReport,
  onAccessPlatform
}: PlataformaCardProps) {
  const [imageError, setImageError] = useState(false)
  const passwordStatus = getPasswordStatus(
    plataforma.ultimaAtualizacaoSenha, 
    plataforma.frequenciaAtualizacao
  )

  const StatusIcon = passwordStatus.icon

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          {/* Header com favicon, nome e cliente */}
          <div className="flex items-start gap-4">
            {/* Favicon */}
            <div className="flex-shrink-0">
              {plataforma.favicon && !imageError ? (
                <div className="relative w-8 h-8">
                  <Image
                    src={plataforma.favicon}
                    alt={`${plataforma.nome} favicon`}
                    width={32}
                    height={32}
                    className="rounded-md"
                    onError={handleImageError}
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
                  <Globe className="h-4 w-4 text-gray-500" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              {/* Nome da plataforma */}
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {plataforma.nome}
              </h3>

              {/* Tag do cliente (sem label, apenas o nome) */}
              {plataforma.vinculo === 'CLIENTE' && cliente && (
                <Badge variant="secondary" className="mb-2">
                  {cliente.nome}
                </Badge>
              )}
              {plataforma.vinculo === 'UNICO' && (
                <Badge variant="default" className="mb-2">
                  Único
                </Badge>
              )}

              {/* Login via Google account */}
              {plataforma.isGoogleLogin && plataforma.googleAccount && (
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Mail className="h-4 w-4" />
                  <span>Login via Google: {plataforma.googleAccount}</span>
                </div>
              )}
            </div>

            {/* Status badge com tooltip */}
            <div className="flex items-center gap-2 group relative">
              {StatusIcon && <StatusIcon className={`h-4 w-4 ${passwordStatus.color}`} />}
              <Badge variant={passwordStatus.variant} className="whitespace-nowrap cursor-help">
                {passwordStatus.status}
              </Badge>
              
              {/* Tooltip */}
              <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-48 text-center">
                {passwordStatus.tooltip}
                <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Informações em grid compacto */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-700">Tipo</p>
              <Badge variant="outline" className="text-xs mt-1">{tipoLabel}</Badge>
            </div>

            <div>
              <p className="font-medium text-gray-700">E-mail</p>
              <p className="text-gray-900 mt-1 truncate">{plataforma.emailUtilizado}</p>
            </div>

            <div>
              <p className="font-medium text-gray-700">Atualização</p>
              <p className="text-gray-900 mt-1">{formatDate(plataforma.ultimaAtualizacaoSenha)}</p>
            </div>

            {/* Custo só aparece para admins */}
            {showCosts && plataforma.custoMensal > 0 && (
              <div>
                <p className="font-medium text-gray-700">Custo</p>
                <p className="text-gray-900 font-semibold mt-1">
                  {formatCurrency(plataforma.custoMensal)}
                </p>
              </div>
            )}
          </div>

          {/* Observações se houver */}
          {plataforma.observacoes && (
            <div className="text-sm">
              <p className="font-medium text-gray-700 mb-1">Observações</p>
              <p className="text-gray-600">{plataforma.observacoes}</p>
            </div>
          )}

          {/* Visualizador de senha (apenas se tiver permissão) */}
          {canViewPassword && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Senha</p>
              <SecurePasswordViewer
                platformId={plataforma.id}
                platformName={plataforma.nome}
                passwordHash={plataforma.senhaEncriptada}
                lastViewed={{
                  user: 'Ana Costa',
                  date: new Date('2024-06-20T14:30:00')
                }}
                onPasswordViewed={onPasswordView}
              />
            </div>
          )}

          {/* Ações */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            {/* Botão de acessar plataforma */}
            {plataforma.urlLogin && (
              <Button 
                variant="default" 
                size="sm"
                onClick={() => onAccessPlatform?.(plataforma.urlLogin!)}
                className="gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Acessar plataforma
              </Button>
            )}

            {/* Botão de editar */}
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onEdit?.(plataforma)}
            >
              Editar
            </Button>
            
            {/* Botão de notificar problema (apenas se tiver permissão) */}
            {canReportProblem && (
              <ProblemReporter
                platformName={plataforma.nome}
                platformId={plataforma.id}
                onReportSubmit={onProblemReport}
                className="text-sm"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 