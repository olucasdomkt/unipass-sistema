"use client"

import { useState } from 'react'
import { X, Plus, Edit, Trash2, Save, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { supabase, Equipe } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'
import { toast } from '@/components/ui/toast'

interface EquipesDialogProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  equipes: Equipe[]
}

export function EquipesDialog({ isOpen, onClose, onSuccess, equipes }: EquipesDialogProps) {
  const { updateLastActivity } = useAuth()
  const [loading, setLoading] = useState(false)
  const [editingEquipe, setEditingEquipe] = useState<Equipe | null>(null)
  const [newEquipeName, setNewEquipeName] = useState('')
  const [showNewForm, setShowNewForm] = useState(false)

  const handleCreateEquipe = async () => {
    if (!newEquipeName.trim()) {
      toast({
        title: 'Erro',
        description: 'Nome da equipe é obrigatório',
        variant: 'destructive'
      })
      return
    }

    setLoading(true)
    updateLastActivity()

    try {
      const { error } = await supabase
        .from('equipes')
        .insert([{
          nome: newEquipeName.trim(),
          ativa: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])

      if (error) throw error

      toast({
        title: 'Sucesso',
        description: 'Equipe criada com sucesso',
        variant: 'default'
      })

      setNewEquipeName('')
      setShowNewForm(false)
      onSuccess()
    } catch (error: any) {
      console.error('Erro ao criar equipe:', error)
      
      let errorMessage = 'Não foi possível criar a equipe'
      if (error.message?.includes('unique')) {
        errorMessage = 'Já existe uma equipe com este nome'
      }
      
      toast({
        title: 'Erro',
        description: errorMessage,
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateEquipe = async (equipe: Equipe, newName: string) => {
    if (!newName.trim()) {
      toast({
        title: 'Erro',
        description: 'Nome da equipe é obrigatório',
        variant: 'destructive'
      })
      return
    }

    setLoading(true)
    updateLastActivity()

    try {
      const { error } = await supabase
        .from('equipes')
        .update({
          nome: newName.trim(),
          updated_at: new Date().toISOString()
        })
        .eq('id', equipe.id)

      if (error) throw error

      toast({
        title: 'Sucesso',
        description: 'Equipe atualizada com sucesso',
        variant: 'default'
      })

      setEditingEquipe(null)
      onSuccess()
    } catch (error: any) {
      console.error('Erro ao atualizar equipe:', error)
      
      let errorMessage = 'Não foi possível atualizar a equipe'
      if (error.message?.includes('unique')) {
        errorMessage = 'Já existe uma equipe com este nome'
      }
      
      toast({
        title: 'Erro',
        description: errorMessage,
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDeactivateEquipe = async (equipe: Equipe) => {
    if (!confirm(`Tem certeza que deseja desativar a equipe "${equipe.nome}"?\n\nColaboradores desta equipe ficarão sem equipe.`)) {
      return
    }

    setLoading(true)
    updateLastActivity()

    try {
      // Check if there are colaboradores in this equipe
      const { data: colaboradores } = await supabase
        .from('colaboradores')
        .select('id, nome')
        .eq('equipe_id', equipe.id)
        .eq('status', 'ATIVO')

      if (colaboradores && colaboradores.length > 0) {
        const confirmWithColaboradores = confirm(
          `Esta equipe tem ${colaboradores.length} colaborador(es) ativo(s).\n\nContinuar mesmo assim? Os colaboradores ficarão sem equipe.`
        )
        
        if (!confirmWithColaboradores) {
          setLoading(false)
          return
        }

        // Remove equipe from colaboradores
        await supabase
          .from('colaboradores')
          .update({ equipe_id: null })
          .eq('equipe_id', equipe.id)
      }

      // Deactivate equipe
      const { error } = await supabase
        .from('equipes')
        .update({
          ativa: false,
          updated_at: new Date().toISOString()
        })
        .eq('id', equipe.id)

      if (error) throw error

      toast({
        title: 'Sucesso',
        description: 'Equipe desativada com sucesso',
        variant: 'default'
      })

      onSuccess()
    } catch (error) {
      console.error('Erro ao desativar equipe:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível desativar a equipe',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Gerenciar equipes</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* New Equipe Form */}
          {showNewForm ? (
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da nova equipe
                </label>
                <input
                  type="text"
                  value={newEquipeName}
                  onChange={(e) => setNewEquipeName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleCreateEquipe()}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Desenvolvimento"
                  autoFocus
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={handleCreateEquipe} 
                  disabled={loading || !newEquipeName.trim()}
                  size="sm"
                  className="flex-1"
                >
                  {loading && <Loader2 className="h-3 w-3 mr-2 animate-spin" />}
                  <Save className="h-3 w-3 mr-2" />
                  Criar
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowNewForm(false)
                    setNewEquipeName('')
                  }}
                  size="sm"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          ) : (
            <Button 
              onClick={() => setShowNewForm(true)}
              className="w-full flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Nova equipe
            </Button>
          )}

          {/* Equipes List */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900">
              Equipes ativas ({equipes.length})
            </h4>
            
            {equipes.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-4">
                Nenhuma equipe cadastrada
              </p>
            ) : (
              <div className="space-y-2">
                {equipes.map((equipe) => (
                  <div key={equipe.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    {editingEquipe?.id === equipe.id ? (
                      <div className="flex-1 flex gap-2">
                        <input
                          type="text"
                          defaultValue={equipe.nome}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const target = e.target as HTMLInputElement
                              handleUpdateEquipe(equipe, target.value)
                            }
                          }}
                          className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                          autoFocus
                        />
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingEquipe(null)}
                          className="px-2"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ) : (
                      <>
                        <span className="text-sm font-medium text-gray-900">
                          {equipe.nome}
                        </span>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingEquipe(equipe)}
                            className="px-2"
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeactivateEquipe(equipe)}
                            className="px-2 text-red-600 border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-900 mb-2">Sobre as equipes</h4>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Equipes organizam colaboradores por área ou função</li>
              <li>• Podem ser usadas para controlar acesso às plataformas</li>
              <li>• Desativar uma equipe remove a vinculação dos colaboradores</li>
              <li>• Colaboradores sem equipe têm acesso limitado</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
