import { NextRequest, NextResponse } from 'next/server'
import { CollaborationService } from '@/lib/collaboration-service'

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticação (em produção, verificar API key ou JWT)
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Token de autorização necessário' },
        { status: 401 }
      )
    }

    // Simular verificação de token (em produção, verificar contra banco/JWT)
    const token = authHeader.replace('Bearer ', '')
    if (token !== 'webhook_secret_token_123') {
      return NextResponse.json(
        { error: 'Token inválido' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { colaboradorId, reason } = body

    if (!colaboradorId) {
      return NextResponse.json(
        { error: 'colaboradorId é obrigatório' },
        { status: 400 }
      )
    }

    // Processar solicitação de troca de senhas
    const result = await CollaborationService.triggerPasswordChangeForTerminatedUser(colaboradorId)

    if (!result.success) {
      return NextResponse.json(
        { error: result.message },
        { status: 500 }
      )
    }

    // Log da ação
    console.log('Password change triggered via webhook:', {
      colaboradorId,
      reason,
      platformsAffected: result.platformsAffected,
      timestamp: new Date(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip')
    })

    return NextResponse.json({
      success: true,
      message: result.message,
      platformsAffected: result.platformsAffected,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Webhook error:', error)
    
    return NextResponse.json(
      { 
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    service: 'Unipass Password Change Webhook',
    version: '1.0.0',
    description: 'Endpoint para sistemas externos dispararem troca de senhas',
    methods: ['POST'],
    authentication: 'Bearer token required',
    example: {
      url: '/api/webhook/password-change',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer your_webhook_token',
        'Content-Type': 'application/json'
      },
      body: {
        colaboradorId: 'user_id',
        reason: 'DEMITIDO' // ou 'SUSPENSO'
      }
    }
  })
} 