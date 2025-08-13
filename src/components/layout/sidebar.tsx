"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Shield, 
  LayoutDashboard, 
  Globe, 
  Users, 
  Key, 
  ChartColumn, 
  Settings, 
  CircleQuestionMark,
  ChevronLeft,
  LogOut,
  User,
  Activity
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'

export function Sidebar() {
  const { user, isAdmin, isAdminByEmail, logout, getRemainingTime } = useAuth()
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [remainingTime, setRemainingTime] = useState(0)

  // Atualiza o timer a cada segundo
  useEffect(() => {
    const updateTimer = () => {
      setRemainingTime(getRemainingTime())
    }
    
    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    
    return () => clearInterval(interval)
  }, [getRemainingTime])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: LayoutDashboard,
      adminOnly: true,
    },
    {
      name: 'Plataformas',
      href: '/plataformas',
      icon: Globe,
      adminOnly: false,
    },
    {
      name: 'Senhas',
      href: '/senhas',
      icon: Key,
      adminOnly: false,
    },
    {
      name: 'Colaboradores',
      href: '/colaboradores',
      icon: Users,
      adminOnly: true,
    },
    {
      name: 'Relatórios',
      href: '/relatorios',
      icon: ChartColumn,
      adminOnly: true,
    },
    {
      name: 'Logs',
      href: '/logs',
      icon: Activity,
      adminOnly: true,
    },
    {
      name: 'Configurações',
      href: '/configuracoes',
      icon: Settings,
      adminOnly: true,
    },
    {
      name: 'Ajuda',
      href: '/ajuda',
      icon: CircleQuestionMark,
      adminOnly: false,
    },
  ]

  const filteredNavItems = navigationItems.filter(item => {
    if (item.adminOnly && !isAdminByEmail()) return false
    return true
  })

  return (
    <div className={`relative flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-600" />
          {!isCollapsed && (
            <span className="text-xl font-bold text-gray-900">Unipass</span>
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* User Info */}
      {!isCollapsed && user && (
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user.name}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user.equipe} • {isAdminByEmail() ? 'Admin' : 'Usuário'}
              </p>
            </div>
          </div>
          
          {/* Session Timer */}
          <div className="mt-3 text-xs text-gray-500">
            <div className="flex items-center justify-between">
              <span>Sessão expira em:</span>
              <span className={`font-mono ${remainingTime < 60 ? 'text-red-500' : 'text-gray-600'}`}>
                {formatTime(remainingTime)}
              </span>
            </div>
            <div className="mt-1 w-full bg-gray-200 rounded-full h-1">
              <div 
                className={`h-1 rounded-full transition-all duration-1000 ${
                  remainingTime < 60 ? 'bg-red-500' : 'bg-blue-500'
                }`}
                style={{ width: `${(remainingTime / 300) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {filteredNavItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                isActive
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              } ${isCollapsed ? 'justify-center' : ''}`}
              title={isCollapsed ? item.name : undefined}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <Button
          onClick={logout}
          variant="outline"
          className={`w-full text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 ${
            isCollapsed ? 'px-2' : ''
          }`}
          title={isCollapsed ? 'Sair' : undefined}
        >
          <span className="text-lg">🚪</span>
          {!isCollapsed && <span className="ml-2">Sair</span>}
        </Button>
      </div>
    </div>
  )
} 