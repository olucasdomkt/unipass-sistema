// Tipos para autenticação e usuários
export interface User {
  id: string
  name: string
  email: string
  role: 'ADMIN' | 'USER'
  isActive: boolean
  equipe?: string
  createdAt: Date
  dataEntrada?: Date
  dataSaida?: Date
  lastActivity?: Date
}

// Tipos para acessos atualizados com novos campos administrativos
export interface Acesso {
  id: string
  nome: string
  tipo: string
  emailUtilizado: string
  senhaEncriptada: string
  custoMensal: number
  ultimaAtualizacaoSenha: Date
  frequenciaAtualizacao: number
  vinculo: 'UNICO' | 'CLIENTE'
  clienteId?: string
  urlLogin: string
  observacoes: string
  isGoogleLogin: boolean
  googleAccount?: string
  favicon?: string
  // Novos campos administrativos (só visíveis para admins)
  tipoPagamento?: 'MENSAL' | 'ANUAL'
  valorFerramenta?: number
  dataAssinatura?: Date
  quemAssinou?: string
  motivoUso?: string
  status: 'ATIVA' | 'PAUSADA' | 'CANCELADA' | 'PROBLEMA'
}

// Manter compatibilidade com código existente
export type Plataforma = Acesso

// Tipos para clientes
export interface Cliente {
  id: string
  nome: string
  cor?: string
}

// Tipos para equipes
export interface Equipe {
  id: string
  nome: string
  cor: string
}

// Tipos para visualização de senhas
export interface VisualizacaoSenha {
  id: string
  acessoId: string
  plataformaId: string // manter compatibilidade
  userId: string
  timestamp: Date
  action: 'VIEW_PASSWORD' | 'ACCESS_PLATFORM' | 'EDIT_PLATFORM'
}

// Tipos para permissões de acesso
export interface PermissaoAcesso {
  id: string
  acessoId: string
  plataformaId: string // manter compatibilidade
  userId: string
  canViewPassword: boolean
  canReportProblem: boolean
  grantedAt: Date
  grantedBy: string
}

// Manter compatibilidade com código existente
export type AcessoPlataforma = PermissaoAcesso

// Tipos para formulários
export interface AcessoFormData {
  nome: string
  tipo: string
  emailUtilizado: string
  senhaEncriptada: string
  custoMensal: number
  vinculo: 'UNICO' | 'CLIENTE'
  clienteId?: string
  urlLogin: string
  observacoes: string
  isGoogleLogin: boolean
  googleAccount?: string
  // Campos administrativos
  tipoPagamento?: 'MENSAL' | 'ANUAL'
  valorFerramenta?: number
  dataAssinatura?: Date
  quemAssinou?: string
  motivoUso?: string
}

// Manter compatibilidade com código existente
export type PlataformaFormData = AcessoFormData

export interface ColaboradorFormData {
  name: string
  email: string
  role: 'ADMIN' | 'USER'
  equipe: string
  dataEntrada?: Date
  dataSaida?: Date
  isActive: boolean
}

// Tipos para filtros
export interface AcessoFilters {
  tipo?: string
  cliente?: string
  search?: string
}

// Manter compatibilidade com código existente
export type PlataformaFilters = AcessoFilters

export type { User as AuthUser }

// Tipos para análise de força de senha
export interface PasswordStrengthAnalysis {
  score: number
  strength: 'weak' | 'fair' | 'good' | 'strong'
  feedback: string[]
  suggestions: string[]
}

// Tipos para logs de atualização de senha
export interface PasswordUpdateLog {
  id: string
  acessoId: string
  plataformaId: string // manter compatibilidade
  usuarioId: string
  timestamp: Date
  oldPasswordHash: string
  newPasswordHash: string
  updateType: 'manual' | 'suggested' | 'forced'
  reason?: string
} 