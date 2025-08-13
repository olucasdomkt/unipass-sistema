"use client"

import { useState, useEffect, useRef } from 'react'
import { Search, Clock, Eye, Edit, Plus } from 'lucide-react'
import { useRecentActions } from '@/hooks/use-local-storage'
import { Dialog, DialogContent } from './dialog'

interface QuickSearchProps {
  isOpen: boolean
  onClose: () => void
}

interface SearchResult {
  id: string
  type: 'acesso' | 'colaborador' | 'recent_action'
  title: string
  subtitle: string
  icon?: string
  href?: string
  action?: () => void
}

export function QuickSearch({ isOpen, onClose }: QuickSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { recentActions } = useRecentActions()
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock data - em produção viria de uma API
  const allAcessos = [
    { id: '1', nome: 'Google Ads - Cliente A', cliente: 'Cliente A', tipo: 'ads' },
    { id: '2', nome: 'Facebook Business - Cliente B', cliente: 'Cliente B', tipo: 'social_media' },
    { id: '3', nome: 'Analytics - Cliente A', cliente: 'Cliente A', tipo: 'analytics' },
  ]

  const allColaboradores = [
    { id: '1', nome: 'Ana Silva', email: 'ana@agencia.com', cargo: 'Admin' },
    { id: '2', nome: 'João Santos', email: 'joao@agencia.com', cargo: 'Designer' },
  ]

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!query.trim()) {
      // Show recent actions when no query
      const recentResults: SearchResult[] = recentActions.slice(0, 5).map(action => ({
        id: action.id,
        type: 'recent_action',
        title: action.title,
        subtitle: action.description,
        icon: action.icon
      }))
      setResults(recentResults)
      setSelectedIndex(0)
      return
    }

    const searchResults: SearchResult[] = []

    // Search in acessos
    allAcessos
      .filter(acesso => 
        acesso.nome.toLowerCase().includes(query.toLowerCase()) ||
        acesso.cliente.toLowerCase().includes(query.toLowerCase())
      )
      .forEach(acesso => {
        searchResults.push({
          id: acesso.id,
          type: 'acesso',
          title: acesso.nome,
          subtitle: `Cliente: ${acesso.cliente}`,
          href: `/acessos?id=${acesso.id}`
        })
      })

    // Search in colaboradores
    allColaboradores
      .filter(colaborador => 
        colaborador.nome.toLowerCase().includes(query.toLowerCase()) ||
        colaborador.email.toLowerCase().includes(query.toLowerCase())
      )
      .forEach(colaborador => {
        searchResults.push({
          id: colaborador.id,
          type: 'colaborador',
          title: colaborador.nome,
          subtitle: colaborador.email,
          href: `/colaboradores?id=${colaborador.id}`
        })
      })

    setResults(searchResults.slice(0, 8))
    setSelectedIndex(0)
  }, [query, recentActions])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const selected = results[selectedIndex]
      if (selected) {
        if (selected.href) {
          window.location.href = selected.href
        } else if (selected.action) {
          selected.action()
        }
        onClose()
      }
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  const getResultIcon = (result: SearchResult) => {
    switch (result.type) {
      case 'acesso':
        return <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <Search className="h-4 w-4 text-blue-600" />
        </div>
      case 'colaborador':
        return <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
          <span className="text-sm font-medium text-green-600">
            {result.title.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
          </span>
        </div>
      case 'recent_action':
        return <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
          <Clock className="h-4 w-4 text-gray-600" />
        </div>
      default:
        return null
    }
  }

  const formatTimestamp = (timestamp: number) => {
    const diff = Date.now() - timestamp
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (minutes < 60) return `${minutes}m atrás`
    if (hours < 24) return `${hours}h atrás`
    return `${days}d atrás`
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="fixed top-[10vh] left-[50%] translate-x-[-50%] translate-y-0 max-w-2xl w-full mx-4 p-0 gap-0">
        <div className="bg-white rounded-xl shadow-2xl border w-full">
          {/* Search Input */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar acessos, colaboradores..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-10 pr-4 py-3 border-0 focus:ring-0 text-lg placeholder-gray-400"
              />
            </div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {results.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                {query ? 'Nenhum resultado encontrado' : 'Comece digitando para buscar...'}
              </div>
            ) : (
              <div className="p-2">
                {!query && results.length > 0 && (
                  <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Ações Recentes
                  </div>
                )}
                {results.map((result, index) => (
                  <button
                    key={result.id}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                      index === selectedIndex ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      if (result.href) {
                        window.location.href = result.href
                      } else if (result.action) {
                        result.action()
                      }
                      onClose()
                    }}
                  >
                    {getResultIcon(result)}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">
                        {result.title}
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        {result.subtitle}
                      </div>
                    </div>
                    {result.type === 'recent_action' && (
                      <div className="text-xs text-gray-400">
                        {formatTimestamp(recentActions.find(a => a.id === result.id)?.timestamp || 0)}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white border rounded text-xs">↑↓</kbd>
                <span>para navegar</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-white border rounded text-xs">Enter</kbd>
                <span>para selecionar</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white border rounded text-xs">Esc</kbd>
              <span>para fechar</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Hook para usar o quick search globalmente
export function useQuickSearch() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }
} 