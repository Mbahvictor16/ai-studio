import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 animate-glow"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm mb-8">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white/80">Limited Time: Free Credits</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Ready to Create?</span>
            </h2>

            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Start generating stunning images and videos today. No credit card required to get started.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="glass-card px-8 py-4 text-lg font-semibold bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 group"
                asChild
              >
                <Link href="/signup">
                  Start Creating Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="glass-card px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
                <p className="text-white/60">Active Creators</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">1M+</div>
                <p className="text-white/60">Images Generated</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                <p className="text-white/60">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
