"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Plus,
  X,
  Trash2,
  Download,
  ExternalLink,
  FileText,
  Link2,
  Search,
  Filter,
} from "lucide-react"
import { getCurrentUser } from "@/lib/auth"
import { getTranslations, getUserLanguage, type Language } from "@/lib/i18n"

interface File {
  id: string
  name: string
  description: string
  type: "uploaded" | "link"
  url: string
  userId: string
  userEmail: string
  createdAt: string
  relatedTo: "project" | "task" | "meeting" | "design" | "documentation" | "planning" | "research" | "general"
  relatedId?: string
}

const FILE_CATEGORIES = ["project", "task", "meeting", "design", "documentation", "planning", "research", "general"] as const

export default function FilesPage() {
  const [files, setFiles] = useState<File[]>([])
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<"upload" | "link">("upload")
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    url: "",
    relatedTo: "general" as typeof FILE_CATEGORIES[number],
    relatedId: "",
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState<"all" | "uploaded" | "link">("all")
  const [filterRelated, setFilterRelated] = useState<"all" | typeof FILE_CATEGORIES[number]>("all")
  const [language, setLanguage] = useState<Language>("en")
  const t = getTranslations(language)

  useEffect(() => {
    setLanguage(getUserLanguage())
    loadFiles()
  }, [])

  const loadFiles = () => {
    const user = getCurrentUser()
    if (!user) return

    const saved = localStorage.getItem("lab68_files")
    if (saved) {
      const allFiles = JSON.parse(saved)
      setFiles(allFiles.filter((f: File) => f.userId === user.id))
    }
  }

  const saveFiles = (userFiles: File[]) => {
    const user = getCurrentUser()
    if (!user) return

    const saved = localStorage.getItem("lab68_files")
    const allFiles = saved ? JSON.parse(saved) : []

    userFiles.forEach((updatedFile) => {
      const index = allFiles.findIndex((f: File) => f.id === updatedFile.id)
      if (index !== -1) {
        allFiles[index] = updatedFile
      } else {
        allFiles.push(updatedFile)
      }
    })

    localStorage.setItem("lab68_files", JSON.stringify(allFiles))
    loadFiles()
  }

  const handleOpenModal = (type: "upload" | "link") => {
    setModalType(type)
    setShowModal(true)
    setFormData({
      name: "",
      description: "",
      url: "",
      relatedTo: "general",
      relatedId: "",
    })
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setFormData({
      name: "",
      description: "",
      url: "",
      relatedTo: "general",
      relatedId: "",
    })
  }

  const handleSave = () => {
    const user = getCurrentUser()
    if (!user || !formData.name || !formData.url) return

    const newFile: File = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      type: modalType === "upload" ? "uploaded" : "link",
      url: formData.url,
      userId: user.id,
      userEmail: user.email,
      createdAt: new Date().toISOString(),
      relatedTo: formData.relatedTo,
      relatedId: formData.relatedId || undefined,
    }

    saveFiles([...files, newFile])
    handleCloseModal()
  }

  const handleDelete = (fileId: string) => {
    if (confirm("Are you sure you want to delete this file?")) {
      const saved = localStorage.getItem("lab68_files")
      const allFiles = saved ? JSON.parse(saved) : []
      const updatedFiles = allFiles.filter((f: File) => f.id !== fileId)

      localStorage.setItem("lab68_files", JSON.stringify(updatedFiles))
      loadFiles()
    }
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (seconds < 60) return `${seconds}s ago`
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
    return `${Math.floor(seconds / 86400)}d ago`
  }

  // Filter files
  const filteredFiles = files.filter((file) => {
    const matchesSearch =
      file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = filterType === "all" || file.type === filterType
    const matchesRelated = filterRelated === "all" || file.relatedTo === filterRelated

    return matchesSearch && matchesType && matchesRelated
  })

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">{t.files.title}</h1>
          <p className="text-muted-foreground">{t.files.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => handleOpenModal("upload")} className="gap-2">
            <Plus className="h-4 w-4" />
            {t.files.uploadFile}
          </Button>
          <Button onClick={() => handleOpenModal("link")} variant="outline" className="gap-2">
            <Link2 className="h-4 w-4" />
            {t.files.addLink}
          </Button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search files and links..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as "all" | "uploaded" | "link")}
            className="bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
            title="Filter by type"
          >
            <option value="all">All Types</option>
            <option value="uploaded">{t.files.uploaded}</option>
            <option value="link">{t.files.linked}</option>
          </select>
          <select
            value={filterRelated}
            onChange={(e) =>
              setFilterRelated(e.target.value as "all" | typeof FILE_CATEGORIES[number])
            }
            className="bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
            title="Filter by category"
          >
            <option value="all">All Categories</option>
            {FILE_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {t.files[cat as keyof typeof t.files] as string}
              </option>
            ))}
          </select>
        </div>
        {(searchQuery || filterType !== "all" || filterRelated !== "all") && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>
              Showing {filteredFiles.length} of {files.length} items
            </span>
            <button
              onClick={() => {
                setSearchQuery("")
                setFilterType("all")
                setFilterRelated("all")
              }}
              className="text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Files Grid */}
      {filteredFiles.length === 0 ? (
        <div className="border border-border p-12 text-center space-y-4">
          <FileText className="h-12 w-12 mx-auto text-muted-foreground" />
          <div>
            <h3 className="text-xl font-bold mb-2">
              {searchQuery || filterType !== "all" || filterRelated !== "all"
                ? "No files found"
                : t.files.noFiles}
            </h3>
            <p className="text-muted-foreground">
              {searchQuery || filterType !== "all" || filterRelated !== "all"
                ? "Try adjusting your search or filters"
                : t.files.startUploading}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredFiles.map((file) => (
            <Card key={file.id} className="border-border p-6 bg-card hover:border-primary transition-colors">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 flex-1">
                    {file.type === "uploaded" ? (
                      <FileText className="h-5 w-5 text-primary" />
                    ) : (
                      <Link2 className="h-5 w-5 text-primary" />
                    )}
                    <h3 className="text-lg font-bold text-balance flex-1">{file.name}</h3>
                  </div>
                  <span className="text-xs border border-border px-2 py-1 text-muted-foreground capitalize">
                    {file.relatedTo}
                  </span>
                </div>

                {file.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {file.description}
                  </p>
                )}

                <div className="pt-2 border-t border-border space-y-2">
                  <p className="text-xs text-muted-foreground">
                    {file.type === "uploaded" ? t.files.uploadedBy : t.files.linkedBy} {file.userEmail}
                  </p>
                  <p className="text-xs text-muted-foreground">{getTimeAgo(file.createdAt)}</p>

                  <div className="flex gap-2 pt-2">
                    {file.type === "uploaded" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(file.url, "_blank")}
                        className="flex-1 gap-2 border-primary text-primary hover:bg-primary hover:text-background"
                      >
                        <Download className="h-3 w-3" />
                        {t.files.download}
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(file.url, "_blank")}
                        className="flex-1 gap-2 border-primary text-primary hover:bg-primary hover:text-background"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {t.files.openLink}
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(file.id)}
                      className="flex-1 gap-2 border-destructive text-destructive hover:bg-destructive hover:text-background"
                    >
                      <Trash2 className="h-3 w-3" />
                      {t.files.delete}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-md border border-border bg-background p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {modalType === "upload" ? t.files.uploadFile : t.files.addLink}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-muted-foreground hover:text-foreground"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {modalType === "upload" ? t.files.fileName : t.files.linkTitle}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={modalType === "upload" ? t.files.fileName : t.files.linkTitle}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.files.fileDescription}</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={t.files.fileDescription}
                  rows={3}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {modalType === "upload" ? t.files.fileUrl : t.files.linkUrl}
                </label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder={modalType === "upload" ? "https://..." : t.files.linkUrl}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.files.relatedTo}</label>
                <select
                  value={formData.relatedTo}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      relatedTo: e.target.value as typeof FILE_CATEGORIES[number],
                    })
                  }
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                  title={t.files.relatedTo}
                >
                  {FILE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {t.files[cat as keyof typeof t.files] as string}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSave} className="flex-1">
                  {modalType === "upload" ? t.files.upload : t.files.addLinkButton}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCloseModal}
                  className="flex-1 border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  {t.files.cancel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
