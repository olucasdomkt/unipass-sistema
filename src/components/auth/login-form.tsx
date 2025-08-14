"use client"

import { useState } from 'react'
import { Shield, Eye, EyeOff, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { toast } from '@/components/ui/toast'

export function LoginForm() {
  const { login } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      toast({
        title: 'Erro',
        description: 'Preencha email e senha',
        variant: 'destructive'
      })
      return
    }

    setLoading(true)

    try {
      const success = await login(formData.email, formData.password)
      
      if (!success) {
        toast({
          title: 'Erro de autenticação',
          description: 'Email ou senha incorretos',
          variant: 'destructive'
        })
      }
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Falha na autenticação',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const quickLogin = (email: string, password: string) => {
    setFormData({ email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Unipass</h1>
          <p className="text-blue-100">Sistema de Gestão de Acessos</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="seu@email.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Entrando...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Entrar
                </div>
              )}
            </Button>
          </form>

          {/* Demo credentials */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Contas de demonstração:</h3>
            <div className="space-y-2">
              <button
                onClick={() => quickLogin('admin@unipass.com', 'UniP@ss2024!Admin')}
                className="w-full text-left p-2 rounded text-sm bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-gray-900">👑 Administrador</div>
                <div className="text-gray-600">admin@unipass.com</div>
              </button>
              <button
                onClick={() => quickLogin('user@unipass.com', 'UniP@ss2024!User')}
                className="w-full text-left p-2 rounded text-sm bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-gray-900">👤 Usuário</div>
                <div className="text-gray-600">user@unipass.com</div>
              </button>
              <button
                onClick={() => quickLogin('lucas@agencia.com', 'UniP@ss2024!Lucas')}
                className="w-full text-left p-2 rounded text-sm bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-gray-900">👨‍💻 Lucas</div>
                <div className="text-gray-600">lucas@agencia.com</div>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Senhas controladas pelo sistema (clique nos botões para preencher automaticamente)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
