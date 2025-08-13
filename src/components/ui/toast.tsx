"use client"

import { useState, useEffect } from 'react'
import { X, CheckCircle, AlertCircle, XCircle, Info } from 'lucide-react'

export interface ToastProps {
  title: string
  description?: string
  variant?: 'default' | 'destructive' | 'success' | 'warning'
  duration?: number
}

interface ToastState extends ToastProps {
  id: string
  show: boolean
}

let toastId = 0
const toasts: ToastState[] = []
const listeners: ((toasts: ToastState[]) => void)[] = []

function notify() {
  listeners.forEach(listener => listener([...toasts]))
}

export function toast({ title, description, variant = 'default', duration = 5000 }: ToastProps) {
  const id = (++toastId).toString()
  const newToast: ToastState = {
    id,
    title,
    description,
    variant,
    duration,
    show: true
  }

  toasts.push(newToast)
  notify()

  // Auto remove after duration
  setTimeout(() => {
    removeToast(id)
  }, duration)
}

function removeToast(id: string) {
  const index = toasts.findIndex(toast => toast.id === id)
  if (index > -1) {
    toasts.splice(index, 1)
    notify()
  }
}

export function Toaster() {
  const [toastList, setToastList] = useState<ToastState[]>([])

  useEffect(() => {
    const listener = (newToasts: ToastState[]) => {
      setToastList(newToasts)
    }
    
    listeners.push(listener)
    
    return () => {
      const index = listeners.indexOf(listener)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  const getIcon = (variant: string) => {
    switch (variant) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'destructive':
        return <XCircle className="h-4 w-4 text-red-600" />
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      default:
        return <Info className="h-4 w-4 text-blue-600" />
    }
  }

  const getStyles = (variant: string) => {
    switch (variant) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-900'
      case 'destructive':
        return 'bg-red-50 border-red-200 text-red-900'
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-900'
      default:
        return 'bg-blue-50 border-blue-200 text-blue-900'
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toastList.map((toast) => (
        <div
          key={toast.id}
          className={`max-w-sm w-full border rounded-lg p-4 shadow-lg transition-all duration-300 ${getStyles(toast.variant || 'default')}`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {getIcon(toast.variant || 'default')}
            </div>
            <div className="ml-3 w-0 flex-1">
              <p className="text-sm font-medium">
                {toast.title}
              </p>
              {toast.description && (
                <p className="mt-1 text-sm opacity-90">
                  {toast.description}
                </p>
              )}
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                onClick={() => removeToast(toast.id)}
                className="inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}