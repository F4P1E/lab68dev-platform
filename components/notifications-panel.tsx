"use client"

import { useState, useEffect } from "react"
import { Bell, X, Calendar, Clock } from "lucide-react"
import { getCurrentUser } from "@/lib/auth"
import { getTranslations, getUserLanguage } from "@/lib/i18n"

interface Meeting {
  id: string
  userId: string
  title: string
  date: string
  time: string
  duration: number
}

export function NotificationsPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [upcomingMeetings, setUpcomingMeetings] = useState<Meeting[]>([])
  const [language, setLanguage] = useState(getUserLanguage())
  const t = getTranslations(language)

  useEffect(() => {
    const user = getCurrentUser()
    if (!user) return

    const checkUpcomingMeetings = () => {
      const storedMeetings = localStorage.getItem("lab68_meetings")
      if (!storedMeetings) return

      const allMeetings: Meeting[] = JSON.parse(storedMeetings)
      const userMeetings = allMeetings.filter((m) => m.userId === user.id)

      const now = new Date()
      const next24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000)

      const upcoming = userMeetings.filter((meeting) => {
        const meetingDateTime = new Date(`${meeting.date}T${meeting.time}`)
        return meetingDateTime > now && meetingDateTime <= next24Hours
      })

      setUpcomingMeetings(upcoming)
    }

    checkUpcomingMeetings()
    const interval = setInterval(checkUpcomingMeetings, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  const formatTimeUntil = (date: string, time: string) => {
    const meetingDateTime = new Date(`${date}T${time}`)
    const now = new Date()
    const diff = meetingDateTime.getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (hours > 0) {
      return `${hours}h ${minutes}m`
    }
    return `${minutes}m`
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 border border-border hover:border-primary transition-colors"
      >
        <Bell className="h-5 w-5" />
        {upcomingMeetings.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 flex items-center justify-center">
            {upcomingMeetings.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-card border border-border shadow-lg z-50">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-bold">{t.notifications?.title || "Notifications"}</h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-1 hover:bg-secondary"
              title="Close notifications"
              aria-label="Close notifications"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {upcomingMeetings.length === 0 ? (
              <div className="p-6 text-center text-muted-foreground">
                <p>{t.notifications?.noUpcoming || "No upcoming meetings"}</p>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="p-4 hover:bg-secondary transition-colors">
                    <h4 className="font-medium mb-2">{meeting.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(meeting.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {meeting.time}
                      </div>
                    </div>
                    <p className="text-xs text-primary mt-2">
                      {t.notifications?.startsIn || "Starts in"} {formatTimeUntil(meeting.date, meeting.time)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
