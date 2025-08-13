"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User, Plataforma, Cliente, VisualizacaoSenha, Equipe } from '@/types'
import { SessionExpiredModal } from '@/components/ui/session-expired-modal'

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isAdmin: () => boolean
  isAdminByEmail: () => boolean
  getDefaultRoute: () => string
  updateLastActivity: () => void
  hasAccessToPlatform: (platformId: string) => boolean
  canViewPassword: (platformId: string) => boolean
  canReportProblem: (platformId: string) => boolean
  showCosts: () => boolean
  getRemainingTime: () => number
  sessionTimeout: number
  setSessionTimeout: (timeout: number) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Dados mockados para demonstração
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Administrador',
    email: 'admin@unipass.com',
    role: 'ADMIN',
    isActive: true,
    equipe: 'Administração',
    createdAt: new Date('2023-01-15'),
    dataEntrada: new Date('2023-01-15'),
    lastActivity: new Date()
  },
  {
    id: '2',
    name: 'Usuário Demo',
    email: 'user@unipass.com',
    role: 'USER',
    isActive: true,
    equipe: 'Operações',
    createdAt: new Date('2023-02-01'),
    dataEntrada: new Date('2023-02-01'),
    lastActivity: new Date()
  },
  {
    id: '3',
    name: 'Lucas Agência',
    email: 'lucas@agencia.com',
    role: 'ADMIN',
    isActive: true,
    equipe: 'Desenvolvimento',
    createdAt: new Date('2023-01-01'),
    dataEntrada: new Date('2023-01-01'),
    lastActivity: new Date()
  }
]

// Mock de equipes disponíveis
export const mockEquipes: Equipe[] = [
  { id: '1', nome: 'Performance', cor: '#3B82F6' },
  { id: '2', nome: 'Conteúdo', cor: '#10B981' },
  { id: '3', nome: 'Desenvolvimento', cor: '#8B5CF6' },
  { id: '4', nome: 'Design', cor: '#F59E0B' },
  { id: '5', nome: 'Atendimento', cor: '#EF4444' }
]

// Mock de clientes
export const mockClientes: Cliente[] = [
  { id: '1', nome: 'Empresa ABC', cor: '#3B82F6' },
  { id: '2', nome: 'Loja XYZ', cor: '#10B981' },
  { id: '3', nome: 'Consultoria 123', cor: '#8B5CF6' },
  { id: '4', nome: 'E-commerce Plus', cor: '#F59E0B' }
]

// Mock de visualizações de senha recentes
const mockPasswordViews: VisualizacaoSenha[] = [
  { id: '1', acessoId: '3', plataformaId: '3', userId: '1', timestamp: new Date(Date.now() - 1000 * 60 * 5), action: 'VIEW_PASSWORD' },
  { id: '2', acessoId: '1', plataformaId: '1', userId: '1', timestamp: new Date(Date.now() - 1000 * 60 * 30), action: 'ACCESS_PLATFORM' },
  { id: '3', acessoId: '5', plataformaId: '5', userId: '1', timestamp: new Date(Date.now() - 1000 * 60 * 60), action: 'VIEW_PASSWORD' },
  { id: '4', acessoId: '2', plataformaId: '2', userId: '2', timestamp: new Date(Date.now() - 1000 * 60 * 120), action: 'ACCESS_PLATFORM' },
]

// Mock de acessos a plataformas
const mockPlatformAccess = [
  { platformId: '1', userId: '1', canViewPassword: true, canReportProblem: true },
  { platformId: '2', userId: '1', canViewPassword: true, canReportProblem: true },
  { platformId: '3', userId: '1', canViewPassword: true, canReportProblem: true },
  { platformId: '4', userId: '1', canViewPassword: true, canReportProblem: true },
  { platformId: '5', userId: '1', canViewPassword: true, canReportProblem: true },
  { platformId: '6', userId: '1', canViewPassword: true, canReportProblem: true },
  { platformId: '2', userId: '2', canViewPassword: true, canReportProblem: true },
  { platformId: '6', userId: '2', canViewPassword: false, canReportProblem: true }
]

const DEFAULT_AUTO_LOGOUT_TIME = 5 * 60 * 1000 // 5 minutos em millisegundos

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [lastActivity, setLastActivity] = useState<Date>(new Date())
  const [sessionTimeout, setSessionTimeoutState] = useState<number>(DEFAULT_AUTO_LOGOUT_TIME)
  const [showSessionExpiredModal, setShowSessionExpiredModal] = useState(false)
  const [sessionWarningShown, setSessionWarningShown] = useState(false)

  // Restaurar sessão salva
  useEffect(() => {
    const savedUser = localStorage.getItem('unipass-user')
    const savedActivity = localStorage.getItem('unipass-activity')
    const savedTimeout = localStorage.getItem('unipass-session-timeout')
    
    if (savedTimeout) {
      setSessionTimeoutState(parseInt(savedTimeout))
    }
    
    if (savedUser && savedActivity) {
      const userData = JSON.parse(savedUser)
      const activityTime = new Date(savedActivity)
      
      // Verifica se não passou do tempo limite
      const now = new Date()
      const diffMinutes = (now.getTime() - activityTime.getTime())
      
      if (diffMinutes < sessionTimeout) {
        setUser(userData)
        setLastActivity(activityTime)
      } else {
        // Sessão expirada
        localStorage.removeItem('unipass-user')
        localStorage.removeItem('unipass-activity')
      }
    }
  }, [sessionTimeout])

  // Auto-logout após tempo configurado de inatividade (padrão: 5 minutos)
  useEffect(() => {
    const checkInactivity = () => {
      if (user && lastActivity) {
        const now = new Date()
        const diffTime = now.getTime() - lastActivity.getTime()
        const warningTime = sessionTimeout - (60 * 1000) // 1 minuto antes
        
        // Mostrar aviso 1 minuto antes da expiração
        if (diffTime >= warningTime && !sessionWarningShown && diffTime < sessionTimeout) {
          setSessionWarningShown(true)
          // Aqui poderia implementar um toast de aviso
        }
        
        // Forçar logout quando expirar
        if (diffTime >= sessionTimeout) {
          setShowSessionExpiredModal(true)
        }
      }
    }

    const interval = setInterval(checkInactivity, 10000) // Verifica a cada 10 segundos
    return () => clearInterval(interval)
  }, [user, lastActivity, sessionTimeout, sessionWarningShown])

  // Atualiza atividade do usuário em interações
  useEffect(() => {
    const handleActivity = () => {
      updateLastActivity()
    }

    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click']
    
    events.forEach(event => {
      document.addEventListener(event, handleActivity, { passive: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity)
      })
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulação de login - normalmente seria uma chamada à API
    const foundUser = mockUsers.find(u => u.email === email && u.isActive)
    
    if (foundUser && password === 'admin123') {
      const now = new Date()
      setUser(foundUser)
      setLastActivity(now)
      localStorage.setItem('unipass-user', JSON.stringify(foundUser))
      localStorage.setItem('unipass-activity', now.toISOString())
      return true
    }
    
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('unipass-user')
    localStorage.removeItem('unipass-activity')
    window.location.href = '/'
  }

  // Redirecionamento baseado em role
  const getDefaultRoute = (): string => {
    if (!user) return '/'
    return isAdminByEmail() ? '/' : '/plataformas'
  }

  const isAdmin = (): boolean => {
    return user?.role === 'ADMIN'
  }

  const isAdminByEmail = (): boolean => {
    if (!user?.email) return false
    const adminEmails = [
      'admin@unipass.com',
      'lucas@agencia.com',
      'administrador@empresa.com'
    ]
    return adminEmails.includes(user.email.toLowerCase())
  }

  const updateLastActivity = () => {
    const now = new Date()
    setLastActivity(now)
    setSessionWarningShown(false) // Reset warning when user is active
    if (user) {
      localStorage.setItem('unipass-activity', now.toISOString())
    }
  }

  const hasAccessToPlatform = (platformId: string): boolean => {
    if (!user) return false
    if (isAdmin()) return true
    
    return mockPlatformAccess.some(
      access => access.platformId === platformId && access.userId === user.id
    )
  }

  const canViewPassword = (platformId: string): boolean => {
    if (!user) return false
    if (isAdmin()) return true
    
    const access = mockPlatformAccess.find(
      access => access.platformId === platformId && access.userId === user.id
    )
    
    return access?.canViewPassword || false
  }

  const canReportProblem = (platformId: string): boolean => {
    if (!user) return false
    
    const access = mockPlatformAccess.find(
      access => access.platformId === platformId && access.userId === user.id
    )
    
    return access?.canReportProblem || false
  }

  const showCosts = (): boolean => {
    return isAdmin()
  }

  const getRemainingTime = (): number => {
    if (!lastActivity) return 0
    const now = new Date()
    const elapsed = now.getTime() - lastActivity.getTime()
    const remaining = sessionTimeout - elapsed
    return Math.max(0, Math.floor(remaining / 1000))
  }

  const setSessionTimeout = (timeout: number) => {
    setSessionTimeoutState(timeout)
    localStorage.setItem('unipass-session-timeout', timeout.toString())
  }

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAdmin,
    isAdminByEmail,
    getDefaultRoute,
    updateLastActivity,
    hasAccessToPlatform,
    canViewPassword,
    canReportProblem,
    showCosts,
    getRemainingTime,
    sessionTimeout,
    setSessionTimeout
  }

  const handleSessionExpiredLogin = async (email: string, password: string): Promise<boolean> => {
    const success = await login(email, password)
    if (success) {
      setShowSessionExpiredModal(false)
    }
    return success
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
      <SessionExpiredModal 
        isOpen={showSessionExpiredModal}
        onLogin={handleSessionExpiredLogin}
      />
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 