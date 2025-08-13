"use client"

import { useState } from 'react'
import { Eye, EyeOff, Shield, AlertCircle, Copy, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'

interface PasswordViewerProps {
  passwordHash: string
  platformName: string
  lastViewed?: {
    user: string
    date: Date
  }
  onView?: (password: string) => void
  className?: string
}

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (password: string) => void
  platformName: string
}

function AuthModal({ isOpen, onClose, onSuccess, platformName }: AuthModalProps) {
  const [masterPassword, setMasterPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Simulação de autenticação
      // Em produção, isso seria uma chamada para a API
      if (masterPassword === 'master123') {
        // Senha mockada para demonstração
        const decryptedPassword = 'senha_real_da_plataforma_123'
        onSuccess(decryptedPassword)
        onClose()
      } else {
        setError('Senha mestre incorreta')
      }
    } catch (err) {
      setError('Erro ao verificar a senha mestre')
    } finally {
      setIsLoading(false)
    }
  }

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
            <p className="text-sm text-yellow-700 mt-1">
              Todas as visualizações de senha são registradas com seu usuário, data e horário.
            </p>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Verificando...' : 'Visualizar Senha'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function PasswordViewer({ 
  passwordHash, 
  platformName, 
  lastViewed, 
  onView,
  className 
}: PasswordViewerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [decryptedPassword, setDecryptedPassword] = useState('')
  const [copied, setCopied] = useState(false)

  const handleViewPassword = () => {
    setShowAuthModal(true)
  }

  const handleAuthSuccess = (password: string) => {
    setDecryptedPassword(password)
    setIsVisible(true)
    onView?.(password)
    
    // Log da visualização seria enviado para a API aqui
    console.log('Password viewed:', {
      platform: platformName,
      user: 'current_user@email.com', // viria do contexto de auth
      timestamp: new Date()
    })
  }

  const handleCopy = async () => {
    if (decryptedPassword) {
      await navigator.clipboard.writeText(decryptedPassword)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const hidePassword = () => {
    setIsVisible(false)
    setDecryptedPassword('')
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="flex-1 font-mono text-sm bg-gray-50 border rounded-md px-3 py-2">
          {isVisible ? decryptedPassword : '•'.repeat(12)}
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

      {lastViewed && (
        <div className="text-xs text-gray-600 bg-gray-50 rounded-md p-2">
          <span className="font-medium">Última visualização:</span> feita por{' '}
          <span className="font-medium">{lastViewed.user}</span> em{' '}
          <span className="font-medium">{formatDate(lastViewed.date)}</span>
        </div>
      )}

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        platformName={platformName}
      />
    </div>
  )
} 