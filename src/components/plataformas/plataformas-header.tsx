"use client"

import { Search, Plus, Filter, Command } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useQuickSearch } from '@/components/ui/quick-search'

interface PlataformasHeaderProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedType: string
  onTypeChange: (value: string) => void
  selectedClient: string
  onClientChange: (value: string) => void
  clientOptions: Array<{ id: string; nome: string }>
  onNewPlatform: () => void
}

const tiposPlataforma = [
  { value: 'TODOS', label: 'Todos os tipos' },
  { value: 'MIDIA', label: 'Mídia' },
  { value: 'CRM', label: 'CRM' },
  { value: 'DOMINIO', label: 'Domínio' },
  { value: 'EMAIL', label: 'E-mail' },
  { value: 'DESIGN', label: 'Design' },
  { value: 'GESTAO', label: 'Gestão' },
  { value: 'ANALISE', label: 'Análise' },
  { value: 'HOSPEDAGEM', label: 'Hospedagem' },
  { value: 'OUTROS', label: 'Outros' }
]

export function PlataformasHeader({ 
  searchTerm, 
  onSearchChange, 
  selectedType, 
  onTypeChange,
  selectedClient,
  onClientChange,
  clientOptions,
  onNewPlatform 
}: PlataformasHeaderProps) {
  const quickSearch = useQuickSearch()

  return (
    <div className="space-y-6">
      {/* Título da página */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Acessos</h1>
        <p className="text-gray-600 mt-1">
          Gerencie todos os acessos e credenciais da equipe
        </p>
      </div>

      {/* Área de ações */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full sm:w-auto">
          {/* Campo de busca */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar acesso..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>

          {/* Filtro por tipo */}
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              {tiposPlataforma.map((tipo) => (
                <SelectItem key={tipo.value} value={tipo.value}>
                  {tipo.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Filtro por cliente */}
          <Select value={selectedClient} onValueChange={onClientChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Cliente" />
            </SelectTrigger>
            <SelectContent>
              {clientOptions.map((cliente) => (
                <SelectItem key={cliente.id} value={cliente.id}>
                  {cliente.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Botões de ação */}
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={quickSearch.open}
            className="gap-2 whitespace-nowrap"
          >
            <Command className="h-4 w-4" />
            <span className="hidden sm:inline">Busca rápida</span>
            <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
          <Button onClick={onNewPlatform} className="gap-2 whitespace-nowrap">
            <Plus className="h-4 w-4" />
            Novo acesso
          </Button>
        </div>
      </div>
    </div>
  )
} 