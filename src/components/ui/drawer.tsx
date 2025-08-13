"use client"

import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export function Drawer({ isOpen, onClose, title, children, size = 'md' }: DrawerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  // Fechar drawer ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const sizeClasses = {
    sm: 'w-full md:w-80',
    md: 'w-full md:w-96',
    lg: 'w-full md:w-[32rem]'
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer - mobile ocupa tela toda, desktop lateral direito */}
      <div 
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform duration-300 ${
          sizeClasses[size]
        } ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col overflow-hidden`}
      >
        {/* Header fixo */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200 bg-white flex-shrink-0">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Content com scroll */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6 pb-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
} 