"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Palette, Monitor, Sun, Moon } from "lucide-react"

interface ThemeSettings {
  mode: "light" | "dark" | "system"
  accentColor: string
  fontSize: "small" | "medium" | "large"
  animations: boolean
  compactMode: boolean
}

export function ThemeSettings() {
  const [settings, setSettings] = useState<ThemeSettings>({
    mode: "dark",
    accentColor: "violet",
    fontSize: "medium",
    animations: true,
    compactMode: false,
  })
  const [hasChanges, setHasChanges] = useState(false)

  const handleSettingChange = <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
    setHasChanges(true)
  }

  const accentColors = [
    { name: "Violet", value: "violet", color: "bg-violet-500" },
    { name: "Blue", value: "blue", color: "bg-blue-500" },
    { name: "Cyan", value: "cyan", color: "bg-cyan-500" },
    { name: "Green", value: "green", color: "bg-green-500" },
    { name: "Orange", value: "orange", color: "bg-orange-500" },
    { name: "Pink", value: "pink", color: "bg-pink-500" },
  ]

  const handleSave = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setHasChanges(false)
  }

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Palette className="w-5 h-5 text-violet-400" />
        <h3 className="text-lg font-semibold text-white">Theme & Appearance</h3>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="text-white/90">Theme Mode</Label>
          <div className="grid grid-cols-3 gap-3">
            <Button
              variant={settings.mode === "light" ? "default" : "outline"}
              className={`glass border-white/20 justify-start ${
                settings.mode === "light"
                  ? "bg-gradient-to-r from-violet-500 to-cyan-500"
                  : "hover:bg-white/10 bg-transparent"
              }`}
              onClick={() => handleSettingChange("mode", "light")}
            >
              <Sun className="w-4 h-4 mr-2" />
              Light
            </Button>
            <Button
              variant={settings.mode === "dark" ? "default" : "outline"}
              className={`glass border-white/20 justify-start ${
                settings.mode === "dark"
                  ? "bg-gradient-to-r from-violet-500 to-cyan-500"
                  : "hover:bg-white/10 bg-transparent"
              }`}
              onClick={() => handleSettingChange("mode", "dark")}
            >
              <Moon className="w-4 h-4 mr-2" />
              Dark
            </Button>
            <Button
              variant={settings.mode === "system" ? "default" : "outline"}
              className={`glass border-white/20 justify-start ${
                settings.mode === "system"
                  ? "bg-gradient-to-r from-violet-500 to-cyan-500"
                  : "hover:bg-white/10 bg-transparent"
              }`}
              onClick={() => handleSettingChange("mode", "system")}
            >
              <Monitor className="w-4 h-4 mr-2" />
              System
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-white/90">Accent Color</Label>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {accentColors.map((color) => (
              <Button
                key={color.value}
                variant="outline"
                className={`glass border-white/20 justify-center p-3 ${
                  settings.accentColor === color.value ? "ring-2 ring-white/50" : "hover:bg-white/10"
                } bg-transparent`}
                onClick={() => handleSettingChange("accentColor", color.value)}
              >
                <div className={`w-6 h-6 rounded-full ${color.color}`} />
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-white/90">Font Size</Label>
          <div className="grid grid-cols-3 gap-3">
            {(["small", "medium", "large"] as const).map((size) => (
              <Button
                key={size}
                variant={settings.fontSize === size ? "default" : "outline"}
                className={`glass border-white/20 justify-center ${
                  settings.fontSize === size
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500"
                    : "hover:bg-white/10 bg-transparent"
                }`}
                onClick={() => handleSettingChange("fontSize", size)}
              >
                <span className={size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base"}>
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </span>
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-white/90">Interface Options</Label>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 glass rounded-lg border border-white/10 cursor-pointer hover:bg-white/5 transition-colors">
              <div>
                <p className="text-white font-medium">Enable Animations</p>
                <p className="text-white/60 text-sm">Smooth transitions and micro-interactions</p>
              </div>
              <input
                type="checkbox"
                checked={settings.animations}
                onChange={(e) => handleSettingChange("animations", e.target.checked)}
                className="w-5 h-5 rounded border-white/20 bg-transparent"
              />
            </label>

            <label className="flex items-center justify-between p-3 glass rounded-lg border border-white/10 cursor-pointer hover:bg-white/5 transition-colors">
              <div>
                <p className="text-white font-medium">Compact Mode</p>
                <p className="text-white/60 text-sm">Reduce spacing for more content on screen</p>
              </div>
              <input
                type="checkbox"
                checked={settings.compactMode}
                onChange={(e) => handleSettingChange("compactMode", e.target.checked)}
                className="w-5 h-5 rounded border-white/20 bg-transparent"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-white/10">
        <Button
          onClick={handleSave}
          disabled={!hasChanges}
          className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 transition-all duration-300"
        >
          Save Preferences
        </Button>
      </div>
    </div>
  )
}
