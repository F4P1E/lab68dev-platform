"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getCurrentUser } from "@/lib/auth"
import { getTranslations, getUserLanguage } from "@/lib/i18n"
import { Plus, Trash2, CalendarIcon, Clock, X } from "lucide-react"

interface Meeting {
  id: string
  userId: string
  title: string
  description: string
  date: string
  time: string
  duration: number
  createdAt: string
}

export default function MeetingPage() {
  const router = useRouter()
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    duration: 30,
  })
  const [language, setLanguage] = useState(getUserLanguage())
  const t = getTranslations(language).meeting

  useEffect(() => {
    const user = getCurrentUser()
    if (!user) {
      router.push("/login")
      return
    }

    // Load meetings from localStorage
    const storedMeetings = localStorage.getItem("lab68_meetings")
    if (storedMeetings) {
      const allMeetings: Meeting[] = JSON.parse(storedMeetings)
      setMeetings(allMeetings.filter((meeting) => meeting.userId === user.id))
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

    const newMeeting: Meeting = {
      id: crypto.randomUUID(),
      userId: user.id,
      title: formData.title,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      duration: formData.duration,
      createdAt: new Date().toISOString(),
    }

    const storedMeetings = localStorage.getItem("lab68_meetings")
    const allMeetings: Meeting[] = storedMeetings ? JSON.parse(storedMeetings) : []
    allMeetings.push(newMeeting)
    localStorage.setItem("lab68_meetings", JSON.stringify(allMeetings))

    setMeetings([...meetings, newMeeting])
    setFormData({ title: "", description: "", date: "", time: "", duration: 30 })
    setShowForm(false)
  }

  const deleteMeeting = (meetingId: string) => {
    const storedMeetings = localStorage.getItem("lab68_meetings")
    if (!storedMeetings) return

    const allMeetings: Meeting[] = JSON.parse(storedMeetings)
    const filteredMeetings = allMeetings.filter((m) => m.id !== meetingId)
    localStorage.setItem("lab68_meetings", JSON.stringify(filteredMeetings))
    setMeetings(meetings.filter((m) => m.id !== meetingId))
  }

  const isPastMeeting = (date: string, time: string) => {
    const meetingDateTime = new Date(`${date}T${time}`)
    return meetingDateTime < new Date()
  }

  const upcomingMeetings = meetings
    .filter((m) => !isPastMeeting(m.date, m.time))
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`)
      const dateB = new Date(`${b.date}T${b.time}`)
      return dateA.getTime() - dateB.getTime()
    })

  const pastMeetings = meetings
    .filter((m) => isPastMeeting(m.date, m.time))
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`)
      const dateB = new Date(`${b.date}T${b.time}`)
      return dateB.getTime() - dateA.getTime()
    })

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between border-b border-border pb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="h-4 w-4" />
          {t.scheduleMeeting}
        </Button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-md border border-border bg-background p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{t.scheduleMeeting}</h2>
              <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.meetingTitle}</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder={t.meetingTitle}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.meetingDescription}</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={t.meetingDescription}
                  rows={3}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.date}</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.time}</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t.duration} ({t.minutes})
                </label>
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: Number.parseInt(e.target.value) })}
                  className="w-full bg-card border border-border px-4 py-2 text-sm focus:outline-none focus:border-primary"
                  min="15"
                  step="15"
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  {t.schedule}
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

      {meetings.length === 0 ? (
        <div className="border border-border p-12 text-center space-y-4">
          <Plus className="h-12 w-12 mx-auto text-muted-foreground" />
          <div>
            <h3 className="text-xl font-bold mb-2">{t.noMeetings}</h3>
            <p className="text-muted-foreground">{t.startScheduling}</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {upcomingMeetings.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b border-border pb-4">
                {t.upcoming} ({upcomingMeetings.length})
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {upcomingMeetings.map((meeting) => (
                  <Card key={meeting.id} className="border-border p-6 bg-card hover:border-primary transition-colors">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-balance flex-1">{meeting.title}</h3>
                        <div className="flex items-center gap-1 text-xs border border-primary text-primary px-2 py-1">
                          <Clock className="h-3 w-3" />
                          <span>{meeting.duration}m</span>
                        </div>
                      </div>

                      {meeting.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">{meeting.description}</p>
                      )}

                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1 border border-border px-2 py-1">
                          <CalendarIcon className="h-3 w-3" />
                          {new Date(meeting.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1 border border-border px-2 py-1">
                          <Clock className="h-3 w-3" />
                          {meeting.time}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteMeeting(meeting.id)}
                          className="w-full gap-2 border-destructive text-destructive hover:bg-destructive hover:text-background"
                        >
                          <Trash2 className="h-3 w-3" />
                          {t.cancel}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {pastMeetings.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b border-border pb-4">
                {t.past} ({pastMeetings.length})
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {pastMeetings.map((meeting) => (
                  <Card
                    key={meeting.id}
                    className="border-border p-6 bg-card hover:border-primary transition-colors opacity-60"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-balance flex-1">{meeting.title}</h3>
                        <div className="flex items-center gap-1 text-xs border border-border text-muted-foreground px-2 py-1">
                          <Clock className="h-3 w-3" />
                          <span>{meeting.duration}m</span>
                        </div>
                      </div>

                      {meeting.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">{meeting.description}</p>
                      )}

                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1 border border-border px-2 py-1">
                          <CalendarIcon className="h-3 w-3" />
                          {new Date(meeting.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1 border border-border px-2 py-1">
                          <Clock className="h-3 w-3" />
                          {meeting.time}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteMeeting(meeting.id)}
                          className="w-full gap-2 border-destructive text-destructive hover:bg-destructive hover:text-background"
                        >
                          <Trash2 className="h-3 w-3" />
                          {t.delete}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
