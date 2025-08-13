import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

export function maskPassword(password: string): string {
  return '•'.repeat(password.length)
}

export function isPasswordExpiring(lastUpdate: Date, frequency: number, warningDays: number = 7): boolean {
  const now = new Date()
  const updateDate = new Date(lastUpdate)
  const expiryDate = new Date(updateDate.getTime() + (frequency * 24 * 60 * 60 * 1000))
  const warningDate = new Date(expiryDate.getTime() - (warningDays * 24 * 60 * 60 * 1000))
  
  return now >= warningDate && now <= expiryDate
}

export function isPasswordExpired(lastUpdate: Date, frequency: number): boolean {
  const now = new Date()
  const updateDate = new Date(lastUpdate)
  const expiryDate = new Date(updateDate.getTime() + (frequency * 24 * 60 * 60 * 1000))
  
  return now > expiryDate
} 

/**
 * Gera link interno para visualização de uma plataforma
 * @param plataformaId - ID da plataforma
 * @param options - Opções adicionais para o link
 */
export function gerarLinkPlataforma(
  plataformaId: string, 
  options?: {
    returnUrl?: string // URL para retornar após visualização
    action?: 'view' | 'edit' | 'password' // Ação específica
  }
) {
  const baseUrl = `/plataformas/${plataformaId}`
  const params = new URLSearchParams()
  
  if (options?.returnUrl) {
    params.set('return', options.returnUrl)
  }
  
  if (options?.action) {
    params.set('action', options.action)
  }
  
  const queryString = params.toString()
  return queryString ? `${baseUrl}?${queryString}` : baseUrl
}

/**
 * Gera links para diferentes seções de uma plataforma
 */
export const linksPlataforma = {
  /**
   * Link para visualizar detalhes da plataforma
   */
  visualizar: (plataformaId: string) => gerarLinkPlataforma(plataformaId, { action: 'view' }),
  
  /**
   * Link para editar a plataforma
   */
  editar: (plataformaId: string) => gerarLinkPlataforma(plataformaId, { action: 'edit' }),
  
  /**
   * Link para visualizar senha da plataforma
   */
  senha: (plataformaId: string) => gerarLinkPlataforma(plataformaId, { action: 'password' }),
  
  /**
   * Link para histórico da plataforma
   */
  historico: (plataformaId: string) => `/plataformas/${plataformaId}/historico`,
  
  /**
   * Link para compartilhamento de acesso
   */
  compartilhar: (plataformaId: string) => `/plataformas/${plataformaId}/share`,
  
  /**
   * Link para relatórios da plataforma
   */
  relatorios: (plataformaId: string) => `/plataformas/${plataformaId}/relatorios`
}

/**
 * Gera link para lista de plataformas com filtros
 */
export function gerarLinkListaPlataformas(filtros?: {
  tipo?: string
  cliente?: string
  busca?: string
}) {
  const params = new URLSearchParams()
  
  if (filtros?.tipo && filtros.tipo !== 'TODOS') {
    params.set('tipo', filtros.tipo)
  }
  
  if (filtros?.cliente && filtros.cliente !== 'TODOS') {
    params.set('cliente', filtros.cliente)
  }
  
  if (filtros?.busca) {
    params.set('q', filtros.busca)
  }
  
  const queryString = params.toString()
  return queryString ? `/plataformas?${queryString}` : '/plataformas'
} 