"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, XCircle, AlertTriangle, Lightbulb, Copy } from 'lucide-react'

interface PasswordStrengthProps {
  password: string
  onPasswordUpdate?: (newPassword: string) => void
  className?: string
}

interface PasswordAnalysis {
  score: number
  feedback: string[]
  suggestions: string[]
  strength: 'weak' | 'fair' | 'good' | 'strong'
  color: string
  bgColor: string
}

// Função simples de análise de senha (substitua por zxcvbn se necessário)
function analyzePassword(password: string): PasswordAnalysis {
  let score = 0
  const feedback: string[] = []
  const suggestions: string[] = []

  // Critérios de força
  const hasLowerCase = /[a-z]/.test(password)
  const hasUpperCase = /[A-Z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
  const isLongEnough = password.length >= 8
  const isVeryLong = password.length >= 12
  const hasNoCommonPatterns = !/(123|abc|password|admin|qwerty)/i.test(password)

  // Calcular pontuação
  if (hasLowerCase) score += 1
  if (hasUpperCase) score += 1
  if (hasNumbers) score += 1
  if (hasSymbols) score += 2
  if (isLongEnough) score += 1
  if (isVeryLong) score += 1
  if (hasNoCommonPatterns) score += 1

  // Feedback baseado nos critérios
  if (!isLongEnough) {
    feedback.push('Senha muito curta')
    suggestions.push('Use pelo menos 8 caracteres')
  }
  if (!hasLowerCase) {
    feedback.push('Faltam letras minúsculas')
    suggestions.push('Adicione letras minúsculas')
  }
  if (!hasUpperCase) {
    feedback.push('Faltam letras maiúsculas')
    suggestions.push('Adicione letras maiúsculas')
  }
  if (!hasNumbers) {
    feedback.push('Faltam números')
    suggestions.push('Adicione alguns números')
  }
  if (!hasSymbols) {
    feedback.push('Faltam símbolos')
    suggestions.push('Adicione símbolos especiais (!@#$%)')
  }
  if (!hasNoCommonPatterns) {
    feedback.push('Contém padrões comuns')
    suggestions.push('Evite sequências e palavras comuns')
  }

  // Determinar força baseada na pontuação
  let strength: 'weak' | 'fair' | 'good' | 'strong'
  let color: string
  let bgColor: string

  if (score <= 2) {
    strength = 'weak'
    color = 'text-red-600'
    bgColor = 'bg-red-100'
  } else if (score <= 4) {
    strength = 'fair'
    color = 'text-yellow-600'
    bgColor = 'bg-yellow-100'
  } else if (score <= 6) {
    strength = 'good'
    color = 'text-blue-600'
    bgColor = 'bg-blue-100'
  } else {
    strength = 'strong'
    color = 'text-green-600'
    bgColor = 'bg-green-100'
  }

  return { score, feedback, suggestions, strength, color, bgColor }
}

function generateStrongerPassword(originalPassword: string): string {
  // Estratégia: melhorar a senha original mantendo parte do padrão
  let newPassword = originalPassword

  // Se for muito curta, adicionar caracteres
  if (newPassword.length < 8) {
    newPassword += '2024!'
  }

  // Garantir maiúscula
  if (!/[A-Z]/.test(newPassword)) {
    newPassword = newPassword.charAt(0).toUpperCase() + newPassword.slice(1)
  }

  // Garantir número
  if (!/\d/.test(newPassword)) {
    newPassword += Math.floor(Math.random() * 99).toString()
  }

  // Garantir símbolo
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword)) {
    const symbols = ['!', '@', '#', '$', '%', '&', '*']
    newPassword += symbols[Math.floor(Math.random() * symbols.length)]
  }

  // Embaralhar um pouco para não ficar previsível
  const chars = newPassword.split('')
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    if (i < chars.length / 2) { // Só embaralhar a segunda metade
      [chars[i], chars[j]] = [chars[j], chars[i]]
    }
  }

  return chars.join('')
}

export function PasswordStrength({ 
  password, 
  onPasswordUpdate,
  className = ""
}: PasswordStrengthProps) {
  const [suggestedPassword, setSuggestedPassword] = useState<string>('')
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  const analysis = analyzePassword(password)

  const handleGenerateSuggestion = () => {
    const suggestion = generateStrongerPassword(password)
    setSuggestedPassword(suggestion)
    setShowSuggestion(true)
  }

  const handleAcceptSuggestion = async () => {
    setIsUpdating(true)
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (onPasswordUpdate) {
      onPasswordUpdate(suggestedPassword)
    }
    
    setShowSuggestion(false)
    setIsUpdating(false)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const getStrengthLabel = (strength: string) => {
    switch (strength) {
      case 'weak': return 'Fraca'
      case 'fair': return 'Regular'
      case 'good': return 'Boa'
      case 'strong': return 'Forte'
      default: return 'Desconhecida'
    }
  }

  if (!password) return null

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Indicador de força */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Força da senha:</span>
          <Badge variant={analysis.strength === 'strong' ? 'default' : 'outline'} className={analysis.color}>
            {getStrengthLabel(analysis.strength)}
          </Badge>
        </div>

        {/* Barra de progresso */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              analysis.strength === 'weak' ? 'bg-red-500' :
              analysis.strength === 'fair' ? 'bg-yellow-500' :
              analysis.strength === 'good' ? 'bg-blue-500' : 'bg-green-500'
            }`}
            style={{ width: `${(analysis.score / 8) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Feedback */}
      {analysis.feedback.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Problemas encontrados:</h4>
          <div className="space-y-1">
            {analysis.feedback.map((issue, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-red-600">
                <XCircle className="h-4 w-4" />
                <span>{issue}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sugestões */}
      {analysis.suggestions.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Sugestões de melhoria:</h4>
          <div className="space-y-1">
            {analysis.suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-blue-600">
                <Lightbulb className="h-4 w-4" />
                <span>{suggestion}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sugerir senha mais forte */}
      {(analysis.strength === 'weak' || analysis.strength === 'fair') && !showSuggestion && (
        <div className="pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleGenerateSuggestion}
            className="gap-2"
          >
            <Lightbulb className="h-4 w-4" />
            Sugerir senha mais segura
          </Button>
        </div>
      )}

      {/* Exibir sugestão */}
      {showSuggestion && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-gray-900">
                Senha sugerida (baseada na original):
              </span>
            </div>
            
            <div className="flex items-center gap-2 p-2 bg-white rounded border">
              <code className="text-sm font-mono flex-1">{suggestedPassword}</code>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(suggestedPassword)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
              <p className="text-sm text-yellow-800">
                <strong>Importante:</strong> Atualize a senha diretamente na plataforma. 
                Quando finalizar, clique abaixo para confirmar.
              </p>
            </div>

            <div className="flex gap-2">
              <Button 
                size="sm"
                onClick={handleAcceptSuggestion}
                disabled={isUpdating}
              >
                {isUpdating ? 'Confirmando...' : 'Confirmar atualização'}
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowSuggestion(false)}
              >
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Critérios de segurança */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Critérios de segurança:</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className={`flex items-center gap-1 ${password.length >= 8 ? 'text-green-600' : 'text-gray-400'}`}>
            {password.length >= 8 ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
            <span>8+ caracteres</span>
          </div>
          <div className={`flex items-center gap-1 ${/[a-z]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
            {/[a-z]/.test(password) ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
            <span>Minúsculas</span>
          </div>
          <div className={`flex items-center gap-1 ${/[A-Z]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
            {/[A-Z]/.test(password) ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
            <span>Maiúsculas</span>
          </div>
          <div className={`flex items-center gap-1 ${/\d/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
            {/\d/.test(password) ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
            <span>Números</span>
          </div>
          <div className={`flex items-center gap-1 ${/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
            {/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
            <span>Símbolos</span>
          </div>
          <div className={`flex items-center gap-1 ${!/123|abc|password|admin|qwerty/i.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
            {!/123|abc|password|admin|qwerty/i.test(password) ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
            <span>Sem padrões</span>
          </div>
        </div>
      </div>
    </div>
  )
} 