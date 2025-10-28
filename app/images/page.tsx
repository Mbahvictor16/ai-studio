"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { PromptInput } from "@/components/generation/prompt-input"
import { ImageGrid } from "@/components/generation/image-grid"
import { useMutation } from "@tanstack/react-query"
import { generateImage } from "@/lib/actions/client"
import { set } from "date-fns"
import { toast } from "sonner"

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
  const {mutate} = useMutation({
    mutationFn: ({prompt}: {prompt: string}) => generateImage({prompt}),
    onSettled: () => {
      setIsGenerating(false)
    },
    onMutate: () => {
      setIsGenerating(true)
    },
    onSuccess: (response) => {
      setImages(response.data.images)
      toast(response.data.message, {
        duration: 3000,
        style: {
          background: '#115f16',
          color: 'white',
          fontWeight: 'bolder'
        }
      })
    },
    onError: () => {
      toast('Error', {
        description: 'Failed to generate image',
        duration: 3000,
      })
    }

  })

  const handleGenerate = (prompt: string) => {
    mutate({
      prompt
    })
  }

  const handleLike = (id: string) => {
    setImages((prev) => prev.map((img) => (img.id === id ? { ...img, liked: !img.liked } : img)))
  }

  const handleDownload = (id: string) => {
    const image = images.find((img) => img.id === id)
    if (image) {
      // Create download link
      const link = document.createElement("a")
      const byte = atob(image.url)
      const array = []
      for (let i = 0; i < byte.length; i++) {
        array.push(byte.charCodeAt(i))
      }
      const blob = new Blob([new Uint8Array(array)], {type: "image/jpeg"})
      link.href = URL.createObjectURL(blob)
      link.download = `ai-image-${id}.jpg`
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
