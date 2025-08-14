"use client"

import { useState, useEffect } from 'react'
import { X, Building2, Mail, Phone, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'
import { toast } from '@/components/ui/toast'

interface ClientDrawerProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  cliente?: any
}

export function ClientDrawer({ isOpen, onClose, onSuccess, cliente }: ClientDrawerProps) {
  const { updateLastActivity } = useAuth()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    ativo: true
  })

  useEffect(() => {
    if (cliente) {
      setFormData({
        nome: cliente.nome || '',
        email: cliente.email || '',
        telefone: cliente.telefone || '',
        ativo: cliente.ativo ?? true
      })
    } else {
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        ativo: true
      })
    }
  }, [cliente])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.nome.trim()) {
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
      if (cliente) {
        // Editar cliente existente
        const { error } = await supabase
          .from('clientes')
          .update({
            nome: formData.nome.trim(),
            email: formData.email.trim() || null,
            telefone: formData.telefone.trim() || null,
            ativo: formData.ativo
          })
          .eq('id', cliente.id)

        if (error) throw error

        toast({
          title: 'Cliente atualizado',
          description: 'Cliente foi atualizado com sucesso',
          variant: 'default'
        })
      } else {
        // Criar novo cliente
        const { error } = await supabase
          .from('clientes')
          .insert([{
            nome: formData.nome.trim(),
            email: formData.email.trim() || null,
            telefone: formData.telefone.trim() || null,
            ativo: formData.ativo
          }])

        if (error) throw error

        toast({
          title: 'Cliente criado',
          description: 'Cliente foi criado com sucesso',
          variant: 'default'
        })
      }

      onSuccess()
      onClose()
    } catch (error) {
      console.error('Erro ao salvar cliente:', error)
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
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      ativo: true
    })
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
              <h2 className="text-lg font-semibold">
                {cliente ? 'Editar Cliente' : 'Novo Cliente'}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do Cliente *
                </label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Ex: Empresa ABC Ltda"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="contato@empresa.com"
                  />
                </div>
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="ativo"
                      checked={formData.ativo}
                      onChange={() => setFormData({ ...formData, ativo: true })}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Ativo</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="ativo"
                      checked={!formData.ativo}
                      onChange={() => setFormData({ ...formData, ativo: false })}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Inativo</span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t bg-gray-50">
            <Button variant="outline" onClick={handleClose}>
              Cancelar
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={loading || !formData.nome.trim()}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              {loading ? 'Salvando...' : cliente ? 'Atualizar' : 'Criar Cliente'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
