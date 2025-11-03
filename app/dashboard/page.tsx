"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Activity, GitBranch, Users, Zap } from "lucide-react"
import { getCurrentUser, type User } from "@/lib/auth"
import { getUserLanguage, getTranslations, type Language } from "@/lib/i18n"

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [lang, setLang] = useState<Language>("en")
  const router = useRouter()

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      router.push("/login")
    } else {
      setUser(currentUser)
      const userLang = (currentUser.language as Language) || getUserLanguage()
      setLang(userLang)
    }
  }, [router])

  const t = getTranslations(lang)

  const stats = [
    { label: t.dashboard.activeUsers, value: "0", icon: Users, change: "+0%" },
    { label: t.dashboard.totalBuilds, value: "0", icon: GitBranch, change: "+0%" },
    { label: t.dashboard.repositories, value: "0", icon: Activity, change: "+0" },
    { label: t.dashboard.apiCalls, value: "0", icon: Zap, change: "+0%" },
  ]

  const recentProjects: Array<{ name: string; status: string; updated: string }> = []

  if (!user) {
    return (
      <div className="p-8 flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">{t.dashboard.loading}</p>
      </div>
    )
  }

  return (
    <div className="p-8 space-y-8">
      {/* Welcome Header */}
      <div className="border-b border-border pb-8">
        <h1 className="text-4xl font-bold mb-2">
          {t.dashboard.welcomeBack}, {user.name}
        </h1>
        <p className="text-muted-foreground">{t.dashboard.happeningToday}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="border-border p-6 bg-card">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs text-primary">{stat.change}</p>
                </div>
                <Icon className="h-8 w-8 text-muted-foreground" />
              </div>
            </Card>
          )
        })}
      </div>

      {/* Recent Projects */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{t.dashboard.recentProjects}</h2>
        {recentProjects.length === 0 ? (
          <div className="border border-border p-8 text-center">
            <p className="text-muted-foreground">No projects yet. Start building!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {recentProjects.map((project) => (
              <div key={project.name} className="border border-border p-4 hover:border-primary transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.updated}</p>
                  </div>
                  <span className="text-xs border border-primary text-primary px-3 py-1">{project.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* AI Assistant Preview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{t.dashboard.aiAssistant}</h2>
        <div className="border border-border p-6 bg-card space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary mt-2" />
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">System</p>
              <p className="text-sm text-muted-foreground">How can I assist you with your development today?</p>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder={t.dashboard.askAnything}
              className="flex-1 bg-background border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
              {t.dashboard.send}
            </button>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{t.dashboard.systemStatus}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border border-border p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary" />
              <p className="text-sm font-medium">API Status</p>
            </div>
            <p className="text-xs text-muted-foreground">{t.dashboard.allSystemsOperational}</p>
          </div>
          <div className="border border-border p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary" />
              <p className="text-sm font-medium">Build Queue</p>
            </div>
            <p className="text-xs text-muted-foreground">0 {t.dashboard.buildsInProgress}</p>
          </div>
          <div className="border border-border p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary" />
              <p className="text-sm font-medium">Database</p>
            </div>
            <p className="text-xs text-muted-foreground">{t.dashboard.connectedAndHealthy}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
