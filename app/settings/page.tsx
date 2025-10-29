"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ProfileSettings } from "@/components/settings/profile-settings"
import { ApiSettings } from "@/components/settings/api-settings"
import { ThemeSettings } from "@/components/settings/theme-settings"
import { User, Key, Palette, Shield, CreditCard, Bell } from "lucide-react"

const settingsTabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "api", label: "API Keys", icon: Key },
  { id: "theme", label: "Theme", icon: Palette },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "notifications", label: "Notifications", icon: Bell },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />
      case "api":
        return <ApiSettings />
      case "theme":
        return <ThemeSettings />
      case "security":
        return (
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-violet-400" />
              <h3 className="text-lg font-semibold text-white">Security Settings</h3>
            </div>
            <p className="text-white/60">Security settings coming soon...</p>
          </div>
        )
      case "billing":
        return (
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-5 h-5 text-violet-400" />
              <h3 className="text-lg font-semibold text-white">Billing & Usage</h3>
            </div>
            <p className="text-white/60">Billing settings coming soon...</p>
          </div>
        )
      case "notifications":
        return (
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-violet-400" />
              <h3 className="text-lg font-semibold text-white">Notification Preferences</h3>
            </div>
            <p className="text-white/60">Notification settings coming soon...</p>
          </div>
        )
      default:
        return <ProfileSettings />
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className="gradient-text">Settings</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Manage your account, preferences, and Butterfly configuration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="glass-card p-4 space-y-2">
                {settingsTabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-white border border-violet-500/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-3">{renderTabContent()}</div>
          </div>
        </div>
      </main>
    </div>
  )
}
