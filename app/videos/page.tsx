"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { PromptInput } from "@/components/generation/prompt-input"
import { VideoPlayer } from "@/components/generation/video-player"

interface GeneratedVideo {
  id: string
  url: string
  thumbnail: string
  prompt: string
  duration: number
  timestamp: Date
  liked: boolean
}

export default function VideosPage() {
  const [videos, setVideos] = useState<GeneratedVideo[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async (prompt: string, settings: any) => {
    setIsGenerating(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 5000))

    // Generate mock video
    const newVideo: GeneratedVideo = {
      id: `vid-${Date.now()}`,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: `/placeholder.svg?height=360&width=640&query=${encodeURIComponent(prompt)}`,
      prompt,
      duration: 30,
      timestamp: new Date(),
      liked: false,
    }

    setVideos((prev) => [newVideo, ...prev])
    setIsGenerating(false)
  }

  const handleLike = (id: string) => {
    setVideos((prev) => prev.map((vid) => (vid.id === id ? { ...vid, liked: !vid.liked } : vid)))
  }

  const handleDownload = (id: string) => {
    const video = videos.find((vid) => vid.id === id)
    if (video) {
      // Create download link
      const link = document.createElement("a")
      link.href = video.url
      link.download = `ai-video-${id}.mp4`
      link.click()
    }
  }

  const handleShare = (id: string) => {
    const video = videos.find((vid) => vid.id === id)
    if (video && navigator.share) {
      navigator.share({
        title: "AI Generated Video",
        text: video.prompt,
        url: video.url,
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className="gradient-text">AI Video Generator</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Create dynamic videos from text prompts or transform images into motion
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <PromptInput
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
                placeholder="Describe the video you want to create... e.g., 'A time-lapse of a flower blooming in a garden with morning sunlight filtering through leaves'"
                type="video"
              />
            </div>

            <div className="lg:col-span-2">
              <VideoPlayer
                videos={videos}
                isLoading={isGenerating}
                onLike={handleLike}
                onDownload={handleDownload}
                onShare={handleShare}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
