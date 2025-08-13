"use client"

import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
    }
  }, [key])

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue] as const
}

// Hook para salvar filtros e preferências do usuário
export function useUserPreferences() {
  const [preferences, setPreferences] = useLocalStorage('unipass-preferences', {
    acessosFilters: {
      status: 'TODOS_STATUS',
      tipo: 'TODOS_TIPOS',
      cliente: 'TODOS_CLIENTES',
      equipe: 'TODAS_EQUIPES'
    },
    senhasFilters: {
      status: 'TODOS_STATUS',
      tipo: 'TODOS_TIPOS',
      colaborador: 'TODOS_COLABORADORES'
    },
    relatoriosFilters: {
      cliente: 'TODOS_CLIENTES',
      tipo: 'TODOS_TIPOS',
      status: 'TODOS_STATUS'
    },
    sidebarLastOpen: null as string | null,
    viewMode: 'card' as 'card' | 'list',
    sortBy: 'updated' as 'updated' | 'name' | 'client'
  })

  const updateAcessosFilters = (filters: Partial<typeof preferences.acessosFilters>) => {
    setPreferences(prev => ({
      ...prev,
      acessosFilters: { ...prev.acessosFilters, ...filters }
    }))
  }

  const updateSenhasFilters = (filters: Partial<typeof preferences.senhasFilters>) => {
    setPreferences(prev => ({
      ...prev,
      senhasFilters: { ...prev.senhasFilters, ...filters }
    }))
  }

  const updateRelatoriosFilters = (filters: Partial<typeof preferences.relatoriosFilters>) => {
    setPreferences(prev => ({
      ...prev,
      relatoriosFilters: { ...prev.relatoriosFilters, ...filters }
    }))
  }

  const updateViewPreferences = (updates: Partial<Pick<typeof preferences, 'viewMode' | 'sortBy' | 'sidebarLastOpen'>>) => {
    setPreferences(prev => ({ ...prev, ...updates }))
  }

  return {
    preferences,
    updateAcessosFilters,
    updateSenhasFilters,
    updateRelatoriosFilters,
    updateViewPreferences
  }
}

// Hook para histórico de ações recentes
export function useRecentActions() {
  const [recentActions, setRecentActions] = useLocalStorage('unipass-recent-actions', [] as Array<{
    id: string
    type: 'view' | 'edit' | 'create' | 'password_view'
    title: string
    description: string
    timestamp: number
    icon?: string
  }>)

  const addAction = (action: Omit<typeof recentActions[0], 'id' | 'timestamp'>) => {
    const newAction = {
      ...action,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now()
    }

    setRecentActions(prev => {
      const filtered = prev.filter(a => !(a.type === action.type && a.title === action.title))
      return [newAction, ...filtered].slice(0, 10) // Keep only last 10 actions
    })
  }

  const clearActions = () => {
    setRecentActions([])
  }

  return {
    recentActions,
    addAction,
    clearActions
  }
} 