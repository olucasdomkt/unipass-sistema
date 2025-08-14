"use client"

import { useState } from 'react'
import { X, Save, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'
import { toast } from '@/components/ui/toast'

interface ClientDrawerProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function ClientDrawer({ isOpen, onClose, onSuccess }: ClientDrawerProps) {
  const { updateLastActivity } = useAuth()
  const [loading, setLoading] = useState(false)
  
  // Form states
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [observacoes, setObservacoes] = useState('')

  const handleSubmit = async () => {
    if (!nome.trim()) {
      toast({
        title: 'Erro',
        description: 'Nome do cliente é obrigatório',
        variant: 'destructive'
      })
      return
    }

    setLoading(true)
    updateLastActivity()

    try {
      const { error } = await supabase
        .from('clientes')
        .insert([{
          nome: nome.trim(),
          email: email.trim() || null,
          telefone: telefone.trim() || null,
          observacoes: observacoes.trim() || null,
          ativo: true
        }])

      if (error) {
        console.error('Erro ao criar cliente:', error)
        toast({
          title: 'Erro',
          description: 'Não foi possível criar o cliente',
          variant: 'destructive'
        })
        return
      }

      toast({
        title: 'Sucesso',
        description: 'Cliente criado com sucesso',
        variant: 'default'
      })
      
      handleClose()
      onSuccess()
    } catch (error) {
      console.error('Erro ao salvar:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível salvar o cliente',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setNome('')
    setEmail('')
    setTelefone('')
    setObservacoes('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Novo cliente</h2>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do cliente *
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: Empresa ABC Ltda"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* E-mail */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail de contato
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contato@empresa.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(11) 99999-9999"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Observações */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Observações
              </label>
              <textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                rows={3}
                placeholder="Observações sobre o cliente..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-6">
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleClose}
                disabled={loading}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 flex items-center gap-2"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Save className="h-4 w-4" />
                )}
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

