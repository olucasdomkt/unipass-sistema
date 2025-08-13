"use client"

import { useState, useEffect } from 'react'
import { Eye, EyeOff, Shield, AlertCircle, Copy, CheckCircle, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog'
import { formatDate } from '@/lib/utils'

interface SecurePasswordViewerProps {
  platformId: string
  platformName: string
  passwordHash: string
  lastViewed?: {
    user: string
    date: Date
  }
  onPasswordViewed?: (platformId: string, password: string) => void
  className?: string
}

interface MasterPasswordValidationProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (password: string) => void
  platformName: string
}

// Simulação de configuração do sistema - em produção viria de uma API
const systemConfig = {
  masterPassword: 'admin123', // Senha mestre cadastrada
  allowPasswordViewing: true,
  requireMasterPassword: true
}

function MasterPasswordValidation({ 
  isOpen, 
  onClose, 
  onSuccess, 
  platformName 
}: MasterPasswordValidationProps) {
  const [masterPassword, setMasterPassword] = useState('')
  const [isValidating, setIsValidating] = useState(false)
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  const maxAttempts = 3

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsValidating(true)
    setError('')

    try {
      // Simular validação da senha mestre
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (!systemConfig.masterPassword) {
        setError('Senha mestre não configurada no sistema. Contate o administrador.')
        return
      }

      if (masterPassword === systemConfig.masterPassword) {
        // Senha correta - simular descriptografia da senha da plataforma
        const decryptedPassword = `senha_${platformName.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}`
        
        // Log da tentativa de acesso bem-sucedida
        console.log('Password access granted:', {
          platformName,
          user: 'current_user@email.com',
          timestamp: new Date(),
          success: true
        })

        onSuccess(decryptedPassword)
        onClose()
        setMasterPassword('')
        setAttempts(0)
      } else {
        const newAttempts = attempts + 1
        setAttempts(newAttempts)
        setError(`Senha mestre incorreta. Tentativa ${newAttempts} de ${maxAttempts}.`)
        
        // Log da tentativa de acesso falhada
        console.log('Password access denied:', {
          platformName,
          user: 'current_user@email.com',
          timestamp: new Date(),
          success: false,
          attempts: newAttempts
        })

        if (newAttempts >= maxAttempts) {
          setError('Muitas tentativas incorretas. Tente novamente em 5 minutos.')
          setTimeout(() => {
            onClose()
            setMasterPassword('')
            setAttempts(0)
            setError('')
          }, 2000)
        }
      }
    } catch (err) {
      setError('Erro ao validar a senha mestre. Tente novamente.')
    } finally {
      setIsValidating(false)
    }
  }

  useEffect(() => {
    if (!isOpen) {
      setMasterPassword('')
      setError('')
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Autenticação Necessária
          </DialogTitle>
          <DialogDescription>
            Para visualizar a senha da plataforma <strong>{platformName}</strong>, 
            digite a senha mestre do sistema.
          </DialogDescription>
        </DialogHeader>

        {!systemConfig.masterPassword ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
              <Lock className="h-4 w-4 text-red-600" />
              <span className="text-sm text-red-700">
                <strong>Sistema bloqueado:</strong> Senha mestre não configurada. 
                Contate o administrador para configurar a segurança do sistema.
              </span>
            </div>
            <DialogFooter>
              <Button onClick={onClose}>Fechar</Button>
            </DialogFooter>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="masterPassword" className="block text-sm font-medium mb-2">
                Senha Mestre
              </label>
              <input
                id="masterPassword"
                type="password"
                value={masterPassword}
                onChange={(e) => setMasterPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite a senha mestre"
                disabled={attempts >= maxAttempts || isValidating}
                required
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="text-sm text-red-700">{error}</span>
              </div>
            )}

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-yellow-800 font-medium">
                  Aviso de Segurança
                </span>
              </div>
              <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                <li>• Todas as visualizações são registradas com seu usuário e horário</li>
                <li>• Máximo de {maxAttempts} tentativas por sessão</li>
                <li>• Use apenas para fins profissionais autorizados</li>
              </ul>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isValidating}
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                disabled={isValidating || attempts >= maxAttempts}
              >
                {isValidating ? 'Verificando...' : 'Visualizar Senha'}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

export function SecurePasswordViewer({ 
  platformId,
  platformName, 
  passwordHash, 
  lastViewed,
  onPasswordViewed,
  className 
}: SecurePasswordViewerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [decryptedPassword, setDecryptedPassword] = useState('')
  const [copied, setCopied] = useState(false)
  const [viewedAt, setViewedAt] = useState<Date | null>(null)

  const handleViewPassword = () => {
    if (!systemConfig.allowPasswordViewing) {
      alert('Visualização de senhas está desabilitada pelo administrador.')
      return
    }
    setShowAuthModal(true)
  }

  const handleAuthSuccess = (password: string) => {
    setDecryptedPassword(password)
    setIsVisible(true)
    setViewedAt(new Date())
    
    // Registrar a visualização na tabela VisualizacaoSenha
    const visualizationData = {
      platformId,
      platformName,
      user: 'current_user@email.com', // viria do contexto de auth
      timestamp: new Date(),
      ip: 'current_ip', // viria do contexto
      userAgent: navigator.userAgent
    }
    
    console.log('Password visualization logged:', visualizationData)
    
    // Callback para o componente pai
    onPasswordViewed?.(platformId, password)
  }

  const handleCopy = async () => {
    if (decryptedPassword) {
      try {
        await navigator.clipboard.writeText(decryptedPassword)
        setCopied(true)
        
        // Log da cópia
        console.log('Password copied:', {
          platformId,
          platformName,
          user: 'current_user@email.com',
          timestamp: new Date()
        })
        
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy password:', err)
      }
    }
  }

  const hidePassword = () => {
    setIsVisible(false)
    setDecryptedPassword('')
    setViewedAt(null)
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="flex-1 font-mono text-sm bg-gray-50 border rounded-md px-3 py-2 min-h-[40px] flex items-center">
          {isVisible ? (
            <span className="break-all">{decryptedPassword}</span>
          ) : (
            <span className="text-gray-400">•••••••••••••••••••••</span>
          )}
        </div>
        
        <div className="flex gap-1">
          {!isVisible ? (
            <Button
              variant="outline"
              size="sm"
              onClick={handleViewPassword}
              className="gap-2"
            >
              <Eye className="h-4 w-4" />
              Ver senha
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="gap-2"
              >
                {copied ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? 'Copiado!' : 'Copiar'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={hidePassword}
                className="gap-2"
              >
                <EyeOff className="h-4 w-4" />
                Ocultar
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Informações de última visualização */}
      {viewedAt && (
        <div className="text-xs text-green-700 bg-green-50 rounded-md p-2">
          <span className="font-medium">Visualizada agora:</span> por você em{' '}
          <span className="font-medium">{formatDate(viewedAt)}</span>
        </div>
      )}

      {lastViewed && !viewedAt && (
        <div className="text-xs text-gray-600 bg-gray-50 rounded-md p-2">
          <span className="font-medium">Última visualização:</span> feita por{' '}
          <span className="font-medium">{lastViewed.user}</span> em{' '}
          <span className="font-medium">{formatDate(lastViewed.date)}</span>
        </div>
      )}

      {/* Modal de autenticação */}
      <MasterPasswordValidation
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        platformName={platformName}
      />
    </div>
  )
} 