"use client"

import { useState, useEffect, useRef } from 'react'
import { X, Eye, EyeOff, ExternalLink, Edit, AlertTriangle, History, Globe, Mail, Shield, Calendar, User, DollarSign, Lock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SecurePasswordViewer } from '@/components/ui/secure-password-viewer'
import { ProblemReporter } from '@/components/ui/problem-reporter'
import { PasswordStrength } from '@/components/ui/password-strength'
import { ShareAccess } from '@/components/ui/share-access'
import { formatDate, formatCurrency, isPasswordExpiring, isPasswordExpired } from '@/lib/utils'
import { Plataforma, Cliente, User as UserType } from '@/types'
import Image from 'next/image'

interface PlataformaDetailsSidebarProps {
  isOpen: boolean
  onClose: () => void
  plataforma: Plataforma | null
  cliente?: Cliente
  currentUser: UserType
  canViewPassword: boolean
  canReportProblem: boolean
  canEdit: boolean
  isAdmin: boolean
  onEdit?: (plataforma: Plataforma) => void
  onPasswordView?: (platformId: string, password: string) => void
  onProblemReport?: (description: string) => void
  onAccessPlatform?: (url: string) => void
  onShareAccess?: (platformId: string, expirationMinutes: number) => Promise<string>
}

// Mock de usuários com acesso
const mockUsersWithAccess = [
  { id: '1', name: 'Ana Costa', email: 'ana@agencia.com', role: 'Admin' },
  { id: '2', name: 'João Silva', email: 'joao@agencia.com', role: 'Usuário' }
]

// Mock de histórico de visualizações
const mockPasswordHistory = [
  { user: 'Ana Costa', date: new Date('2024-07-01T10:30:00'), action: 'Visualizou senha' },
  { user: 'João Silva', date: new Date('2024-06-30T15:20:00'), action: 'Acessou plataforma' },
  { user: 'Ana Costa', date: new Date('2024-06-29T14:15:00'), action: 'Editou plataforma' }
]

export function PlataformaDetailsSidebar({
  isOpen,
  onClose,
  plataforma,
  cliente,
  currentUser,
  canViewPassword,
  canReportProblem,
  canEdit,
  isAdmin,
  onEdit,
  onPasswordView,
  onProblemReport,
  onAccessPlatform,
  onShareAccess
}: PlataformaDetailsSidebarProps) {
  const [imageError, setImageError] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Fechar sidebar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  // RETURN CONDICIONAL APÓS TODOS OS HOOKS
  if (!isOpen || !plataforma) return null

  const handleImageError = () => {
    setImageError(true)
  }

  const getPasswordStatus = () => {
    if (isPasswordExpired(plataforma!.ultimaAtualizacaoSenha, plataforma!.frequenciaAtualizacao)) {
      return { status: 'Expirada', variant: 'destructive' as const, color: 'text-red-600' }
    }
    if (isPasswordExpiring(plataforma!.ultimaAtualizacaoSenha, plataforma!.frequenciaAtualizacao)) {
      return { status: 'Expirando', variant: 'warning' as const, color: 'text-yellow-600' }
    }
    return { status: 'Válida', variant: 'default' as const, color: 'text-green-600' }
  }

  const passwordStatus = getPasswordStatus()

  return (
    <>
      {/* Overlay para mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } lg:hidden`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col overflow-hidden`}
      >
        {/* Header fixo */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white flex-shrink-0">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">Detalhes do Acesso</h2>
          <Button variant="outline" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Conteúdo scrollável */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6 space-y-4 md:space-y-6 pb-8">
            {/* Header com favicon e nome */}
            <div className="flex items-start gap-4">
              {/* Favicon */}
              <div className="flex-shrink-0">
                {plataforma.favicon && !imageError ? (
                  <div className="relative w-12 h-12">
                    <Image
                      src={plataforma.favicon}
                      alt={`${plataforma.nome} favicon`}
                      width={48}
                      height={48}
                      className="rounded-lg"
                      onError={handleImageError}
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-gray-500" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{plataforma.nome}</h3>
                
                {/* Cliente tag */}
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

                {/* Status da senha */}
                <div className="flex items-center gap-2">
                  <Badge variant={passwordStatus.variant}>
                    {passwordStatus.status}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    Atualizada em {formatDate(plataforma.ultimaAtualizacaoSenha)}
                  </span>
                </div>
              </div>
            </div>

            {/* Informações de acesso */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Credenciais de Acesso
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Google Login */}
                {plataforma.isGoogleLogin && plataforma.googleAccount ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span className="font-medium">Login via Google:</span>
                    </div>
                    <div className="pl-6 text-sm">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        {plataforma.googleAccount}
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Email/Login */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span className="font-medium">E-mail/Login:</span>
                      </div>
                      <div className="pl-6 text-sm">
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                          {plataforma.emailUtilizado}
                        </span>
                      </div>
                    </div>

                    {/* Senha */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Eye className="h-4 w-4" />
                        <span className="font-medium">Senha:</span>
                      </div>
                      <div className="pl-6">
                        {canViewPassword ? (
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
                        ) : (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <p className="text-sm text-yellow-800">
                              Você não possui permissão para visualizar a senha desta plataforma.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* 2FA Status */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4" />
                    <span className="font-medium">Autenticação 2FA:</span>
                  </div>
                  <div className="pl-6 text-sm">
                    <Badge variant="outline">
                      Não configurado
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">
                      Nenhum e-mail associado ao Google Authenticator
                    </p>
                  </div>
                </div>

                {/* Análise de força da senha (só se pode visualizar e não é Google login) */}
                {canViewPassword && !plataforma.isGoogleLogin && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Análise de Segurança</h4>
                    <PasswordStrength
                      password="exemplo123" // Em produção, usar a senha real decodificada
                      onPasswordUpdate={(newPassword) => {
                        console.log('Nova senha sugerida:', newPassword)
                        // Aqui você implementaria a lógica de atualização da senha
                        // e registraria o log de atualização
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Link de acesso */}
            {plataforma.urlLogin && (
              <Card>
                <CardContent className="p-4">
                  <Button 
                    onClick={() => onAccessPlatform?.(plataforma.urlLogin!)}
                    className="w-full gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Acessar Plataforma
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Informações gerais */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Informações Gerais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Tipo:</span>
                    <p className="mt-1">{plataforma.tipo}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Frequência:</span>
                    <p className="mt-1">{plataforma.frequenciaAtualizacao} dias</p>
                  </div>
                </div>

                {plataforma.observacoes && (
                  <div>
                    <span className="font-medium text-gray-600">Observações:</span>
                    <p className="mt-1 text-sm text-gray-700">{plataforma.observacoes}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Informações administrativas (só para admins) */}
            {isAdmin && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Informações Administrativas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Custo:</span>
                      <p className="mt-1 font-semibold">{formatCurrency(plataforma.custoMensal)}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Billing:</span>
                      <p className="mt-1">{plataforma.tipoPagamento || 'Mensal'}</p>
                    </div>
                  </div>

                  {plataforma.dataAssinatura && (
                    <div>
                      <span className="font-medium text-gray-600">Data da assinatura:</span>
                      <p className="mt-1 text-sm">{formatDate(plataforma.dataAssinatura)}</p>
                    </div>
                  )}

                  {plataforma.quemAssinou && (
                    <div>
                      <span className="font-medium text-gray-600">Quem assinou:</span>
                      <p className="mt-1 text-sm">{plataforma.quemAssinou}</p>
                    </div>
                  )}

                  {plataforma.motivoUso && (
                    <div>
                      <span className="font-medium text-gray-600">Motivo de uso:</span>
                      <p className="mt-1 text-sm text-gray-700">{plataforma.motivoUso}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Usuários com acesso */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Usuários com Acesso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockUsersWithAccess.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>
                        {user.role}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Histórico recente */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5" />
                  Histórico Recente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockPasswordHistory.map((entry, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-gray-900">{entry.action}</p>
                        <p className="text-gray-500 text-xs">
                          {entry.user} • {formatDate(entry.date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ações rápidas */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                  {canEdit && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onEdit?.(plataforma)}
                      className="gap-2"
                    >
                      <Edit className="h-4 w-4" />
                      Editar
                    </Button>
                  )}

                  {canReportProblem && (
                    <ProblemReporter
                      platformName={plataforma.nome}
                      platformId={plataforma.id}
                      onReportSubmit={onProblemReport}
                      className="text-sm"
                    />
                  )}

                  <ShareAccess
                    platformName={plataforma.nome}
                    platformId={plataforma.id}
                    currentUserName={currentUser.name}
                    canShare={canViewPassword}
                    onShareAccess={onShareAccess}
                  />

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="gap-2"
                  >
                    <History className="h-4 w-4" />
                    Ver Histórico
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
} 