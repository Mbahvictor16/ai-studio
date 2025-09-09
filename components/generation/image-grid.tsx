"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Heart, Share2, Maximize2 } from "lucide-react"
import { ImageGridSkeleton } from "@/components/ui/loading-skeleton"
import { ErrorBoundary } from "@/components/ui/error-boundary"

interface GeneratedImage {
  id: string
  url: string
  prompt: string
  timestamp: Date
  liked: boolean
}

interface ImageGridProps {
  images: GeneratedImage[]
  isLoading: boolean
  onLike: (id: string) => void
  onDownload: (id: string) => void
  onShare: (id: string) => void
}

export function ImageGrid({ images, isLoading, onLike, onDownload, onShare }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (isLoading) {
    return <ImageGridSkeleton />
  }

  if (images.length === 0) {
    return (
      <div className="glass-card p-12 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Maximize2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No images yet</h3>
        <p className="text-white/60">Enter a prompt above to generate your first AI image</p>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Generated Images ({images.length})</h3>
          <Button variant="outline" size="sm" className="glass border-white/20 hover:bg-white/10 bg-transparent">
            Download All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, id) => (
            <div key={id} className="glass-card p-2 group hover:bg-white/10 transition-all duration-300">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                <img
                  src={`data:image/jpeg;charset=utf-8;base64,${image.url}`}
                  alt={""}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-8 h-8 p-0 bg-black/50 hover:bg-black/70"
                    // onClick={() => setSelectedImage(image.id)}
                  >
                    <Maximize2 className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                {/* <p className="text-sm text-white/80 line-clamp-2">{image.prompt}</p> */}
                <div className="flex items-center justify-between">
                  {/* <span className="text-xs text-white/50">{image.timestamp.toLocaleDateString()}</span> */}
                  <div className="flex items-center gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-white/10"
                      // onClick={() => onLike(image.id)}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          image.liked ? "fill-red-500 text-red-500" : "text-white/60"
                        } transition-colors`}
                      />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-white/10"
                      // onClick={() => onShare(image.id)}
                    >
                      <Share2 className="w-4 h-4 text-white/60" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-white/10"
                      onClick={() => onDownload(image.id)}
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
