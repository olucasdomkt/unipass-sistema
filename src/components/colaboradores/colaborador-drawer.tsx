"use client"

import { useState, useEffect } from 'react'
import { X, Save, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase, Colaborador, Equipe } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'
import { toast } from '@/components/ui/toast'

interface ColaboradorDrawerProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  colaborador?: Colaborador | null
  equipes: Equipe[]
}

const statusOptions = [
  { value: 'ATIVO', label: 'Ativo' },
  { value: 'DEMITIDO', label: 'Demitido' },
  { value: 'SUSPENSO', label: 'Suspenso' }
]

export function ColaboradorDrawer({ isOpen, onClose, onSuccess, colaborador, equipes }: ColaboradorDrawerProps) {
  const { updateLastActivity } = useAuth()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    equipe_id: '',
    status: 'ATIVO' as 'ATIVO' | 'DEMITIDO' | 'SUSPENSO',
    data_entrada: '',
    data_saida: ''
  })

  useEffect(() => {
    if (colaborador) {
      setFormData({
        nome: colaborador.nome || '',
        email: colaborador.email || '',
        equipe_id: colaborador.equipe_id || '',
        status: colaborador.status || 'ATIVO',
        data_entrada: colaborador.data_entrada ? colaborador.data_entrada.split('T')[0] : '',
        data_saida: colaborador.data_saida ? colaborador.data_saida.split('T')[0] : ''
      })
    } else {
      // Reset form for new colaborador
      setFormData({
        nome: '',
        email: '',
        equipe_id: '',
        status: 'ATIVO',
        data_entrada: new Date().toISOString().split('T')[0], // Today
        data_saida: ''
      })
    }
  }, [colaborador])

  const handleSave = async () => {
    if (!formData.nome.trim() || !formData.email.trim()) {
      toast({
        title: 'Erro',
        description: 'Nome e e-mail são obrigatórios',
        variant: 'destructive'
      })
      return
    }

    setLoading(true)
    updateLastActivity()

    try {
      const dataToSave: any = {
        nome: formData.nome.trim(),
        email: formData.email.trim().toLowerCase(),
        equipe_id: formData.equipe_id || null,
        status: formData.status,
        data_entrada: formData.data_entrada ? new Date(formData.data_entrada).toISOString() : new Date().toISOString(),
        data_saida: formData.data_saida ? new Date(formData.data_saida).toISOString() : null,
        updated_at: new Date().toISOString()
      }

      if (colaborador) {
        // Update existing colaborador
        const { error } = await supabase
          .from('colaboradores')
          .update(dataToSave)
          .eq('id', colaborador.id)

        if (error) throw error

        toast({
          title: 'Sucesso',
          description: 'Colaborador atualizado com sucesso',
          variant: 'default'
        })
      } else {
        // Create new colaborador
        dataToSave.created_at = new Date().toISOString()
        
        const { error } = await supabase
          .from('colaboradores')
          .insert([dataToSave])

        if (error) throw error

        toast({
          title: 'Sucesso',
          description: 'Colaborador criado com sucesso',
          variant: 'default'
        })
      }

      onSuccess()
      onClose()
    } catch (error: any) {
      console.error('Erro ao salvar colaborador:', error)
      
      let errorMessage = 'Não foi possível salvar o colaborador'
      if (error.message?.includes('unique')) {
        errorMessage = 'Este e-mail já está sendo usado por outro colaborador'
      }
      
      toast({
        title: 'Erro',
        description: errorMessage,
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">
              {colaborador ? 'Editar colaborador' : 'Novo colaborador'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Informações básicas</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: João Silva"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="joao@agencia.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Equipe
                </label>
                <select
                  value={formData.equipe_id}
                  onChange={(e) => setFormData({ ...formData, equipe_id: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Sem equipe</option>
                  {equipes.map((equipe) => (
                    <option key={equipe.id} value={equipe.id}>
                      {equipe.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {statusOptions.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Datas</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data de entrada
                </label>
                <input
                  type="date"
                  value={formData.data_entrada}
                  onChange={(e) => setFormData({ ...formData, data_entrada: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {(formData.status === 'DEMITIDO' || formData.status === 'SUSPENSO') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data de saída
                  </label>
                  <input
                    type="date"
                    value={formData.data_saida}
                    onChange={(e) => setFormData({ ...formData, data_saida: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    {formData.status === 'DEMITIDO' ? 'Data de demissão' : 'Data de suspensão'}
                  </p>
                </div>
              )}
            </div>

            {/* Info Notice */}
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-blue-900 mb-2">Informações importantes</h4>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• O e-mail será usado para identificação no sistema</li>
                <li>• A equipe define permissões de acesso às plataformas</li>
                <li>• Colaboradores inativos perdem acesso automaticamente</li>
                {!colaborador && (
                  <li>• Após criar, configure os acessos às plataformas necessárias</li>
                )}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t bg-gray-50">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handleSave} disabled={loading}>
              {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
