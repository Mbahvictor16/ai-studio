"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { CarouselSlide } from "./carousel"

export function HeroSection() {
  return (
    <section className="relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <div className="animate-float mb-8">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80">AI Models Online</span>
            </div>
          </div> */}

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            <span className="gradient-text">Create with AI</span>
            <br />
            <span className="text-white">Beyond Imagination</span>
          </h1>

          <p className="text-md md:text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into stunning visuals with cutting-edge AI technology. Generate audios, images and
            videos from simple text prompt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="sm"
              className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 transition-all duration-300 transform group"
              asChild
            >
              <Link href="/login">
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-white/10 hover:bg-white/10 transition-all duration-300 group text-white hover:text-white"
              asChild
            >
              <Link href={'/'}>
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform text-white group-hover:text-white" />
                Watch Demo
              </Link>
            </Button>
          </div>

          <CarouselSlide />
        </div>
      </div>
    </section>
  )
}
