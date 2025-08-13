"use client"

import { useState } from 'react'
import { X, Eye, EyeOff, Copy, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'
import { toast } from '@/components/ui/toast'

interface PasswordDrawerProps {
  isOpen: boolean
  onClose: () => void
  plataforma: any
}

export function PasswordDrawer({ isOpen, onClose, plataforma }: PasswordDrawerProps) {
  const { user, updateLastActivity } = useAuth()
  const [masterPassword, setMasterPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [lastViewer, setLastViewer] = useState<{ nome: string; data: string } | null>(null)

  const handleAuthenticate = async () => {
    if (!masterPassword.trim()) {
      toast({
        title: 'Erro',
        description: 'Digite a senha mestre',
        variant: 'destructive'
      })
      return
    }

    setLoading(true)
    updateLastActivity()

    try {
      // Verificar senha mestre (placeholder - implementar autenticação real)
      // Por enquanto, vamos aceitar qualquer senha para demonstração
      if (masterPassword === 'admin123' || masterPassword === 'master') {
        setIsAuthenticated(true)
        
        // Registrar visualização
        if (user && plataforma) {
          const { error } = await supabase
            .from('visualizacoes_senha')
            .insert([{
              plataforma_id: plataforma.id,
              colaborador_id: user.id,
              data_visualizacao: new Date().toISOString(),
              ip: null, // Pode ser obtido via API
              user_agent: navigator.userAgent
            }])

          if (error) {
            console.error('Erro ao registrar visualização:', error)
          }

          // Buscar última visualização anterior
          const { data: lastVisualization } = await supabase
            .from('visualizacoes_senha')
            .select(`
              data_visualizacao,
              colaboradores!inner(nome)
            `)
            .eq('plataforma_id', plataforma.id)
            .neq('colaborador_id', user.id)
            .order('data_visualizacao', { ascending: false })
            .limit(1)

          if (lastVisualization && lastVisualization.length > 0) {
            const viz = lastVisualization[0]
            setLastViewer({
              nome: (viz.colaboradores as any).nome,
              data: viz.data_visualizacao
            })
          }
        }

        toast({
          title: 'Acesso autorizado',
          description: 'Senha revelada com sucesso',
          variant: 'default'
        })
      } else {
        toast({
          title: 'Acesso negado',
          description: 'Senha mestre incorreta',
          variant: 'destructive'
        })
      }
    } catch (error) {
      console.error('Erro na autenticação:', error)
      toast({
        title: 'Erro',
        description: 'Falha na autenticação',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCopyPassword = async () => {
    if (!plataforma?.senha_encriptada) return

    try {
      await navigator.clipboard.writeText(plataforma.senha_encriptada)
      toast({
        title: 'Senha copiada',
        description: 'A senha foi copiada para a área de transferência',
        variant: 'default'
      })
      updateLastActivity()
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível copiar a senha',
        variant: 'destructive'
      })
    }
  }

  const handleClose = () => {
    setMasterPassword('')
    setIsAuthenticated(false)
    setShowPassword(false)
    setLastViewer(null)
    onClose()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!isOpen || !plataforma) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Visualizar senha</h2>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-6">
            {/* Platform Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">{plataforma.nome}</h3>
              {plataforma.email_utilizado && (
                <p className="text-sm text-gray-600 mb-1">
                  <strong>E-mail:</strong> {plataforma.email_utilizado}
                </p>
              )}
              {plataforma.url_login && (
                <p className="text-sm text-gray-600">
                  <strong>URL:</strong> 
                  <a 
                    href={plataforma.url_login} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    {plataforma.url_login}
                  </a>
                </p>
              )}
            </div>

            {!isAuthenticated ? (
              /* Authentication */
              <div className="space-y-4">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Autenticação necessária
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Digite a senha mestre para visualizar a senha desta plataforma
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Senha mestre
                  </label>
                  <input
                    type="password"
                    value={masterPassword}
                    onChange={(e) => setMasterPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAuthenticate()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    autoFocus
                  />
                </div>

                <Button 
                  onClick={handleAuthenticate}
                  disabled={loading || !masterPassword.trim()}
                  className="w-full"
                >
                  {loading ? 'Verificando...' : 'Autenticar'}
                </Button>

                <div className="text-xs text-gray-500 text-center space-y-1">
                  <p>🔒 Para demonstração, use: <code className="bg-gray-100 px-1 rounded">admin123</code></p>
                  <p>Ou: <code className="bg-gray-100 px-1 rounded">master</code></p>
                </div>
              </div>
            ) : (
              /* Password Display */
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700 mb-2">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">Acesso autorizado</span>
                  </div>
                  <p className="text-xs text-green-600">
                    A visualização desta senha foi registrada nos logs do sistema.
                  </p>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Senha da plataforma
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={plataforma.senha_encriptada || ''}
                        readOnly
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md bg-gray-50 font-mono text-sm"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyPassword}
                      className="flex items-center gap-1"
                    >
                      <Copy className="h-3 w-3" />
                      Copiar
                    </Button>
                  </div>
                </div>

                {/* Last Access Info */}
                {lastViewer && (
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                    <div className="flex items-center gap-2 text-yellow-700 mb-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">Última visualização</span>
                    </div>
                    <p className="text-xs text-yellow-600">
                      Feita por <strong>{lastViewer.nome}</strong> em {formatDate(lastViewer.data)}
                    </p>
                  </div>
                )}

                {/* Security Notice */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Aviso de segurança</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Não compartilhe esta senha com pessoas não autorizadas</li>
                    <li>• Use sempre em ambiente seguro</li>
                    <li>• Reporte imediatamente se suspeitar de acesso não autorizado</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t bg-gray-50">
            <Button variant="outline" onClick={handleClose} className="w-full">
              Fechar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
