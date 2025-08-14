"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingCard } from "@/components/pricing/pricing-card"
import { PricingToggle } from "@/components/pricing/pricing-toggle"
import { FAQSection } from "@/components/pricing/faq-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

const monthlyPlans = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for trying out AI Studio",
    price: 0,
    period: "month" as const,
    features: [
      "10 image generations per month",
      "Standard quality output",
      "Basic style options",
      "Personal use license",
      "Community support",
    ],
    limitations: ["No video generation", "No API access", "Watermarked outputs"],
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For creators and professionals",
    price: 29,
    period: "month" as const,
    features: [
      "500 image generations per month",
      "50 video generations per month",
      "High-quality output (4K)",
      "All style options and filters",
      "Commercial use license",
      "Priority processing",
      "Email support",
      "API access (10,000 requests/month)",
    ],
    popular: true,
    buttonText: "Start Pro Trial",
    buttonVariant: "default" as const,
  },
  {
    id: "business",
    name: "Business",
    description: "For teams and growing businesses",
    price: 99,
    period: "month" as const,
    features: [
      "2,000 image generations per month",
      "200 video generations per month",
      "Ultra HD quality output",
      "Advanced AI models",
      "Team collaboration tools",
      "Brand kit integration",
      "Priority support",
      "API access (50,000 requests/month)",
      "Custom integrations",
      "Usage analytics",
    ],
    buttonText: "Start Business Trial",
    buttonVariant: "default" as const,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: 499,
    period: "month" as const,
    features: [
      "Unlimited generations",
      "Custom AI model training",
      "Dedicated infrastructure",
      "White-label solutions",
      "Advanced security & compliance",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom API limits",
      "On-premise deployment options",
      "SLA guarantees",
    ],
    enterprise: true,
    buttonText: "Contact Sales",
    buttonVariant: "default" as const,
  },
]

const yearlyPlans = monthlyPlans.map((plan) => ({
  ...plan,
  period: "year" as const,
  originalPrice: plan.price * 12,
  price: Math.round(plan.price * 12 * 0.8), // 20% discount
}))

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const plans = isYearly ? yearlyPlans : monthlyPlans

  const handleSubscribe = async (planId: string) => {
    setIsLoading(planId)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (planId === "free") {
      // Redirect to signup
      window.location.href = "/signup"
    } else if (planId === "enterprise") {
      // Open contact form or redirect to contact page
      window.location.href = "mailto:sales@aistudio.com"
    } else {
      // Redirect to payment flow
      console.log(`Subscribing to ${planId}`)
    }

    setIsLoading(null)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Simple, Transparent Pricing</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your creative needs. Start free, upgrade anytime.
            </p>

            <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} onSubscribe={handleSubscribe} isLoading={isLoading === plan.id} />
            ))}
          </div>

          <div className="glass-card p-8 md:p-12 text-center mb-20">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Need a Custom Solution?</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We work with enterprises to create tailored AI solutions that fit your specific requirements, scale, and
              budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 transition-all duration-300"
                asChild
              >
                <Link href="mailto:sales@aistudio.com">
                  Contact Sales Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-white/20 hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/demo">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>

          <FAQSection />

          <div className="glass-card p-8 md:p-12 text-center mb-20">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Ready to Get Started?</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of creators already using AI Studio to bring their ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 transition-all duration-300"
                asChild
              >
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-white/20 hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/images">Try Without Signup</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">14-Day</div>
                <p className="text-white/60">Money-back guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">24/7</div>
                <p className="text-white/60">Customer support</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-2">99.9%</div>
                <p className="text-white/60">Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
