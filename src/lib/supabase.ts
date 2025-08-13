import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper para verificar se o usuário é admin (temporário)
export function isAdmin(userEmail?: string): boolean {
  if (!userEmail) return false
  
  // Lista temporária de emails admin - substituir por Supabase Auth
  const adminEmails = [
    'admin@unipass.com',
    'lucas@agencia.com',
    'administrador@empresa.com'
  ]
  
  return adminEmails.includes(userEmail.toLowerCase())
}

// Tipos para as views do Supabase
export interface PlataformaPublic {
  id: string
  nome: string
  tipo: string
  url_login: string | null
  email_utilizado: string | null
  ultima_atualizacao_senha: string
  frequencia_atualizacao: number
  observacoes: string | null
  vinculo: string
  cliente_id: string | null
  favicon_url: string | null
  login_via_google: boolean
  google_email: string | null
  conta_google_id: string | null
  created_at: string
  updated_at: string
}

export interface PlataformaAdmin extends PlataformaPublic {
  senha_encriptada: string
  custo_mensal: number
  tipo_pagamento: string | null
  valor_ferramenta: number | null
  data_assinatura: string | null
  quem_assinou: string | null
  motivo_uso: string | null
}

export interface Cliente {
  id: string
  nome: string
  email: string | null
  telefone: string | null
  ativo: boolean
  created_at: string
  updated_at: string
}

export interface Colaborador {
  id: string
  nome: string
  email: string
  equipe_id: string | null
  status: 'ATIVO' | 'DEMITIDO' | 'SUSPENSO'
  data_entrada: string
  data_saida: string | null
  created_at: string
  updated_at: string
}

export interface Equipe {
  id: string
  nome: string
  ativa: boolean
  created_at: string
  updated_at: string
}

export interface VisualizacaoSenha {
  id: string
  plataforma_id: string
  colaborador_id: string
  data_visualizacao: string
  ip: string | null
  user_agent: string | null
}

export interface AcessoPlataforma {
  id: string
  colaborador_id: string
  plataforma_id: string
  data_inicio: string
  data_fim: string | null
  ativo: boolean
  created_at: string
  updated_at: string
}

export interface TicketSenha {
  id: string
  plataforma_id: string
  colaborador_id: string
  descricao_problema: string
  status: 'ABERTO' | 'EM_ANDAMENTO' | 'RESOLVIDO' | 'CANCELADO'
  data_abertura: string
  data_resolucao: string | null
  observacoes_resolucao: string | null
}
