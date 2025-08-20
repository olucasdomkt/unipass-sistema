"use client"

import { useState } from 'react'
import { X, Send, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'
import { toast } from '@/components/ui/toast'

interface ProblemDrawerProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  plataforma: any
}

export function ProblemDrawer({ isOpen, onClose, onSuccess, plataforma }: ProblemDrawerProps) {
  const { user, updateLastActivity } = useAuth()
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!description.trim()) {
      toast({
        title: 'Erro',
        description: 'Descreva o problema encontrado',
        variant: 'destructive'
      })
      return
    }

    if (!user) {
      toast({
        title: 'Erro',
        description: 'Usuário não autenticado',
        variant: 'destructive'
      })
      return
    }

    setLoading(true)
    updateLastActivity()

    try {
      const { error } = await supabase
        .from('tickets_senha')
        .insert([{
          plataforma_id: plataforma.id,
          colaborador_id: user.id,
          descricao_problema: description.trim(),
          status: 'ABERTO',
          data_abertura: new Date().toISOString()
        }])

      if (error) throw error

      toast({
        title: 'Problema reportado',
        description: 'Seu ticket foi criado e será analisado pela equipe técnica',
        variant: 'default'
      })

      setDescription('')
      onSuccess()
      onClose()
    } catch (error) {
      console.error('Erro ao reportar problema:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível reportar o problema',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setDescription('')
    onClose()
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
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <h2 className="text-lg font-semibold">Reportar problema</h2>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
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

            {/* Problem Description */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descreva o problema encontrado *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Ex: Não consigo fazer login, a senha parece estar incorreta. Tentei redefinir mas não recebo o e-mail de recuperação..."
                  autoFocus
                />
                <p className="mt-1 text-xs text-gray-500">
                  Seja específico sobre o problema para que possamos ajudar melhor
                </p>
              </div>

              {/* Problem Examples */}
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-blue-900 mb-2">Exemplos de problemas:</h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Senha não funciona para login</li>
                  <li>• Conta foi bloqueada ou suspensa</li>
                  <li>• Não consigo acessar funcionalidades específicas</li>
                  <li>• Site/plataforma está fora do ar</li>
                  <li>• Preciso de novas permissões ou acessos</li>
                </ul>
              </div>

              {/* Process Info */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Como funciona?</h4>
                <ol className="text-xs text-gray-600 space-y-1">
                  <li>1. Seu ticket será enviado para a equipe técnica</li>
                  <li>2. Analisaremos o problema reportado</li>
                  <li>3. Você será notificado sobre a resolução</li>
                  <li>4. Verifique os logs para acompanhar o status</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Footer */} 
          <div className="flex items-center justify-end gap-3 p-6 border-t bg-gray-50">
            <Button variant="outline" onClick={handleClose}>
              Cancelar
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={loading || !description.trim()}
              className="flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              {loading ? 'Enviando...' : 'Reportar problema'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
