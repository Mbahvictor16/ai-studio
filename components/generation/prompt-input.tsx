"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Wand2, Settings } from "lucide-react"

interface PromptInputProps {
  onGenerate: (prompt: string, settings: GenerationSettings) => void
  isGenerating: boolean
  placeholder: string
  type: "image" | "video"
}

interface GenerationSettings {
  style: string
  aspectRatio: string
  quality: string
  count: number
}

export function PromptInput({ onGenerate, isGenerating, placeholder, type }: PromptInputProps) {
  const [prompt, setPrompt] = useState("")
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [settings, setSettings] = useState<GenerationSettings>({
    style: "photorealistic",
    aspectRatio: "16:9",
    quality: "high",
    count: 4,
  })

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerate(prompt, settings)
    }
  }

  const styleOptions = [
    { value: "photorealistic", label: "Photorealistic" },
    { value: "artistic", label: "Artistic" },
    { value: "anime", label: "Anime" },
    { value: "digital-art", label: "Digital Art" },
    { value: "oil-painting", label: "Oil Painting" },
    { value: "watercolor", label: "Watercolor" },
  ]

  const aspectRatios = [
    { value: "1:1", label: "Square (1:1)" },
    { value: "16:9", label: "Landscape (16:9)" },
    { value: "9:16", label: "Portrait (9:16)" },
    { value: "4:3", label: "Classic (4:3)" },
  ]

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Wand2 className="w-5 h-5 text-violet-400" />
          <h3 className="text-lg font-semibold text-white">Create with AI</h3>
        </div>

        <div className="space-y-2">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={placeholder}
            className="glass border-white/20 focus:border-violet-400 text-white placeholder:text-white/50 min-h-[120px] resize-none"
            disabled={isGenerating}
          />
          <p className="text-xs text-white/60">
            Be descriptive and specific for better results. Include style, mood, colors, and composition details.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-white/70 hover:text-white hover:bg-white/10 w-full sm:w-auto"
          >
            <Settings className="w-4 h-4 mr-2" />
            Advanced Settings
          </Button>

          <div className="flex flex-col items-stretch sm:items-center gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="glass border-white/20 hover:bg-white/10 bg-transparent w-full sm:w-auto"
              disabled={isGenerating}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Enhance Prompt</span>
              <span className="sm:hidden">Enhance</span>
            </Button>
            <Button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 transition-all duration-300 w-full sm:w-auto"
            >
              {isGenerating ? "Generating..." : `Generate ${type === "image" ? "Images" : "Video"}`}
            </Button>
          </div>
        </div>
      </div>

      {showAdvanced && (
        <div className="border-t border-white/10 pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/90">Style</label>
              <select
                value={settings.style}
                onChange={(e) => setSettings({ ...settings, style: e.target.value })}
                className="glass w-full p-2 rounded-lg border border-white/20 focus:border-violet-400 text-white bg-transparent"
                disabled={isGenerating}
              >
                {styleOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/90">Aspect Ratio</label>
              <select
                value={settings.aspectRatio}
                onChange={(e) => setSettings({ ...settings, aspectRatio: e.target.value })}
                className="glass w-full p-2 rounded-lg border border-white/20 focus:border-violet-400 text-white bg-transparent"
                disabled={isGenerating}
              >
                {aspectRatios.map((option) => (
                  <option key={option.value} value={option.value} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/90">Quality</label>
              <select
                value={settings.quality}
                onChange={(e) => setSettings({ ...settings, quality: e.target.value })}
                className="glass w-full p-2 rounded-lg border border-white/20 focus:border-violet-400 text-white bg-transparent"
                disabled={isGenerating}
              >
                <option value="standard" className="bg-slate-800">
                  Standard
                </option>
                <option value="high" className="bg-slate-800">
                  High Quality
                </option>
                <option value="ultra" className="bg-slate-800">
                  Ultra HD
                </option>
              </select>
            </div>

            {type === "image" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Count</label>
                <select
                  value={settings.count}
                  onChange={(e) => setSettings({ ...settings, count: Number.parseInt(e.target.value) })}
                  className="glass w-full p-2 rounded-lg border border-white/20 focus:border-violet-400 text-white bg-transparent"
                  disabled={isGenerating}
                >
                  <option value={1} className="bg-slate-800">
                    1 Image
                  </option>
                  <option value={2} className="bg-slate-800">
                    2 Images
                  </option>
                  <option value={4} className="bg-slate-800">
                    4 Images
                  </option>
                  <option value={8} className="bg-slate-800">
                    8 Images
                  </option>
                </select>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
