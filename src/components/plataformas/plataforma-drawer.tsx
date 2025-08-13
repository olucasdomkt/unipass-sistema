"use client"

import { useState, useEffect } from 'react'
import { X, Save, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { supabase, PlataformaPublic, Cliente } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'
import { toast } from '@/components/ui/toast'

interface PlataformaDrawerProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  plataforma?: PlataformaPublic | null
  clientes: Cliente[]
}

const tiposPlataforma = [
  { value: 'MIDIA', label: 'Mídia (Google Ads, Meta, etc.)' },
  { value: 'CRM', label: 'CRM (RD Station, HubSpot, etc.)' },
  { value: 'DOMINIO', label: 'Domínio (Registro.br, GoDaddy, etc.)' },
  { value: 'EMAIL', label: 'E-mail (Google Workspace, Outlook, etc.)' },
  { value: 'DESIGN', label: 'Design (Figma, Adobe, etc.)' },
  { value: 'GESTAO', label: 'Gestão (ClickUp, Trello, etc.)' },
  { value: 'ANALISE', label: 'Análise (Google Analytics, Hotjar, etc.)' },
  { value: 'HOSPEDAGEM', label: 'Hospedagem (Vercel, AWS, etc.)' },
  { value: 'OUTROS', label: 'Outros' }
]

const tiposPagamento = [
  { value: 'MENSAL', label: 'Mensal' },
  { value: 'ANUAL', label: 'Anual' }
]

export function PlataformaDrawer({ isOpen, onClose, onSuccess, plataforma, clientes }: PlataformaDrawerProps) {
  const { user, isAdminByEmail, updateLastActivity } = useAuth()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    tipo: 'OUTROS',
    url_login: '',
    email_utilizado: '',
    senha_encriptada: '',
    frequencia_atualizacao: 90,
    vinculo: 'UNICO',
    cliente_id: '',
    observacoes: '',
    login_via_google: false,
    google_email: '',
    // Campos administrativos
    tipo_pagamento: '',
    valor_ferramenta: '',
    data_assinatura: '',
    quem_assinou: '',
    motivo_uso: ''
  })

  useEffect(() => {
    if (plataforma) {
      setFormData({
        nome: plataforma.nome || '',
        tipo: plataforma.tipo || 'OUTROS',
        url_login: plataforma.url_login || '',
        email_utilizado: plataforma.email_utilizado || '',
        senha_encriptada: (plataforma as any).senha_encriptada || '',
        frequencia_atualizacao: plataforma.frequencia_atualizacao || 90,
        vinculo: plataforma.vinculo || 'UNICO',
        cliente_id: plataforma.cliente_id || '',
        observacoes: plataforma.observacoes || '',
        login_via_google: plataforma.login_via_google || false,
        google_email: plataforma.google_email || '',
        // Campos administrativos (apenas para admin)
        tipo_pagamento: (plataforma as any).tipo_pagamento || '',
        valor_ferramenta: (plataforma as any).valor_ferramenta?.toString() || '',
        data_assinatura: (plataforma as any).data_assinatura || '',
        quem_assinou: (plataforma as any).quem_assinou || '',
        motivo_uso: (plataforma as any).motivo_uso || ''
      })
    } else {
      // Reset form for new platform
      setFormData({
        nome: '',
        tipo: 'OUTROS',
        url_login: '',
        email_utilizado: '',
        senha_encriptada: '',
        frequencia_atualizacao: 90,
        vinculo: 'UNICO',
        cliente_id: '',
        observacoes: '',
        login_via_google: false,
        google_email: '',
        tipo_pagamento: '',
        valor_ferramenta: '',
        data_assinatura: '',
        quem_assinou: '',
        motivo_uso: ''
      })
    }
  }, [plataforma])

  const handleSave = async () => {
    if (!formData.nome.trim()) {
      toast({
        title: 'Erro',
        description: 'Nome da plataforma é obrigatório',
        variant: 'destructive'
      })
      return
    }

    setLoading(true)
    updateLastActivity()

    try {
      const dataToSave: any = {
        nome: formData.nome.trim(),
        tipo: formData.tipo,
        url_login: formData.url_login.trim() || null,
        email_utilizado: formData.email_utilizado.trim() || null,
        senha_encriptada: formData.senha_encriptada.trim(),
        frequencia_atualizacao: parseInt(formData.frequencia_atualizacao.toString()) || 90,
        vinculo: formData.vinculo,
        cliente_id: formData.vinculo === 'CLIENTE' ? formData.cliente_id || null : null,
        observacoes: formData.observacoes.trim() || null,
        login_via_google: formData.login_via_google,
        google_email: formData.login_via_google ? formData.google_email.trim() || null : null,
        updated_at: new Date().toISOString()
      }

      // Adicionar campos administrativos apenas para admin
      if (isAdminByEmail()) {
        dataToSave.tipo_pagamento = formData.tipo_pagamento || null
        dataToSave.valor_ferramenta = formData.valor_ferramenta ? parseFloat(formData.valor_ferramenta) : null
        dataToSave.data_assinatura = formData.data_assinatura || null
        dataToSave.quem_assinou = formData.quem_assinou.trim() || null
        dataToSave.motivo_uso = formData.motivo_uso.trim() || null
      }

      if (plataforma) {
        // Update existing platform
        const { error } = await supabase
          .from('plataformas')
          .update(dataToSave)
          .eq('id', plataforma.id)

        if (error) throw error

        toast({
          title: 'Sucesso',
          description: 'Plataforma atualizada com sucesso',
          variant: 'default'
        })
      } else {
        // Create new platform
        dataToSave.created_at = new Date().toISOString()
        dataToSave.ultima_atualizacao_senha = new Date().toISOString()
        dataToSave.custo_mensal = 0
        
        const { error } = await supabase
          .from('plataformas')
          .insert([dataToSave])

        if (error) throw error

        toast({
          title: 'Sucesso',
          description: 'Plataforma criada com sucesso',
          variant: 'default'
        })
      }

      onSuccess()
      onClose()
    } catch (error) {
      console.error('Erro ao salvar plataforma:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível salvar a plataforma',
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
      
      <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">
              {plataforma ? 'Editar plataforma' : 'Nova plataforma'}
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
                  Nome da plataforma *
                </label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Google Ads"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo
                </label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {tiposPlataforma.map((tipo) => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL de login
                </label>
                <input
                  type="url"
                  value={formData.url_login}
                  onChange={(e) => setFormData({ ...formData, url_login: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com/login"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail utilizado
                </label>
                <input
                  type="email"
                  value={formData.email_utilizado}
                  onChange={(e) => setFormData({ ...formData, email_utilizado: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="usuario@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <input
                  type="password"
                  value={formData.senha_encriptada}
                  onChange={(e) => setFormData({ ...formData, senha_encriptada: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Frequência de troca (dias)
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.frequencia_atualizacao}
                  onChange={(e) => setFormData({ ...formData, frequencia_atualizacao: parseInt(e.target.value) || 90 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Client Association */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Vinculação</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vínculo
                </label>
                <select
                  value={formData.vinculo}
                  onChange={(e) => setFormData({ ...formData, vinculo: e.target.value, cliente_id: '' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="UNICO">Único</option>
                  <option value="CLIENTE">Cliente</option>
                </select>
              </div>

              {formData.vinculo === 'CLIENTE' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cliente
                  </label>
                  <select
                    value={formData.cliente_id}
                    onChange={(e) => setFormData({ ...formData, cliente_id: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecione um cliente</option>
                    {clientes.map((cliente) => (
                      <option key={cliente.id} value={cliente.id}>
                        {cliente.nome}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Google Login */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Login via Google</h3>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="login_via_google"
                  checked={formData.login_via_google}
                  onChange={(e) => setFormData({ ...formData, login_via_google: e.target.checked, google_email: '' })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="login_via_google" className="text-sm text-gray-700">
                  Esta plataforma usa login via Google
                </label>
              </div>

              {formData.login_via_google && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail Google
                  </label>
                  <input
                    type="email"
                    value={formData.google_email}
                    onChange={(e) => setFormData({ ...formData, google_email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="conta@gmail.com"
                  />
                </div>
              )}
            </div>

            {/* Admin-only fields */}
            {isAdminByEmail() && (
              <div className="space-y-4 border-t pt-4">
                <h3 className="text-sm font-medium text-gray-900">Informações internas (Admin)</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de pagamento
                    </label>
                    <select
                      value={formData.tipo_pagamento}
                      onChange={(e) => setFormData({ ...formData, tipo_pagamento: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Selecione</option>
                      {tiposPagamento.map((tipo) => (
                        <option key={tipo.value} value={tipo.value}>
                          {tipo.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Valor da ferramenta (R$)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.valor_ferramenta}
                      onChange={(e) => setFormData({ ...formData, valor_ferramenta: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Data da assinatura
                    </label>
                    <input
                      type="date"
                      value={formData.data_assinatura}
                      onChange={(e) => setFormData({ ...formData, data_assinatura: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quem assinou
                    </label>
                    <input
                      type="text"
                      value={formData.quem_assinou}
                      onChange={(e) => setFormData({ ...formData, quem_assinou: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nome do responsável"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Motivo de uso
                  </label>
                  <textarea
                    value={formData.motivo_uso}
                    onChange={(e) => setFormData({ ...formData, motivo_uso: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Por que esta ferramenta é necessária?"
                  />
                </div>
              </div>
            )}

            {/* Observations */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Observações
              </label>
              <textarea
                value={formData.observacoes}
                onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Informações adicionais sobre a plataforma..."
              />
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
