// Serviço para gerenciar ações automáticas relacionadas a colaboradores

interface TerminateAccessParams {
  colaboradorId: string
  colaboradorName: string
  colaboradorEmail: string
  reason: 'DEMITIDO' | 'SUSPENSO'
  terminatedBy: string
}

interface PlatformAccess {
  id: string
  platformName: string
  platformId: string
  active: boolean
}

interface ClickUpWebhookData {
  colaboradorName: string
  colaboradorEmail: string
  reason: string
  platforms: string[]
  terminatedAt: string
}

export class CollaborationService {
  
  /**
   * Encerra todos os acessos ativos de um colaborador
   */
  static async terminateAllAccess({ 
    colaboradorId, 
    colaboradorName, 
    colaboradorEmail, 
    reason, 
    terminatedBy 
  }: TerminateAccessParams): Promise<void> {
    console.log(`Starting access termination for ${colaboradorName} (${reason})`)

    try {
      // 1. Buscar todos os acessos ativos do colaborador
      const activeAccesses = await this.getActiveAccesses(colaboradorId)
      
      // 2. Encerrar todos os acessos na tabela AcessoPlataforma
      for (const access of activeAccesses) {
        await this.terminateAccess(access.id)
        console.log(`Access terminated for platform: ${access.platformName}`)
      }

      // 3. Registrar no log de sistema
      await this.logAccessTermination({
        colaboradorId,
        colaboradorName,
        reason,
        platformCount: activeAccesses.length,
        terminatedBy
      })

      // 4. Notificar ClickUp se configurado
      if (reason === 'DEMITIDO') {
        await this.notifyClickUp({
          colaboradorName,
          colaboradorEmail,
          reason,
          platforms: activeAccesses.map(a => a.platformName),
          terminatedAt: new Date().toISOString()
        })
      }

      // 5. Enviar notificações por email/Discord se configurado
      await this.sendTerminationNotifications({
        colaboradorName,
        colaboradorEmail,
        reason,
        platformCount: activeAccesses.length,
        platforms: activeAccesses.map(a => a.platformName)
      })

      console.log(`Access termination completed for ${colaboradorName}`)
      
    } catch (error) {
      console.error('Erro ao encerrar acessos:', error)
      throw new Error(`Falha ao encerrar acessos: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
    }
  }

  /**
   * Busca todos os acessos ativos de um colaborador
   */
  private static async getActiveAccesses(colaboradorId: string): Promise<PlatformAccess[]> {
    // Em produção, isso seria uma query no banco de dados
    // SELECT ap.*, p.nome as platformName 
    // FROM acessos_plataforma ap 
    // JOIN plataformas p ON ap.plataformaId = p.id 
    // WHERE ap.colaboradorId = ? AND ap.ativo = true
    
    // Simulação de dados para demonstração
    return [
      { id: '1', platformName: 'Google Ads', platformId: 'plat1', active: true },
      { id: '2', platformName: 'Meta Business', platformId: 'plat2', active: true },
      { id: '3', platformName: 'RD Station', platformId: 'plat3', active: true }
    ]
  }

  /**
   * Encerra um acesso específico
   */
  private static async terminateAccess(accessId: string): Promise<void> {
    // Em produção:
    // UPDATE acessos_plataforma 
    // SET ativo = false, dataFim = NOW() 
    // WHERE id = ?
    
    console.log(`Terminating access ID: ${accessId}`)
  }

  /**
   * Registra a ação no log do sistema
   */
  private static async logAccessTermination({
    colaboradorId,
    colaboradorName,
    reason,
    platformCount,
    terminatedBy
  }: {
    colaboradorId: string
    colaboradorName: string
    reason: string
    platformCount: number
    terminatedBy: string
  }): Promise<void> {
    const logEntry = {
      usuario: terminatedBy,
      acao: `TERMINAR_ACESSOS_${reason}`,
      entidade: 'colaborador',
      entidadeId: colaboradorId,
      timestamp: new Date(),
      detalhes: `Encerrados ${platformCount} acessos do colaborador ${colaboradorName}`
    }

    // Em produção:
    // INSERT INTO log_acessos (usuario, acao, entidade, entidadeId, timestamp, detalhes)
    // VALUES (?, ?, ?, ?, ?, ?)
    
    console.log('Access termination logged:', logEntry)
  }

  /**
   * Envia webhook para ClickUp criando task para troca de senhas
   */
  private static async notifyClickUp(data: ClickUpWebhookData): Promise<void> {
    try {
      // Buscar configuração do webhook
      const webhookUrl = await this.getClickUpWebhook()
      
      if (!webhookUrl) {
        console.log('ClickUp webhook not configured, skipping notification')
        return
      }

      const taskData = {
        name: `[URGENTE] Trocar senhas - ${data.colaboradorName} foi demitido`,
        description: `
**Colaborador demitido:** ${data.colaboradorName} (${data.colaboradorEmail})
**Data:** ${new Date(data.terminatedAt).toLocaleString('pt-BR')}
**Motivo:** ${data.reason}

**Plataformas que precisam de troca de senha:**
${data.platforms.map(p => `• ${p}`).join('\n')}

**Ações necessárias:**
- [ ] Trocar senhas de todas as plataformas listadas
- [ ] Verificar outros acessos não listados
- [ ] Confirmar que não há backups ou chaves salvas
- [ ] Atualizar credenciais nos sistemas internos
        `.trim(),
        priority: 1, // Urgente
        status: 'to do',
        assignees: [], // Definir responsáveis nas configurações
        tags: ['seguranca', 'demissao', 'urgente']
      }

      // Simular envio do webhook
      console.log('Sending ClickUp webhook:', { webhookUrl, taskData })
      
      // Em produção:
      // const response = await fetch(webhookUrl, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(taskData)
      // })
      
      console.log('ClickUp task created successfully')
      
    } catch (error) {
      console.error('Error sending ClickUp notification:', error)
      // Não falhar o processo principal por erro de notificação
    }
  }

  /**
   * Envia notificações por email e Discord
   */
  private static async sendTerminationNotifications({
    colaboradorName,
    colaboradorEmail,
    reason,
    platformCount,
    platforms
  }: {
    colaboradorName: string
    colaboradorEmail: string
    reason: string
    platformCount: number
    platforms: string[]
  }): Promise<void> {
    try {
      const config = await this.getNotificationConfig()
      
      const message = reason === 'DEMITIDO' 
        ? `🚨 **AÇÃO URGENTE NECESSÁRIA**\n\nO colaborador **${colaboradorName}** foi demitido.\n\n**${platformCount} acessos foram encerrados:**\n${platforms.map(p => `• ${p}`).join('\n')}\n\n⚠️ **TODAS AS SENHAS DESSAS PLATAFORMAS DEVEM SER ALTERADAS IMEDIATAMENTE**`
        : `⚠️ Colaborador **${colaboradorName}** foi suspenso.\n\n${platformCount} acessos foram temporariamente encerrados.`

      // Email
      if (config.emailAlertas && config.apiKeyEmail) {
        console.log('Sending email notification to:', config.emailAlertas)
        // Implementar envio de email aqui
      }

      // Discord
      if (config.webhookDiscord) {
        console.log('Sending Discord notification')
        // Implementar envio para Discord aqui
        // const discordPayload = {
        //   content: message,
        //   embeds: [{
        //     title: reason === 'DEMITIDO' ? '🚨 Colaborador Demitido' : '⚠️ Colaborador Suspenso',
        //     color: reason === 'DEMITIDO' ? 15158332 : 16776960, // Vermelho ou amarelo
        //     fields: [
        //       { name: 'Colaborador', value: colaboradorName, inline: true },
        //       { name: 'E-mail', value: colaboradorEmail, inline: true },
        //       { name: 'Plataformas Afetadas', value: platformCount.toString(), inline: true }
        //     ],
        //     timestamp: new Date().toISOString()
        //   }]
        // }
      }
      
    } catch (error) {
      console.error('Error sending notifications:', error)
    }
  }

  /**
   * Busca a URL do webhook do ClickUp
   */
  private static async getClickUpWebhook(): Promise<string | null> {
    // Em produção:
    // SELECT webhookClickup FROM configuracao_sistema LIMIT 1
    return 'https://hooks.clickup.com/webhook/example' // Mock
  }

  /**
   * Busca configurações de notificação
   */
  private static async getNotificationConfig(): Promise<{
    emailAlertas?: string
    apiKeyEmail?: string
    webhookDiscord?: string
  }> {
    // Em produção:
    // SELECT emailAlertas, apiKeyEmail, webhookDiscord FROM configuracao_sistema LIMIT 1
    return {
      emailAlertas: 'admin@agencia.com',
      apiKeyEmail: 'sg.example_key',
      webhookDiscord: 'https://discord.com/api/webhooks/example'
    }
  }

  /**
   * Endpoint para sistemas externos dispararem troca de senhas
   */
  static async triggerPasswordChangeForTerminatedUser(colaboradorId: string): Promise<{
    success: boolean
    platformsAffected: string[]
    message: string
  }> {
    try {
      // Buscar plataformas que o colaborador tinha acesso
      const platforms = await this.getPlatformsForUser(colaboradorId)
      
      if (platforms.length === 0) {
        return {
          success: true,
          platformsAffected: [],
          message: 'Nenhuma plataforma encontrada para este colaborador'
        }
      }

      // Marcar plataformas para troca de senha
      for (const platform of platforms) {
        await this.flagPlatformForPasswordChange(platform.id, colaboradorId)
      }

      return {
        success: true,
        platformsAffected: platforms.map(p => p.name),
        message: `${platforms.length} plataformas marcadas para troca de senha`
      }
      
    } catch (error) {
      return {
        success: false,
        platformsAffected: [],
        message: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      }
    }
  }

  private static async getPlatformsForUser(colaboradorId: string): Promise<Array<{id: string, name: string}>> {
    // Mock data - em produção seria uma query
    return [
      { id: '1', name: 'Google Ads' },
      { id: '2', name: 'Meta Business' }
    ]
  }

  private static async flagPlatformForPasswordChange(platformId: string, colaboradorId: string): Promise<void> {
    // Em produção, poderia criar um registro em uma tabela de "password_change_requests"
    // ou atualizar um campo na tabela de plataformas
    console.log(`Platform ${platformId} flagged for password change due to user ${colaboradorId} termination`)
  }
} 