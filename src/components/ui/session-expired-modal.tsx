"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, LogIn, Clock } from 'lucide-react'

interface SessionExpiredModalProps {
  isOpen: boolean
  onLogin: (email: string, password: string) => Promise<boolean>
}

export function SessionExpiredModal({ isOpen, onLogin }: SessionExpiredModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogging, setIsLogging] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLogging(true)
    setError('')

    try {
      const success = await onLogin(email, password)
      if (!success) {
        setError('Credenciais inválidas. Tente novamente.')
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setIsLogging(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl">
            Sessão Expirada
          </DialogTitle>
          <DialogDescription className="text-center">
            Por motivos de segurança, sua sessão expirou após um período de inatividade.
            <br />
            Faça login novamente para continuar.
          </DialogDescription>
        </DialogHeader>

        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
              <div className="text-sm text-orange-800">
                <p className="font-medium mb-1">Importante:</p>
                <p>Todos os dados não salvos podem ter sido perdidos. Recomendamos salvar seu trabalho com frequência.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="seu@email.com"
              required
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full gap-2"
            disabled={isLogging}
          >
            {isLogging ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Fazendo login...
              </>
            ) : (
              <>
                <LogIn className="h-4 w-4" />
                Fazer Login
              </>
            )}
          </Button>
        </form>

        <div className="text-center text-xs text-gray-500">
          <p>Caso tenha esquecido sua senha, entre em contato com o administrador.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
} 