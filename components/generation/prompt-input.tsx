"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Wand2, Settings } from "lucide-react"
import { useSelector } from "react-redux"
import {authSelector} from '../../lib/store/authSlice'
import {useRouter} from 'next/navigation'
import { Select, SelectContent, SelectItem } from "../ui/select"
import { SelectTrigger, SelectValue } from "@radix-ui/react-select"

interface PromptInputProps {
  onGenerate: (prompt: string /*settings: GenerationSettings*/) => void
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
  const [showOptions, setShowOptions] = useState(true)
  const [options, setOptions] = useState({
    model: {
      name: type === 'image' ? 'Flux 1 Schnell' : 'Gen 4 Turbo',
      value: type === 'image' ? '@cf/black-forest-labs/flux-1-schnell' : 'gen4_turbo',
      label: type === 'image' ? 'Black Forest Labs' : 'RunwayML'
    }
  })
  const token = useSelector(authSelector)
  const router = useRouter()

  const handleGenerate = () => {
    if (!token) {
      router.push('/login')
      return
    }
    if (prompt.trim()) {
      onGenerate(prompt)
    }
  }

  const imageModelOptions = [
    {name: 'Flux 1 Schnell', value: '@cf/black-forest-labs/flux-1-schnell', label: 'Black Forest Labs'},
  ]

  const videoModelOptions = [
    {name: 'Gen 4 Turbo', value: 'gen4_turbo', label: 'RunwayML'},
    {name: 'Veo 3 Fast', value: 'veo3-fast-preview', label: 'GoogleAI'}
  ]

  function selectImageModel(value: string) {
    const model = imageModelOptions.find(model => model.value == value)
    setOptions({model: model!})
    console.log(model)
  }

  function selectVideoModel(value: string) {
    const model = videoModelOptions.find(model => model.value == value)
    setOptions({model: model!})
    console.log(model)
  }

  // const styleOptions = [
  //   { value: "photorealistic", label: "Photorealistic" },
  //   { value: "artistic", label: "Artistic" },
  //   { value: "anime", label: "Anime" },
  //   { value: "digital-art", label: "Digital Art" },
  //   { value: "oil-painting", label: "Oil Painting" },
  //   { value: "watercolor", label: "Watercolor" },
  // ]

  // const aspectRatios = [
  //   { value: "1:1", label: "Square (1:1)" },
  //   { value: "16:9", label: "Landscape (16:9)" },
  //   { value: "9:16", label: "Portrait (9:16)" },
  //   { value: "4:3", label: "Classic (4:3)" },
  // ]

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
            onClick={() => setShowOptions(!showOptions)}
            className="text-white/70 hover:text-white hover:bg-white/10 w-full sm:w-auto"
          >
            <Settings className="w-4 h-4 mr-2" />
            Options
          </Button>

          <div className="flex flex-col items-stretch sm:items-center gap-2 w-full sm:w-auto">
            {/* <Button
              variant="outline"
              size="sm"
              className="glass border-white/20 hover:bg-white/10 bg-transparent w-full sm:w-auto"
              disabled={isGenerating}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Enhance Prompt</span>
              <span className="sm:hidden">Enhance</span>
            </Button> */}
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

      {showOptions && (
        <div className="border-t border-white/10 pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* <div className="space-y-2">
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
            </div> */}

            {/* <div className="space-y-2">
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
            </div> */}

            {/* <div className="space-y-2">
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
            </div> */}

            {type === "image" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90 mb-4">Model</label>
                <Select disabled={isGenerating} value={options.model.value} onValueChange={(value) => selectImageModel(value)}>
                  <SelectTrigger className="glass w-full p-2 rounded-lg border border-white/20 focus:border-violet-400 text-white bg-transparent">
                    <SelectValue placeholder={options.model.name} />
                  </SelectTrigger>
                  <SelectContent>
                    {imageModelOptions.map((option, id) => {
                      return (
                        <SelectItem value={option.value} key={id}>{option.name}</SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>
            )}

            {type === "video" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90 mb-4">Model</label>
                <Select disabled={isGenerating} value={options.model.value} onValueChange={(value) => selectVideoModel(value)}>
                  <SelectTrigger className="glass w-full p-2 rounded-lg border border-white/20 focus:border-violet-400 text-white bg-transparent">
                    <SelectValue placeholder={options.model.name} />
                  </SelectTrigger>
                  <SelectContent>
                    {videoModelOptions.map((option, id) => {
                      return (
                        <SelectItem value={option.value} key={id}>{option.name}</SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
