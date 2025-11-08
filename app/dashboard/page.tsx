"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Activity, GitBranch, Users, Zap, FolderKanban, ListTodo, Calendar, MessageSquare, Cloud, CloudRain, Sun, CloudSnow, Wind, Droplets } from "lucide-react"
import { getCurrentUser, type User } from "@/lib/auth"
import { getUserLanguage, getTranslations, type Language } from "@/lib/i18n"
import { 
  getProjects, 
  getTodos, 
  getMilestones,
  getMeetings 
} from "@/lib/database"

type Weather = {
  temp: number
  condition: string
  humidity: number
  windSpeed: number
  location: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [lang, setLang] = useState<Language>("en")
  const [counts, setCounts] = useState({
    projects: 0,
    todos: 0,
    milestones: 0,
    meetings: 0,
  })
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [weather, setWeather] = useState<Weather | null>(null)
  const [weatherLoading, setWeatherLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      router.push("/login")
    } else {
      setUser(currentUser)
      const userLang = (currentUser.language as Language) || getUserLanguage()
      setLang(userLang)
      loadCounts(currentUser.id)
    }
  }, [router])

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Fetch weather data (simulated - you can integrate real API like OpenWeatherMap)
  useEffect(() => {
    async function fetchWeather() {
      setWeatherLoading(true)
      try {
        // Simulated weather data - replace with real API call
        // Example: const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=YourCity&appid=YOUR_API_KEY&units=metric`)
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
        
        const mockWeather: Weather = {
          temp: Math.floor(Math.random() * 15) + 20, // 20-35°C
          condition: ['Sunny', 'Cloudy', 'Rainy', 'Windy'][Math.floor(Math.random() * 4)],
          humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
          windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
          location: 'Your City'
        }
        
        setWeather(mockWeather)
      } catch (error) {
        console.error("Failed to fetch weather:", error)
      } finally {
        setWeatherLoading(false)
      }
    }

    fetchWeather()
    // Update weather every 30 minutes
    const weatherInterval = setInterval(fetchWeather, 1800000)
    return () => clearInterval(weatherInterval)
  }, [])

  async function loadCounts(userId: string) {
    try {
      setLoading(true)
      const [projects, todos, milestones, meetings] = await Promise.all([
        getProjects(userId),
        getTodos(userId),
        getMilestones(userId),
        getMeetings(userId),
      ])

      setCounts({
        projects: projects.length,
        todos: todos.filter(t => t.status !== "done").length, // Only count active todos
        milestones: milestones.filter(m => m.status !== "completed").length, // Only count active milestones
        meetings: meetings.length,
      })
    } catch (error) {
      console.error("Failed to load dashboard counts:", error)
    } finally {
      setLoading(false)
    }
  }

  const t = getTranslations(lang)

  // Format time parts for digital clock
  const formatTimePart = (num: number): string => {
    return num.toString().padStart(2, '0')
  }

  // Get weather icon based on condition
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return Sun
      case 'cloudy':
        return Cloud
      case 'rainy':
        return CloudRain
      case 'snowy':
        return CloudSnow
      case 'windy':
        return Wind
      default:
        return Cloud
    }
  }

  const hours = formatTimePart(currentTime.getHours())
  const minutes = formatTimePart(currentTime.getMinutes())
  const seconds = formatTimePart(currentTime.getSeconds())
  const date = currentTime.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const stats = [
    { label: "Active Projects", value: loading ? "..." : counts.projects.toString(), icon: FolderKanban, change: `${counts.projects} total` },
    { label: "Pending Todos", value: loading ? "..." : counts.todos.toString(), icon: ListTodo, change: "Active tasks" },
    { label: "Active Milestones", value: loading ? "..." : counts.milestones.toString(), icon: GitBranch, change: "In progress" },
    { label: "Upcoming Meetings", value: loading ? "..." : counts.meetings.toString(), icon: Calendar, change: "Scheduled" },
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
      {/* Welcome Header with Digital Clock and Weather */}
      <div className="border-b border-border pb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {t.dashboard.welcomeBack}, {user.name}
            </h1>
            <p className="text-muted-foreground">{t.dashboard.happeningToday}</p>
          </div>
          
          <div className="flex gap-3">
            {/* Animated Digital Clock */}
            <div className="border border-border bg-card p-3 w-[180px]">
              <div className="space-y-2">
                <div className="text-[10px] text-muted-foreground font-medium text-center">
                  Time
                </div>
                <div className="flex items-center justify-center gap-0.5 font-mono">
                  {/* Hours */}
                  <div className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent animate-pulse">
                    {hours}
                  </div>
                  
                  {/* Separator */}
                  <div className="text-2xl font-bold text-primary animate-pulse">:</div>
                  
                  {/* Minutes */}
                  <div className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent animate-pulse">
                    {minutes}
                  </div>
                  
                  {/* Separator */}
                  <div className="text-2xl font-bold text-primary animate-pulse">:</div>
                  
                  {/* Seconds */}
                  <div className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                    {seconds}
                  </div>
                </div>
                
                {/* Date */}
                <div className="text-[10px] text-muted-foreground text-center border-t border-border pt-2">
                  {currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>

            {/* Animated Weather Widget */}
            <div className="border border-border bg-card p-3 w-[180px]">
              {weatherLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin text-primary">
                    <Cloud className="h-5 w-5" />
                  </div>
                </div>
              ) : weather ? (
                <div className="space-y-2">
                  {/* Weather Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[10px] font-medium text-muted-foreground">Weather</h3>
                      <p className="text-[9px] text-muted-foreground/70">{weather.location}</p>
                    </div>
                    <div className="animate-bounce">
                      {(() => {
                        const WeatherIcon = getWeatherIcon(weather.condition)
                        return <WeatherIcon className="h-5 w-5 text-primary" />
                      })()}
                    </div>
                  </div>

                  {/* Temperature */}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                      {weather.temp}°
                    </span>
                    <span className="text-xs text-muted-foreground">C</span>
                  </div>

                  {/* Weather Details */}
                  <div className="flex items-center justify-around pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Droplets className="h-3 w-3 text-primary animate-pulse" />
                      <span className="text-[10px] font-medium">{weather.humidity}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wind className="h-3 w-3 text-primary animate-pulse" />
                      <span className="text-[10px] font-medium">{weather.windSpeed}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-[10px] text-muted-foreground flex items-center justify-center h-full">
                  Weather unavailable
                </div>
              )}
            </div>
          </div>
        </div>
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
