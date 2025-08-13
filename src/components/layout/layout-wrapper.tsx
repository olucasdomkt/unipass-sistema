"use client"

import { useAuth } from '@/lib/auth-context'
import { Sidebar } from '@/components/layout/sidebar'
import { LoginForm } from '@/components/auth/login-form'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { user, isAdminByEmail, getDefaultRoute } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      // Redirecionar baseado no role
      if (pathname === '/' && !isAdminByEmail()) {
        router.push('/plataformas')
      }
    }
  }, [user, pathname, isAdminByEmail, router])

  if (!user) {
    return <LoginForm />
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-white">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
} 