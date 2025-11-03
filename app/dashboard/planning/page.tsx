"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getCurrentUser } from "@/lib/auth"
import { getTranslations, getUserLanguage } from "@/lib/i18n"
import { Plus, Trash2, CalendarIcon, X, CheckCircle2, Clock, Circle } from "lucide-react"

interface Milestone {
  id: string
  name: string
  date: string
}

interface Plan {
  id: string
  userId: string
  name: string
  description: string
  startDate: string
  endDate: string
  status: "not-started" | "in-progress" | "completed"
  milestones: Milestone[]
  createdAt: string
}

export default function PlanningPage() {
  const router = useRouter()
  const [plans, setPlans] = useState<Plan[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "not-started" as "not-started" | "in-progress" | "completed",
  })
  const [language, setLanguage] = useState(getUserLanguage())
  const t = getTranslations(language).planning

  useEffect(() => {
    const user = getCurrentUser()
    if (!user) {
      router.push("/login")
      return
    }

    // Load plans from localStorage
    const storedPlans = localStorage.getItem("lab68_plans")
    if (storedPlans) {
      const allPlans: Plan[] = JSON.parse(storedPlans)
      setPlans(allPlans.filter((plan) => plan.userId === user.id))
    }

    // Listen for language changes
    const handleStorageChange = () => {
      setLanguage(getUserLanguage())
    }
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const user = getCurrentUser()
    if (!user) return

    const newPlan: Plan = {
      id: crypto.randomUUID(),
      userId: user.id,
      name: formData.name,
      description: formData.description,
      startDate: formData.startDate,
      endDate: formData.endDate,
      status: formData.status,
      milestones: [],
      createdAt: new Date().toISOString(),
    }

    const storedPlans = localStorage.getItem("lab68_plans")
    const allPlans: Plan[] = storedPlans ? JSON.parse(storedPlans) : []
    allPlans.push(newPlan)
    localStorage.setItem("lab68_plans", JSON.stringify(allPlans))

    setPlans([...plans, newPlan])
    setFormData({ name: "", description: "", startDate: "", endDate: "", status: "not-started" })
    setShowForm(false)
  }

  const deletePlan = (planId: string) => {
    const storedPlans = localStorage.getItem("lab68_plans")
    if (!storedPlans) return

    const allPlans: Plan[] = JSON.parse(storedPlans)
    const filteredPlans = allPlans.filter((p) => p.id !== planId)
    localStorage.setItem("lab68_plans", JSON.stringify(filteredPlans))
    setPlans(plans.filter((p) => p.id !== planId))
  }

  const updatePlanStatus = (planId: string, status: "not-started" | "in-progress" | "completed") => {
    const storedPlans = localStorage.getItem("lab68_plans")
    if (!storedPlans) return

    const allPlans: Plan[] = JSON.parse(storedPlans)
    const planIndex = allPlans.findIndex((p) => p.id === planId)
    if (planIndex !== -1) {
      allPlans[planIndex].status = status
      localStorage.setItem("lab68_plans", JSON.stringify(allPlans))
      setPlans(plans.map((p) => (p.id === planId ? allPlans[planIndex] : p)))
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-500"
      case "in-progress":
        return "text-yellow-500"
      case "not-started":
        return "text-muted-foreground"
      default:
        return "text-muted-foreground"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return t.completed
      case "in-progress":
        return t.inProgress
      case "not-started":
        return t.notStarted
      default:
        return status
    }
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between border-b border-border pb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="h-4 w-4" />
          {t.createPlan}
        </Button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-md border border-border bg-background p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{t.createPlan}</h2>
              <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.planName}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.planName}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.planDescription}</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={t.planDescription}
                  rows={3}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.startDate}</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.endDate}</label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.status}</label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value as "not-started" | "in-progress" | "completed" })
                  }
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                >
                  <option value="not-started">{t.notStarted}</option>
                  <option value="in-progress">{t.inProgress}</option>
                  <option value="completed">{t.completed}</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  {t.create}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  {t.cancel}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {plans.length === 0 ? (
        <div className="border border-border p-12 text-center space-y-4">
          <Plus className="h-12 w-12 mx-auto text-muted-foreground" />
          <div>
            <h3 className="text-xl font-bold mb-2">{t.noPlans}</h3>
            <p className="text-muted-foreground">{t.startPlanning}</p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => {
            const getStatusIcon = () => {
              switch (plan.status) {
                case "completed":
                  return <CheckCircle2 className="h-4 w-4" />
                case "in-progress":
                  return <Clock className="h-4 w-4" />
                case "not-started":
                  return <Circle className="h-4 w-4" />
                default:
                  return <Circle className="h-4 w-4" />
              }
            }

            return (
              <Card key={plan.id} className="border-border p-6 bg-card hover:border-primary transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-balance flex-1">{plan.name}</h3>
                    <div className="flex items-center gap-1 text-xs border border-primary text-primary px-2 py-1">
                      {getStatusIcon()}
                      <span className="uppercase">{getStatusLabel(plan.status)}</span>
                    </div>
                  </div>

                  {plan.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                  )}

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarIcon className="h-3 w-3" />
                    <span>
                      {new Date(plan.startDate).toLocaleDateString()} - {new Date(plan.endDate).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-border space-y-2">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updatePlanStatus(plan.id, "not-started")}
                        className={`flex-1 text-xs ${
                          plan.status === "not-started"
                            ? "border-primary bg-primary text-background"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {t.notStarted}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updatePlanStatus(plan.id, "in-progress")}
                        className={`flex-1 text-xs ${
                          plan.status === "in-progress"
                            ? "border-primary bg-primary text-background"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {t.inProgress}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updatePlanStatus(plan.id, "completed")}
                        className={`flex-1 text-xs ${
                          plan.status === "completed"
                            ? "border-primary bg-primary text-background"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {t.completed}
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deletePlan(plan.id)}
                      className="w-full gap-2 border-destructive text-destructive hover:bg-destructive hover:text-background"
                    >
                      <Trash2 className="h-3 w-3" />
                      {t.delete}
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
