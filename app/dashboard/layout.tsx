import type React from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <main className="ml-64 min-h-screen border-l border-border bg-background">{children}</main>
    </div>
  )
}
