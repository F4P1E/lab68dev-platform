"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, CheckCircle2, Clock, X, Pencil, Trash2, Users, LayoutGrid, Search, Filter } from "lucide-react"
import { getCurrentUser, getAllUsers } from "@/lib/auth"
import { getTranslations, getUserLanguage, type Language } from "@/lib/i18n"
import Link from "next/link"

interface Project {
  id: string
  name: string
  description: string
  status: string
  tech: string[]
  lastUpdated: string
  userId: string
  collaborators?: string[] // Array of user emails
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [showCollabModal, setShowCollabModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [collaboratorEmail, setCollaboratorEmail] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Active",
    tech: "",
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [language, setLanguage] = useState<Language>("en")
  const t = getTranslations(language)

  useEffect(() => {
    setLanguage(getUserLanguage())
    loadProjects()
  }, [])

  const loadProjects = () => {
    const user = getCurrentUser()
    if (!user) return

    const saved = localStorage.getItem("lab68_projects")
    if (saved) {
      const allProjects = JSON.parse(saved)
      setProjects(
        allProjects.filter(
          (p: Project) => p.userId === user.email || (p.collaborators && p.collaborators.includes(user.email)),
        ),
      )
    }
  }

  const saveProjects = (userProjects: Project[]) => {
    const user = getCurrentUser()
    if (!user) return

    const saved = localStorage.getItem("lab68_projects")
    const allProjects = saved ? JSON.parse(saved) : []

    userProjects.forEach((updatedProject) => {
      const index = allProjects.findIndex((p: Project) => p.id === updatedProject.id)
      if (index !== -1) {
        allProjects[index] = updatedProject
      } else {
        allProjects.push(updatedProject)
      }
    })

    localStorage.setItem("lab68_projects", JSON.stringify(allProjects))
    loadProjects()
  }

  const handleOpenModal = (project?: Project) => {
    if (project) {
      setEditingProject(project)
      setFormData({
        name: project.name,
        description: project.description,
        status: project.status,
        tech: project.tech.join(", "),
      })
    } else {
      setEditingProject(null)
      setFormData({ name: "", description: "", status: "Active", tech: "" })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingProject(null)
    setFormData({ name: "", description: "", status: "Active", tech: "" })
  }

  const handleSaveProject = () => {
    const user = getCurrentUser()
    if (!user || !formData.name || !formData.description) return

    const techArray = formData.tech
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t)

    if (editingProject) {
      const saved = localStorage.getItem("lab68_projects")
      const allProjects = saved ? JSON.parse(saved) : []
      const updatedProjects = allProjects.map((p: Project) =>
        p.id === editingProject.id
          ? {
              ...p,
              name: formData.name,
              description: formData.description,
              status: formData.status,
              tech: techArray,
              lastUpdated: new Date().toISOString(),
            }
          : p,
      )

      localStorage.setItem("lab68_projects", JSON.stringify(updatedProjects))
      loadProjects()
    } else {
      const newProject: Project = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        status: formData.status,
        tech: techArray,
        lastUpdated: new Date().toISOString(),
        userId: user.email,
        collaborators: [],
      }
      saveProjects([...projects, newProject])
    }

    handleCloseModal()
  }

  const handleDeleteProject = (projectId: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const saved = localStorage.getItem("lab68_projects")
      const allProjects = saved ? JSON.parse(saved) : []
      const updatedProjects = allProjects.filter((p: Project) => p.id !== projectId)

      localStorage.setItem("lab68_projects", JSON.stringify(updatedProjects))
      loadProjects()
    }
  }

  const handleOpenCollabModal = (project: Project) => {
    setSelectedProject(project)
    setShowCollabModal(true)
  }

  const handleAddCollaborator = () => {
    if (!selectedProject || !collaboratorEmail) return

    const users = getAllUsers()
    const userExists = users.find((u) => u.email === collaboratorEmail)

    if (!userExists) {
      alert("User not found. Please enter a valid email address.")
      return
    }

    const currentUser = getCurrentUser()
    if (collaboratorEmail === currentUser?.email) {
      alert("You cannot add yourself as a collaborator.")
      return
    }

    if (selectedProject.collaborators?.includes(collaboratorEmail)) {
      alert("This user is already a collaborator.")
      return
    }

    const saved = localStorage.getItem("lab68_projects")
    const allProjects = saved ? JSON.parse(saved) : []
    const updatedProjects = allProjects.map((p: Project) =>
      p.id === selectedProject.id ? { ...p, collaborators: [...(p.collaborators || []), collaboratorEmail] } : p,
    )

    localStorage.setItem("lab68_projects", JSON.stringify(updatedProjects))
    setCollaboratorEmail("")
    loadProjects()
    setSelectedProject(updatedProjects.find((p: Project) => p.id === selectedProject.id))
  }

  const handleRemoveCollaborator = (email: string) => {
    if (!selectedProject) return

    const saved = localStorage.getItem("lab68_projects")
    const allProjects = saved ? JSON.parse(saved) : []
    const updatedProjects = allProjects.map((p: Project) =>
      p.id === selectedProject.id ? { ...p, collaborators: p.collaborators?.filter((c: string) => c !== email) } : p,
    )

    localStorage.setItem("lab68_projects", JSON.stringify(updatedProjects))
    loadProjects()
    setSelectedProject(updatedProjects.find((p: Project) => p.id === selectedProject.id))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <CheckCircle2 className="h-4 w-4" />
      case "Building":
      case "In Progress":
        return <Clock className="h-4 w-4" />
      default:
        return <CheckCircle2 className="h-4 w-4" />
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

  // Filter projects based on search and filters
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesStatus = filterStatus === "all" || project.status === filterStatus

    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">{t.projects.title}</h1>
          <p className="text-muted-foreground">{t.projects.subtitle}</p>
        </div>
        <Button onClick={() => handleOpenModal()} className="gap-2">
          <Plus className="h-4 w-4" />
          {t.projects.newProject}
        </Button>
      </div>

      {/* Search and Filter Section */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
            title="Filter by status"
          >
            <option value="all">All Status</option>
            <option value="Active">{t.projects.active}</option>
            <option value="Building">{t.projects.building}</option>
            <option value="In Progress">{t.projects.inProgress}</option>
          </select>
        </div>
        {(searchQuery || filterStatus !== "all") && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
            <button
              onClick={() => {
                setSearchQuery("")
                setFilterStatus("all")
              }}
              className="text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="border border-border p-12 text-center space-y-4">
          <Plus className="h-12 w-12 mx-auto text-muted-foreground" />
          <div>
            <h3 className="text-xl font-bold mb-2">
              {searchQuery || filterStatus !== "all" ? "No projects found" : t.projects.noProjects}
            </h3>
            <p className="text-muted-foreground">
              {searchQuery || filterStatus !== "all" ? "Try adjusting your search or filters" : t.projects.startCreating}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const currentUser = getCurrentUser()
            const isOwner = project.userId === currentUser?.email
            return (
              <Card key={project.id} className="border-border p-6 bg-card hover:border-primary transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-balance flex-1">{project.name}</h3>
                    <div className="flex items-center gap-1 text-xs border border-primary text-primary px-2 py-1">
                      {getStatusIcon(project.status)}
                      <span>{project.status}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs border border-border px-2 py-1 text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.collaborators && project.collaborators.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>
                        {project.collaborators.length} {t.projects.collaborators}
                      </span>
                    </div>
                  )}

                  <div className="pt-2 border-t border-border space-y-2">
                    <p className="text-xs text-muted-foreground">
                      {t.projects.lastUpdated} {getTimeAgo(project.lastUpdated)}
                    </p>
                    <div className="flex gap-2">
                      <Link href={`/dashboard/projects/${project.id}/kanban`} className="flex-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-background bg-transparent"
                        >
                          <LayoutGrid className="h-3 w-3" />
                          {t.projects.viewKanban}
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenCollabModal(project)}
                        className="flex-1 gap-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                      >
                        <Users className="h-3 w-3" />
                        {t.projects.collaborators}
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenModal(project)}
                        disabled={!isOwner}
                        className="flex-1 gap-2 border-foreground text-foreground hover:bg-foreground hover:text-background disabled:opacity-50"
                      >
                        <Pencil className="h-3 w-3" />
                        {t.projects.edit}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProject(project.id)}
                        disabled={!isOwner}
                        className="flex-1 gap-2 border-destructive text-destructive hover:bg-destructive hover:text-background disabled:opacity-50"
                      >
                        <Trash2 className="h-3 w-3" />
                        {t.projects.delete}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      )}

      {/* Project Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-md border border-border bg-background p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{editingProject ? t.projects.editProject : t.projects.newProject}</h2>
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
                <label className="text-sm font-medium">{t.projects.projectName}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.projects.projectName}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.projects.projectDescription}</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={t.projects.projectDescription}
                  rows={3}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.projects.status}</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                  title={t.projects.status}
                >
                  <option value="Active">{t.projects.active}</option>
                  <option value="Building">{t.projects.building}</option>
                  <option value="In Progress">{t.projects.inProgress}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.projects.technologies}</label>
                <input
                  type="text"
                  value={formData.tech}
                  onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                  placeholder="Next.js, React, TypeScript"
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSaveProject} className="flex-1">
                  {editingProject ? t.projects.save : t.projects.create}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCloseModal}
                  className="flex-1 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  {t.projects.cancel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collaborators Modal */}
      {showCollabModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-md border border-border bg-background p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{t.projects.collaborators}</h2>
              <button
                onClick={() => setShowCollabModal(false)}
                className="text-muted-foreground hover:text-foreground"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Owner */}
              <div className="border border-border p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{selectedProject.userId}</p>
                    <p className="text-xs text-muted-foreground">{t.projects.owner}</p>
                  </div>
                </div>
              </div>

              {/* Collaborators List */}
              {selectedProject.collaborators && selectedProject.collaborators.length > 0 ? (
                <div className="space-y-2">
                  {selectedProject.collaborators.map((email) => (
                    <div key={email} className="border border-border p-4 flex items-center justify-between">
                      <p className="text-sm">{email}</p>
                      {selectedProject.userId === getCurrentUser()?.email && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemoveCollaborator(email)}
                          className="border-destructive text-destructive hover:bg-destructive hover:text-background"
                        >
                          {t.projects.removeCollaborator}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-border p-8 text-center">
                  <p className="text-sm text-muted-foreground">{t.projects.noCollaborators}</p>
                </div>
              )}

              {/* Add Collaborator (only for owner) */}
              {selectedProject.userId === getCurrentUser()?.email && (
                <div className="space-y-2 pt-4 border-t border-border">
                  <label className="text-sm font-medium">{t.projects.addCollaborator}</label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={collaboratorEmail}
                      onChange={(e) => setCollaboratorEmail(e.target.value)}
                      placeholder={t.projects.inviteByEmail}
                      className="flex-1 bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                    />
                    <Button onClick={handleAddCollaborator}>{t.projects.invite}</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
