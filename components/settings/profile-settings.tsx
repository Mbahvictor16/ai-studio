"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, MapPin, Save, Upload } from "lucide-react"

interface ProfileData {
  name: string
  email: string
  bio: string
  location: string
  website: string
  joinDate: string
  avatar: string
}

export function ProfileSettings() {
  const [profile, setProfile] = useState<ProfileData>({
    name: "Alex Johnson",
    email: "alex@example.com",
    bio: "Creative director and AI enthusiast. Love exploring the intersection of technology and art.",
    location: "San Francisco, CA",
    website: "https://alexjohnson.dev",
    joinDate: "January 2024",
    avatar: "/professional-headshot.png",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }))
    setHasChanges(true)
  }

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setHasChanges(false)
  }

  const handleAvatarUpload = () => {
    // Simulate file upload
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result as string
          handleInputChange("avatar", result)
        }
        reader.readAsDataURL(file)
      }
    }
    input.click()
  }

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-5 h-5 text-violet-400" />
        <h3 className="text-lg font-semibold text-white">Profile Information</h3>
      </div>

      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <img
            src={profile.avatar || "/placeholder.svg"}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
          />
          <Button
            size="sm"
            variant="ghost"
            className="absolute -bottom-2 -right-2 w-8 h-8 p-0 bg-violet-500 hover:bg-violet-600 rounded-full"
            onClick={handleAvatarUpload}
          >
            <Upload className="w-4 h-4 text-white" />
          </Button>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{profile.name}</h4>
          <p className="text-white/60 text-sm">Member since {profile.joinDate}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white/90">
            Full Name
          </Label>
          <Input
            id="name"
            value={profile.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="glass border-white/20 focus:border-violet-400 text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/90">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="glass border-white/20 focus:border-violet-400 text-white pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className="text-white/90">
            Location
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input
              id="location"
              value={profile.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              className="glass border-white/20 focus:border-violet-400 text-white pl-10"
              placeholder="City, Country"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="website" className="text-white/90">
            Website
          </Label>
          <Input
            id="website"
            type="url"
            value={profile.website}
            onChange={(e) => handleInputChange("website", e.target.value)}
            className="glass border-white/20 focus:border-violet-400 text-white"
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio" className="text-white/90">
          Bio
        </Label>
        <Textarea
          id="bio"
          value={profile.bio}
          onChange={(e) => handleInputChange("bio", e.target.value)}
          className="glass border-white/20 focus:border-violet-400 text-white min-h-[100px] resize-none"
          placeholder="Tell us about yourself..."
        />
        <p className="text-xs text-white/50">{profile.bio.length}/500 characters</p>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={!hasChanges || isLoading}
          className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 transition-all duration-300"
        >
          <Save className="w-4 h-4 mr-2" />
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  )
}
