"use client"

import { useState } from 'react'
import { Save, Shield, Bell, Key, Globe, AlertTriangle, Settings } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { toast } from '@/components/ui/toast'

export default function ConfiguracoesPage() {
  const { user, isAdminByEmail, updateLastActivity, sessionTimeout, setSessionTimeout } = useAuth()
  const [loading, setLoading] = useState(false)
  const [config, setConfig] = useState({
    // Segurança
    chaveMestre: '',
    tempoSessao: sessionTimeout / (60 * 1000), // Converter para minutos
    tentativasLogin: 3,
    
    // Notificações
    emailAlertas: 'admin@unipass.com',
    diasAvisoExpiracao: 7,
    webhookDiscord: '',
    webhookClickup: '',
    
    // Sistema
    backupAutomatico: true,
    logDetalhado: false,
    
    // Senhas
    complexidadeMinima: 8,
    frequenciaPadrao: 90,
    exigirCaracteresEspeciais: true
  })

  if (!isAdminByEmail()) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Acesso restrito</h3>
          <p className="text-gray-600">
            Apenas administradores podem acessar as configurações.
          </p>
        </div>
      </div>
    )
  }

  const handleSave = async () => {
    setLoading(true)
    updateLastActivity()

    try {
      // Simular salvamento
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Atualizar tempo de sessão se mudou
      if (config.tempoSessao * 60 * 1000 !== sessionTimeout) {
        setSessionTimeout(config.tempoSessao * 60 * 1000)
      }

      toast({
        title: 'Sucesso',
        description: 'Configurações salvas com sucesso',
        variant: 'default'
      })
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível salvar as configurações',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-600">
          Configure as preferências e políticas do sistema
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Segurança */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Segurança
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chave Mestre
              </label>
              <input
                type="password"
                value={config.chaveMestre}
                onChange={(e) => setConfig({ ...config, chaveMestre: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
              <p className="text-xs text-gray-500 mt-1">
                Chave para descriptografar senhas
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tempo de Sessão (minutos)
              </label>
              <input
                type="number"
                min="1"
                max="480"
                value={config.tempoSessao}
                onChange={(e) => setConfig({ ...config, tempoSessao: parseInt(e.target.value) || 5 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Tempo até logout automático por inatividade
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tentativas de Login
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={config.tentativasLogin}
                onChange={(e) => setConfig({ ...config, tentativasLogin: parseInt(e.target.value) || 3 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Máximo de tentativas antes de bloquear
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Notificações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notificações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email para Alertas
              </label>
              <input
                type="email"
                value={config.emailAlertas}
                onChange={(e) => setConfig({ ...config, emailAlertas: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="admin@empresa.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aviso de Expiração (dias)
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={config.diasAvisoExpiracao}
                onChange={(e) => setConfig({ ...config, diasAvisoExpiracao: parseInt(e.target.value) || 7 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Quantos dias antes de expirar para enviar alerta
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Webhook Discord
              </label>
              <input
                type="url"
                value={config.webhookDiscord}
                onChange={(e) => setConfig({ ...config, webhookDiscord: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://discord.com/api/webhooks/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Webhook ClickUp
              </label>
              <input
                type="url"
                value={config.webhookClickup}
                onChange={(e) => setConfig({ ...config, webhookClickup: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://hooks.clickup.com/..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Políticas de Senhas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Políticas de Senhas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comprimento Mínimo
              </label>
              <input
                type="number"
                min="4"
                max="50"
                value={config.complexidadeMinima}
                onChange={(e) => setConfig({ ...config, complexidadeMinima: parseInt(e.target.value) || 8 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frequência Padrão (dias)
              </label>
              <input
                type="number"
                min="30"
                max="365"
                value={config.frequenciaPadrao}
                onChange={(e) => setConfig({ ...config, frequenciaPadrao: parseInt(e.target.value) || 90 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Intervalo padrão para troca de senhas
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="caracteresEspeciais"
                checked={config.exigirCaracteresEspeciais}
                onChange={(e) => setConfig({ ...config, exigirCaracteresEspeciais: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="caracteresEspeciais" className="text-sm text-gray-700">
                Exigir caracteres especiais
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Sistema */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="backupAutomatico"
                checked={config.backupAutomatico}
                onChange={(e) => setConfig({ ...config, backupAutomatico: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="backupAutomatico" className="text-sm text-gray-700">
                Backup automático diário
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="logDetalhado"
                checked={config.logDetalhado}
                onChange={(e) => setConfig({ ...config, logDetalhado: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="logDetalhado" className="text-sm text-gray-700">
                Log detalhado de ações
              </label>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
              <div className="flex items-center gap-2 text-yellow-700 mb-1">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm font-medium">Atenção</span>
              </div>
              <p className="text-xs text-yellow-600">
                Mudanças nas configurações de segurança afetam todos os usuários do sistema.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={loading}
          className="flex items-center gap-2"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          Salvar Configurações
        </Button>
      </div>
    </div>
  )
}