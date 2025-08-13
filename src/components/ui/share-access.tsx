"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Share2, Copy, ExternalLink, AlertTriangle, Clock, User } from 'lucide-react'

interface ShareAccessProps {
  platformName: string
  platformId: string
  currentUserName: string
  canShare: boolean
  onShareAccess?: (platformId: string, expirationMinutes: number) => Promise<string>
}

export function ShareAccess({ 
  platformName, 
  platformId, 
  currentUserName,
  canShare,
  onShareAccess 
}: ShareAccessProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [shareLink, setShareLink] = useState('')
  const [expirationMinutes, setExpirationMinutes] = useState(60) // 1 hora padrão
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateShareLink = async () => {
    if (!onShareAccess) return

    setIsGenerating(true)
    try {
      const link = await onShareAccess(platformId, expirationMinutes)
      setShareLink(link)
    } catch (error) {
      console.error('Erro ao gerar link:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Erro ao copiar:', error)
    }
  }

  const openLink = () => {
    window.open(shareLink, '_blank')
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setShareLink('')
      setCopied(false)
    }
  }

  if (!canShare) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          Compartilhar acesso
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            Compartilhar Acesso
          </DialogTitle>
          <DialogDescription>
            Gere um link seguro para compartilhar o acesso à plataforma <strong>{platformName}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Aviso de segurança */}
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <p className="font-medium mb-1">Aviso de Segurança</p>
                  <p>Esse link só funcionará se você tiver permissão para visualizar esse acesso. O link expira automaticamente após o tempo definido.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {!shareLink ? (
            <>
              {/* Configuração de expiração */}
              <div>
                <label htmlFor="expiration" className="block text-sm font-medium text-gray-700 mb-2">
                  Tempo de expiração
                </label>
                <select
                  id="expiration"
                  value={expirationMinutes}
                  onChange={(e) => setExpirationMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={15}>15 minutos</option>
                  <option value={30}>30 minutos</option>
                  <option value={60}>1 hora</option>
                  <option value={180}>3 horas</option>
                  <option value={480}>8 horas</option>
                  <option value={1440}>24 horas</option>
                </select>
              </div>

              {/* Informações do compartilhamento */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">Compartilhado por:</span>
                  <span>{currentUserName}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">Expira em:</span>
                  <span>
                    {expirationMinutes < 60 
                      ? `${expirationMinutes} minutos`
                      : expirationMinutes < 1440 
                        ? `${Math.floor(expirationMinutes / 60)} horas`
                        : `${Math.floor(expirationMinutes / 1440)} dias`
                    }
                  </span>
                </div>
              </div>

              {/* Botão gerar link */}
              <Button 
                onClick={generateShareLink}
                disabled={isGenerating}
                className="w-full gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Gerando link...
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4" />
                    Gerar Link Seguro
                  </>
                )}
              </Button>
            </>
          ) : (
            <>
              {/* Link gerado */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link seguro gerado
                </label>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border">
                  <input
                    type="text"
                    value={shareLink}
                    readOnly
                    className="flex-1 bg-transparent text-sm font-mono truncate outline-none"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="gap-1"
                  >
                    <Copy className="h-3 w-3" />
                    {copied ? 'Copiado!' : 'Copiar'}
                  </Button>
                </div>
              </div>

              {/* Informações do link */}
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>
                        Este link expira em {
                          expirationMinutes < 60 
                            ? `${expirationMinutes} minutos`
                            : expirationMinutes < 1440 
                              ? `${Math.floor(expirationMinutes / 60)} horas`
                              : `${Math.floor(expirationMinutes / 1440)} dias`
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Compartilhado por {currentUserName}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ações */}
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={openLink}
                  className="flex-1 gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Testar Link
                </Button>
                <Button 
                  onClick={() => handleOpenChange(false)}
                  className="flex-1"
                >
                  Concluído
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 