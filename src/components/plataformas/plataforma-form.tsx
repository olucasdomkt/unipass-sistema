"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Calendar, Upload, Eye, EyeOff } from 'lucide-react'
import { PlataformaFormData, Plataforma, Cliente } from '@/types'
import { mockClientes } from '@/lib/auth-context'
import { useAuth } from '@/lib/auth-context'

interface PlataformaFormProps {
  plataforma?: Plataforma
  onSubmit: (data: PlataformaFormData) => void
  onCancel: () => void
  isLoading?: boolean
}

const tiposPlataforma = [
  { value: 'MIDIA', label: 'Mídia' },
  { value: 'CRM', label: 'CRM' },
  { value: 'DOMINIO', label: 'Domínio' },
  { value: 'EMAIL', label: 'E-mail' },
  { value: 'DESIGN', label: 'Design' },
  { value: 'GESTAO', label: 'Gestão' },
  { value: 'ANALISE', label: 'Análise' },
  { value: 'HOSPEDAGEM', label: 'Hospedagem' },
  { value: 'OUTROS', label: 'Outros' }
]

const tiposPagamento = [
  { value: 'MENSAL', label: 'Mensal' },
  { value: 'ANUAL', label: 'Anual' }
]

export function PlataformaForm({ plataforma, onSubmit, onCancel, isLoading }: PlataformaFormProps) {
  const { isAdmin } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [customFavicon, setCustomFavicon] = useState<File | null>(null)
  
  const [formData, setFormData] = useState<PlataformaFormData>({
    nome: plataforma?.nome || '',
    tipo: plataforma?.tipo || 'OUTROS',
    emailUtilizado: plataforma?.emailUtilizado || '',
    senhaEncriptada: '', // Sempre vazia por segurança
    custoMensal: plataforma?.custoMensal || 0,
    vinculo: plataforma?.vinculo || 'UNICO',
    clienteId: plataforma?.clienteId || '',
    urlLogin: plataforma?.urlLogin || '',
    observacoes: plataforma?.observacoes || '',
    isGoogleLogin: plataforma?.isGoogleLogin || false,
    googleAccount: plataforma?.googleAccount || '',
    // Campos administrativos
    tipoPagamento: plataforma?.tipoPagamento || 'MENSAL',
    valorFerramenta: plataforma?.valorFerramenta || 0,
    dataAssinatura: plataforma?.dataAssinatura || new Date(),
    quemAssinou: plataforma?.quemAssinou || '',
    motivoUso: plataforma?.motivoUso || ''
  })

  const handleInputChange = (field: keyof PlataformaFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleFaviconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      setCustomFavicon(file)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Informações Básicas */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
          Informações Básicas
        </h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome do Acesso *
          </label>
          <input
            type="text"
            required
            value={formData.nome}
            onChange={(e) => handleInputChange('nome', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: Google Ads"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo *
          </label>
          <Select value={formData.tipo} onValueChange={(value) => handleInputChange('tipo', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              {tiposPlataforma.map((tipo) => (
                <SelectItem key={tipo.value} value={tipo.value}>
                  {tipo.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            URL de Login
          </label>
          <input
            type="url"
            value={formData.urlLogin}
            onChange={(e) => handleInputChange('urlLogin', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vínculo
          </label>
          <Select value={formData.vinculo} onValueChange={(value: 'UNICO' | 'CLIENTE') => handleInputChange('vinculo', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="UNICO">Único</SelectItem>
              <SelectItem value="CLIENTE">Cliente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {formData.vinculo === 'CLIENTE' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cliente
            </label>
            <Select value={formData.clienteId} onValueChange={(value) => handleInputChange('clienteId', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um cliente" />
              </SelectTrigger>
              <SelectContent>
                {mockClientes.map((cliente) => (
                  <SelectItem key={cliente.id} value={cliente.id}>
                    {cliente.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Credenciais */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
          Credenciais de Acesso
        </h3>

        <div className="flex items-center space-x-2">
          <Switch
            checked={formData.isGoogleLogin}
            onCheckedChange={(checked) => handleInputChange('isGoogleLogin', checked)}
          />
          <span className="text-sm font-medium text-gray-700">
            Login via Google Account
          </span>
        </div>

        {formData.isGoogleLogin ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Conta Google *
            </label>
            <input
              type="email"
              required={formData.isGoogleLogin}
              value={formData.googleAccount}
              onChange={(e) => handleInputChange('googleAccount', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="usuario@gmail.com"
            />
          </div>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail Utilizado *
              </label>
              <input
                type="email"
                required={!formData.isGoogleLogin}
                value={formData.emailUtilizado}
                onChange={(e) => handleInputChange('emailUtilizado', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email@dominio.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {plataforma ? 'Nova Senha (deixe vazio para manter atual)' : 'Senha *'}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required={!plataforma}
                  value={formData.senhaEncriptada}
                  onChange={(e) => handleInputChange('senhaEncriptada', e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={plataforma ? 'Nova senha' : 'Senha da plataforma'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Campos Administrativos (só para admins) */}
      {isAdmin() && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
            Informações Administrativas
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Pagamento
              </label>
              <Select value={formData.tipoPagamento} onValueChange={(value: 'MENSAL' | 'ANUAL') => handleInputChange('tipoPagamento', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {tiposPagamento.map((tipo) => (
                    <SelectItem key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor da Ferramenta (R$)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={formData.valorFerramenta}
                onChange={(e) => handleInputChange('valorFerramenta', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0,00"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Data da Assinatura
            </label>
            <input
              type="date"
              value={formData.dataAssinatura?.toISOString().split('T')[0] || ''}
              onChange={(e) => handleInputChange('dataAssinatura', new Date(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quem Assinou
            </label>
            <input
              type="text"
              value={formData.quemAssinou}
              onChange={(e) => handleInputChange('quemAssinou', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nome do responsável"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Motivo de Uso
            </label>
            <textarea
              value={formData.motivoUso}
              onChange={(e) => handleInputChange('motivoUso', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Descreva o motivo de uso desta ferramenta"
            />
          </div>
        </div>
      )}

      {/* Favicon */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
          Favicon (Opcional)
        </h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload de Favicon Personalizado
          </label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFaviconUpload}
              className="hidden"
              id="favicon-upload"
            />
            <label
              htmlFor="favicon-upload"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
            >
              <Upload className="h-4 w-4" />
              Selecionar Arquivo
            </label>
            {customFavicon && (
              <span className="text-sm text-gray-600">
                {customFavicon.name}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Se não enviado, tentaremos buscar automaticamente do domínio
          </p>
        </div>
      </div>

      {/* Observações */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Observações
        </label>
        <textarea
          value={formData.observacoes}
          onChange={(e) => handleInputChange('observacoes', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Informações adicionais sobre a plataforma"
        />
      </div>

      {/* Botões */}
      <div className="flex justify-end gap-3 pt-6 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isLoading}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Salvando...' : plataforma ? 'Atualizar' : 'Criar'} Acesso
        </Button>
      </div>
    </form>
  )
} 