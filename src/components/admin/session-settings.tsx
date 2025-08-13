"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, Save, RotateCcw, AlertCircle } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

interface SessionSettingsProps {
  isAdmin: boolean
}

const timeoutOptions = [
  { value: 5 * 60 * 1000, label: '5 minutos', description: 'Máxima segurança' },
  { value: 10 * 60 * 1000, label: '10 minutos', description: 'Recomendado' },
  { value: 15 * 60 * 1000, label: '15 minutos', description: 'Balanceado' },
  { value: 30 * 60 * 1000, label: '30 minutos', description: 'Flexível' },
  { value: 60 * 60 * 1000, label: '1 hora', description: 'Menos restritivo' },
  { value: 2 * 60 * 60 * 1000, label: '2 horas', description: 'Desenvolvimento' }
]

export function SessionSettings({ isAdmin }: SessionSettingsProps) {
  const { sessionTimeout, setSessionTimeout } = useAuth()
  const [tempTimeout, setTempTimeout] = useState(sessionTimeout)
  const [hasChanges, setHasChanges] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  if (!isAdmin) return null

  const handleTimeoutChange = (newTimeout: number) => {
    setTempTimeout(newTimeout)
    setHasChanges(newTimeout !== sessionTimeout)
  }

  const handleSave = async () => {
    setIsSaving(true)
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 500))
    
    setSessionTimeout(tempTimeout)
    setHasChanges(false)
    setIsSaving(false)
  }

  const handleReset = () => {
    setTempTimeout(sessionTimeout)
    setHasChanges(false)
  }

  const getCurrentLabel = (timeout: number) => {
    const option = timeoutOptions.find(opt => opt.value === timeout)
    return option ? option.label : 'Personalizado'
  }

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / (60 * 1000))
    const hours = Math.floor(minutes / 60)
    
    if (hours > 0) {
      const remainingMinutes = minutes % 60
      return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}min` : `${hours}h`
    }
    return `${minutes}min`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Configurações de Sessão
        </CardTitle>
        <CardDescription>
          Configure o tempo de auto-logout por inatividade para todos os usuários
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Status atual */}
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div>
            <p className="font-medium text-blue-900">Configuração Atual</p>
            <p className="text-sm text-blue-700">
              Auto-logout após {formatTime(sessionTimeout)} de inatividade
            </p>
          </div>
          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
            {getCurrentLabel(sessionTimeout)}
          </Badge>
        </div>

        {/* Alerta de segurança */}
        <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-medium mb-1">Importante</p>
            <p>Alterar este valor afetará todos os usuários do sistema. Tempos muito longos podem comprometer a segurança.</p>
          </div>
        </div>

        {/* Opções de timeout */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Escolher tempo de auto-logout
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {timeoutOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleTimeoutChange(option.value)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  tempTimeout === option.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="font-medium text-gray-900">{option.label}</div>
                <div className="text-sm text-gray-500 mt-1">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Preview das alterações */}
        {hasChanges && (
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-medium text-gray-900 mb-2">Visualização da alteração:</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                De: <span className="font-medium">{formatTime(sessionTimeout)}</span>
              </span>
              <span className="text-gray-400">→</span>
              <span className="text-blue-600">
                Para: <span className="font-medium">{formatTime(tempTimeout)}</span>
              </span>
            </div>
          </div>
        )}

        {/* Ações */}
        <div className="flex gap-3">
          <Button 
            onClick={handleSave}
            disabled={!hasChanges || isSaving}
            className="gap-2"
          >
            {isSaving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Salvando...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Salvar Configuração
              </>
            )}
          </Button>

          {hasChanges && (
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Cancelar
            </Button>
          )}
        </div>

        {/* Informações adicionais */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>• A configuração se aplica a todos os usuários do sistema</p>
          <p>• Usuários ativos serão deslogados ao atingir o novo tempo limite</p>
          <p>• Para desenvolvimento, recomendamos tempos maiores</p>
          <p>• Para produção, recomendamos entre 5-15 minutos</p>
        </div>
      </CardContent>
    </Card>
  )
} 