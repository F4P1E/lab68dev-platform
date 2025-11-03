"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Plus, X, Trash2, Pencil } from "lucide-react"
import { getTranslations, getUserLanguage, type Language } from "@/lib/i18n"

interface KanbanCard {
  id: string
  title: string
  description: string
  assignee?: string
  dueDate?: string
  columnId: string
}

interface KanbanColumn {
  id: string
  name: string
  cards: KanbanCard[]
}

interface Project {
  id: string
  name: string
  userId: string
  collaborators?: string[]
}

export default function KanbanPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string

  const [project, setProject] = useState<Project | null>(null)
  const [columns, setColumns] = useState<KanbanColumn[]>([])
  const [showCardModal, setShowCardModal] = useState(false)
  const [showColumnModal, setShowColumnModal] = useState(false)
  const [editingCard, setEditingCard] = useState<KanbanCard | null>(null)
  const [selectedColumnId, setSelectedColumnId] = useState<string>("")
  const [draggedCard, setDraggedCard] = useState<KanbanCard | null>(null)
  const [cardForm, setCardForm] = useState({
    title: "",
    description: "",
    assignee: "",
    dueDate: "",
  })
  const [columnName, setColumnName] = useState("")
  const [language, setLanguage] = useState<Language>("en")
  const t = getTranslations(language)

  useEffect(() => {
    setLanguage(getUserLanguage())
    loadProject()
    loadKanban()
  }, [projectId])

  const loadProject = () => {
    const saved = localStorage.getItem("lab68_projects")
    if (saved) {
      const allProjects = JSON.parse(saved)
      const foundProject = allProjects.find((p: Project) => p.id === projectId)
      if (foundProject) {
        setProject(foundProject)
      } else {
        router.push("/dashboard/projects")
      }
    }
  }

  const loadKanban = () => {
    const saved = localStorage.getItem(`lab68_kanban_${projectId}`)
    if (saved) {
      setColumns(JSON.parse(saved))
    } else {
      // Initialize with default columns
      const defaultColumns: KanbanColumn[] = [
        { id: "todo", name: "To Do", cards: [] },
        { id: "inprogress", name: "In Progress", cards: [] },
        { id: "done", name: "Done", cards: [] },
      ]
      setColumns(defaultColumns)
      saveKanban(defaultColumns)
    }
  }

  const saveKanban = (updatedColumns: KanbanColumn[]) => {
    localStorage.setItem(`lab68_kanban_${projectId}`, JSON.stringify(updatedColumns))
    setColumns(updatedColumns)
  }

  const handleOpenCardModal = (columnId: string, card?: KanbanCard) => {
    setSelectedColumnId(columnId)
    if (card) {
      setEditingCard(card)
      setCardForm({
        title: card.title,
        description: card.description,
        assignee: card.assignee || "",
        dueDate: card.dueDate || "",
      })
    } else {
      setEditingCard(null)
      setCardForm({ title: "", description: "", assignee: "", dueDate: "" })
    }
    setShowCardModal(true)
  }

  const handleSaveCard = () => {
    if (!cardForm.title) return

    const updatedColumns = columns.map((col) => {
      if (col.id === selectedColumnId) {
        if (editingCard) {
          // Edit existing card
          return {
            ...col,
            cards: col.cards.map((card) => (card.id === editingCard.id ? { ...card, ...cardForm } : card)),
          }
        } else {
          // Add new card
          const newCard: KanbanCard = {
            id: Date.now().toString(),
            ...cardForm,
            columnId: col.id,
          }
          return { ...col, cards: [...col.cards, newCard] }
        }
      }
      return col
    })

    saveKanban(updatedColumns)
    setShowCardModal(false)
    setCardForm({ title: "", description: "", assignee: "", dueDate: "" })
    setEditingCard(null)
  }

  const handleDeleteCard = (columnId: string, cardId: string) => {
    if (!confirm(t.kanban.deleteCard + "?")) return

    const updatedColumns = columns.map((col) =>
      col.id === columnId ? { ...col, cards: col.cards.filter((card) => card.id !== cardId) } : col,
    )
    saveKanban(updatedColumns)
  }

  const handleAddColumn = () => {
    if (!columnName) return

    const newColumn: KanbanColumn = {
      id: Date.now().toString(),
      name: columnName,
      cards: [],
    }
    saveKanban([...columns, newColumn])
    setColumnName("")
    setShowColumnModal(false)
  }

  const handleDeleteColumn = (columnId: string) => {
    if (!confirm(t.kanban.deleteColumn + "?")) return
    saveKanban(columns.filter((col) => col.id !== columnId))
  }

  const handleDragStart = (card: KanbanCard) => {
    setDraggedCard(card)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (targetColumnId: string) => {
    if (!draggedCard) return

    const updatedColumns = columns.map((col) => {
      // Remove card from source column
      if (col.id === draggedCard.columnId) {
        return { ...col, cards: col.cards.filter((card) => card.id !== draggedCard.id) }
      }
      // Add card to target column
      if (col.id === targetColumnId) {
        return { ...col, cards: [...col.cards, { ...draggedCard, columnId: targetColumnId }] }
      }
      return col
    })

    saveKanban(updatedColumns)
    setDraggedCard(null)
  }

  if (!project) return null

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard/projects")}
            className="gap-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.kanban.backToProjects}
          </Button>
          <div>
            <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
            <p className="text-muted-foreground">{t.kanban.title}</p>
          </div>
        </div>
        <Button onClick={() => setShowColumnModal(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          {t.kanban.addColumn}
        </Button>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((column) => (
          <div
            key={column.id}
            className="flex-shrink-0 w-80 border border-border bg-card p-4 space-y-4"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column.id)}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">
                {column.name} ({column.cards.length})
              </h3>
              <div className="flex gap-2">
                <button onClick={() => handleOpenCardModal(column.id)} className="text-primary hover:text-primary/80">
                  <Plus className="h-4 w-4" />
                </button>
                {columns.length > 1 && (
                  <button
                    onClick={() => handleDeleteColumn(column.id)}
                    className="text-destructive hover:text-destructive/80"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-2 min-h-[200px]">
              {column.cards.length === 0 ? (
                <div className="border border-dashed border-border p-8 text-center">
                  <p className="text-xs text-muted-foreground">{t.kanban.noCards}</p>
                </div>
              ) : (
                column.cards.map((card) => (
                  <Card
                    key={card.id}
                    draggable
                    onDragStart={() => handleDragStart(card)}
                    className="p-4 cursor-move hover:border-primary transition-colors space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm flex-1">{card.title}</h4>
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleOpenCardModal(column.id, card)}
                          className="text-foreground hover:text-primary"
                        >
                          <Pencil className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => handleDeleteCard(column.id, card.id)}
                          className="text-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    {card.description && (
                      <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
                    )}
                    {(card.assignee || card.dueDate) && (
                      <div className="flex gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                        {card.assignee && <span>👤 {card.assignee}</span>}
                        {card.dueDate && <span>📅 {new Date(card.dueDate).toLocaleDateString()}</span>}
                      </div>
                    )}
                  </Card>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Card Modal */}
      {showCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-md border border-border bg-background p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{editingCard ? t.kanban.editCard : t.kanban.addCard}</h2>
              <button onClick={() => setShowCardModal(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.kanban.cardTitle}</label>
                <input
                  type="text"
                  value={cardForm.title}
                  onChange={(e) => setCardForm({ ...cardForm, title: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.kanban.cardDescription}</label>
                <textarea
                  value={cardForm.description}
                  onChange={(e) => setCardForm({ ...cardForm, description: e.target.value })}
                  rows={3}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.kanban.assignee}</label>
                <input
                  type="text"
                  value={cardForm.assignee}
                  onChange={(e) => setCardForm({ ...cardForm, assignee: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.kanban.dueDate}</label>
                <input
                  type="date"
                  value={cardForm.dueDate}
                  onChange={(e) => setCardForm({ ...cardForm, dueDate: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSaveCard} className="flex-1">
                  {editingCard ? t.kanban.save : t.kanban.create}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowCardModal(false)}
                  className="flex-1 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  {t.kanban.cancel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Column Modal */}
      {showColumnModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-md border border-border bg-background p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{t.kanban.addColumn}</h2>
              <button onClick={() => setShowColumnModal(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.kanban.columnName}</label>
                <input
                  type="text"
                  value={columnName}
                  onChange={(e) => setColumnName(e.target.value)}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleAddColumn} className="flex-1">
                  {t.kanban.create}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowColumnModal(false)}
                  className="flex-1 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  {t.kanban.cancel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
