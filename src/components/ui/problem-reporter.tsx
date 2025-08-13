"use client"

import { useState } from 'react'
import { AlertTriangle, Send, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

interface ProblemReporterProps {
  platformName: string
  platformId: string
  onReportSubmit?: (description: string) => void
  className?: string
}

export function ProblemReporter({ 
  platformName, 
  platformId, 
  onReportSubmit,
  className 
}: ProblemReporterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [description, setDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const problemTypes = [
    'Senha não funciona',
    'Conta bloqueada/suspensa',
    'Erro de autenticação',
    'Plataforma fora do ar',
    'Dados de login incorretos',
    'Outro problema'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envio do ticket
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Em produção, aqui seria enviado para a API
      console.log('Problem reported:', {
        platformId,
        platformName,
        description,
        reportedBy: 'current_user@email.com',
        timestamp: new Date()
      })

      onReportSubmit?.(description)
      setSubmitted(true)
      
      // Fechar modal após 2 segundos
      setTimeout(() => {
        setIsOpen(false)
        setSubmitted(false)
        setDescription('')
      }, 2000)

    } catch (error) {
      console.error('Error submitting problem report:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectProblemType = (type: string) => {
    setDescription(prev => prev ? `${prev}\n${type}` : type)
  }

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-green-600">
              <AlertTriangle className="h-5 w-5" />
              Problema Reportado!
            </DialogTitle>
            <DialogDescription>
              Seu report foi enviado com sucesso. A equipe responsável será notificada
              e irá verificar o problema com a plataforma <strong>{platformName}</strong>.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className={`gap-2 text-orange-600 border-orange-200 hover:bg-orange-50 ${className}`}
      >
        <AlertTriangle className="h-4 w-4" />
        Notificar problema
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Reportar Problema
            </DialogTitle>
            <DialogDescription>
              Descreva o problema encontrado com a plataforma <strong>{platformName}</strong>.
              Sua equipe será notificada automaticamente.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Tipos de problema pré-definidos */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Tipo de problema (clique para adicionar):
              </label>
              <div className="flex flex-wrap gap-2">
                {problemTypes.map((type) => (
                  <Badge
                    key={type}
                    variant="outline"
                    className="cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => selectProblemType(type)}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Descrição detalhada */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Descrição detalhada
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={4}
                placeholder="Descreva o problema encontrado, quando ocorreu, e qualquer informação adicional relevante..."
                required
              />
            </div>

            {/* Informações do ticket */}
            <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
              <div className="text-sm text-blue-800">
                <strong>O que acontece após reportar:</strong>
              </div>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>• A equipe responsável será notificada imediatamente</li>
                <li>• Um ticket será criado para acompanhamento</li>
                <li>• Você receberá atualizações sobre a resolução</li>
              </ul>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting || !description.trim()}
                className="gap-2"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar Report
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
} 