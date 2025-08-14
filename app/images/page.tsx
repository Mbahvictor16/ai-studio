"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { PromptInput } from "@/components/generation/prompt-input"
import { ImageGrid } from "@/components/generation/image-grid"

interface GeneratedImage {
  id: string
  url: string
  prompt: string
  timestamp: Date
  liked: boolean
}

export default function ImagesPage() {
  const [images, setImages] = useState<GeneratedImage[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async (prompt: string, settings: any) => {
    setIsGenerating(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Generate mock images
    const newImages: GeneratedImage[] = Array.from({ length: settings.count }, (_, i) => ({
      id: `img-${Date.now()}-${i}`,
      url: `/placeholder.svg?height=512&width=512&query=${encodeURIComponent(prompt)}`,
      prompt,
      timestamp: new Date(),
      liked: false,
    }))

    setImages((prev) => [...newImages, ...prev])
    setIsGenerating(false)
  }

  const handleLike = (id: string) => {
    setImages((prev) => prev.map((img) => (img.id === id ? { ...img, liked: !img.liked } : img)))
  }

  const handleDownload = (id: string) => {
    const image = images.find((img) => img.id === id)
    if (image) {
      // Create download link
      const link = document.createElement("a")
      link.href = image.url
      link.download = `ai-image-${id}.png`
      link.click()
    }
  }

  const handleShare = (id: string) => {
    const image = images.find((img) => img.id === id)
    if (image && navigator.share) {
      navigator.share({
        title: "AI Generated Image",
        text: image.prompt,
        url: image.url,
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
              <span className="gradient-text">AI Image Generator</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Transform your ideas into stunning visuals with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <PromptInput
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
                placeholder="Describe the image you want to create... e.g., 'A majestic dragon soaring through a sunset sky with vibrant orange and purple clouds'"
                type="image"
              />
            </div>

            <div className="lg:col-span-2">
              <ImageGrid
                images={images}
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
