"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Download, Heart, Share2, Volume2, VolumeX, Maximize2 } from "lucide-react"
import { VideoPlayerSkeleton } from "@/components/ui/loading-skeleton"
import { ErrorBoundary } from "@/components/ui/error-boundary"

interface GeneratedVideo {
  id: string
  url: string
  thumbnail: string
  prompt: string
  duration: number
  timestamp: Date
  liked: boolean
}

interface VideoPlayerProps {
  videos: GeneratedVideo[]
  isLoading: boolean
  onLike: (id: string) => void
  onDownload: (id: string) => void
  onShare: (id: string) => void
}

export function VideoPlayer({ videos, isLoading, onLike, onDownload, onShare }: VideoPlayerProps) {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set())
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({})

  const togglePlay = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video) return

    if (playingVideo === videoId) {
      video.pause()
      setPlayingVideo(null)
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach((v) => v.pause())
      video.play()
      setPlayingVideo(videoId)
    }
  }

  const toggleMute = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video) return

    video.muted = !video.muted
    setMutedVideos((prev) => {
      const newSet = new Set(prev)
      if (video.muted) {
        newSet.add(videoId)
      } else {
        newSet.delete(videoId)
      }
      return newSet
    })
  }

  if (isLoading) {
    return <VideoPlayerSkeleton />
  }

  if (videos.length === 0) {
    return (
      <div className="glass-card p-12 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Play className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No videos yet</h3>
        <p className="text-white/60">Enter a prompt above to generate your first AI video</p>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Generated Videos ({videos.length})</h3>
          <Button variant="outline" size="sm" className="glass border-white/20 hover:bg-white/10 bg-transparent">
            Download All
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="glass-card p-4 group hover:bg-white/10 transition-all duration-300">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[video.id] = el
                  }}
                  src={video.url}
                  poster={video.thumbnail}
                  className="w-full h-full object-cover"
                  onEnded={() => setPlayingVideo(null)}
                  muted={mutedVideos.has(video.id)}
                  preload="metadata"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="w-16 h-16 rounded-full bg-black/50 hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={() => togglePlay(video.id)}
                  >
                    {playingVideo === video.id ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </Button>
                </div>

                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 bg-black/50 hover:bg-black/70"
                      onClick={() => toggleMute(video.id)}
                    >
                      {mutedVideos.has(video.id) ? (
                        <VolumeX className="w-4 h-4 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-white" />
                      )}
                    </Button>
                    <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">
                      {Math.floor(video.duration / 60)}:{(video.duration % 60).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <Button size="sm" variant="ghost" className="w-8 h-8 p-0 bg-black/50 hover:bg-black/70">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-white/80 line-clamp-2">{video.prompt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50">{video.timestamp.toLocaleDateString()}</span>
                  <div className="flex items-center gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-white/10"
                      onClick={() => onLike(video.id)}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          video.liked ? "fill-red-500 text-red-500" : "text-white/60"
                        } transition-colors`}
                      />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-white/10"
                      onClick={() => onShare(video.id)}
                    >
                      <Share2 className="w-4 h-4 text-white/60" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-white/10"
                      onClick={() => onDownload(video.id)}
                    >
                      <Download className="w-4 h-4 text-white/60" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  )
}
