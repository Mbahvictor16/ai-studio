"use client"

import { Progress } from "@/components/ui/progress"
import { Zap, ImageIcon, Video, Clock, TrendingUp } from "lucide-react"

const stats = [
  { label: "Images Generated", value: 1247, max: 2000, icon: ImageIcon, color: "from-blue-400 to-cyan-400" },
  { label: "Videos Created", value: 89, max: 100, icon: Video, color: "from-purple-400 to-pink-400" },
  { label: "Hours Saved", value: 156, max: 200, icon: Clock, color: "from-green-400 to-emerald-400" },
  { label: "Credits Used", value: 750, max: 1000, icon: Zap, color: "from-orange-400 to-red-400" },
]

export function UsageStats() {
  return (
    <div className="glass-card text-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold font-sans">Usage Statistics</h3>
        <TrendingUp className="w-5 h-5 text-white" />
      </div>

      <div className="space-y-6">
        {stats.map((stat, index) => {
          const percentage = (stat.value / stat.max) * 100
          const Icon = stat.icon

          return (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-20`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{stat.label}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {stat.value.toLocaleString()} / {stat.max.toLocaleString()}
                </span>
              </div>

              <Progress value={percentage} className={`h-2`} indicatorClassName={`bg-gradient-to-r ${stat.color}`} />

              <div className="text-xs text-muted-foreground text-right">{percentage.toFixed(1)}% used</div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">Need more credits?</h4>
            <p className="text-xs text-muted-foreground">Upgrade to Pro for unlimited generations</p>
          </div>
          <button className="text-xs text-white hover:underline">Upgrade</button>
        </div>
      </div>
    </div>
  )
}
