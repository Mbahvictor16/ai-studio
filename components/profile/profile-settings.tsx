"use client"

import { Button } from "@/components/ui/button"
import { Settings, Bell, Shield, CreditCard, LogOut, ChevronRight } from "lucide-react"

const settingsItems = [
  {
    icon: Bell,
    label: "Notifications",
    description: "Manage your notification preferences",
    action: "Configure",
  },
  {
    icon: Shield,
    label: "Privacy & Security",
    description: "Control your privacy settings",
    action: "Manage",
  },
  {
    icon: CreditCard,
    label: "Billing & Subscription",
    description: "View your subscription details",
    action: "View",
  },
]

export function ProfileSettings() {
  return (
    <div className="glass-card">
      <div className="flex items-center justify-between mb-6 text-white">
        <h3 className="text-lg font-semibold font-sans">Profile Settings</h3>
        <Settings className="w-5 h-5 text-primary text-white" />
      </div>

      <div className="space-y-3 text-white">
        {settingsItems.map((item, index) => {
          const Icon = item.icon

          return (
            <button
              key={index}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-4 h-4 text-primary text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs text-white">{item.action}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </button>
          )
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <Button
          variant="outline"
          className="w-full glass border-destructive/20 hover:border-destructive/40 text-destructive hover:text-destructive bg-transparent"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
