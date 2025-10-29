import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { CTASection } from "@/components/landing/cta-section"
import { InfiniteScroll } from "@/components/landing/infinite-scroll"
import { VideoCard } from "@/components/landing/video-card"
import { MarqueeImages } from "@/components/landing/marquee-images"

export default function HomePage() {
  return (
    <div className="min-h-screen relative z-10">
      <Navigation />
      <main className="pt-8">
        <HeroSection />
        {/* <FeaturesSection /> */}
        <InfiniteScroll />
        <VideoCard />
        <MarqueeImages />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
