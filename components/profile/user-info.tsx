"use client"

import { useUserProfile } from "@/hooks/use-user"
import { Button } from "@/components/ui/button"
import { Camera, Edit3, MapPin, Calendar } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export function UserInfo() {
  const { data, isPending, isSuccess, isFetched } = useUserProfile()

  if (isPending) {
    return (
      <div className="glass-card">
        <div className="flex flex-col items-center space-y-4">
          <Skeleton className="w-24 h-24 rounded-full" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 p-0.5">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-2xl font-bold">
              {data.user?.email?.charAt(0).toUpperCase()}
            </div>
          </div>
          <button className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Camera className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="text-center space-y-2 text-white">
          <h2 className="text-xl font-bold font-sans text-white">{data.user?.firstName} {data.user?.lastName}</h2>
          <p>{data.user?.email}</p>

          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Joined Dec 2024</span>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          AI enthusiast exploring the boundaries of creative generation. Passionate about turning ideas into visual
          reality.
        </p>

        <Button variant="outline" className="w-full glass border-primary/20 hover:border-primary/40 bg-transparent text-white">
          <Edit3 className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>
    </div>
  )
}
