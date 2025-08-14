"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"

interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  period: "month" | "year"
  originalPrice?: number
  features: string[]
  limitations?: string[]
  popular?: boolean
  enterprise?: boolean
  buttonText: string
  buttonVariant: "default" | "outline"
}

interface PricingCardProps {
  plan: PricingPlan
  onSubscribe: (planId: string) => void
  isLoading?: boolean
}

export function PricingCard({ plan, onSubscribe, isLoading }: PricingCardProps) {
  const discount = plan.originalPrice ? Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100) : 0

  return (
    <div
      className={`glass-card p-6 relative transition-all duration-300 hover:scale-105 ${
        plan.popular ? "ring-2 ring-violet-500/50 bg-gradient-to-b from-violet-500/10 to-transparent" : ""
      } ${plan.enterprise ? "ring-2 ring-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent" : ""}`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      {plan.enterprise && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Zap className="w-4 h-4" />
            Enterprise
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-white/70 text-sm mb-4">{plan.description}</p>

        <div className="flex items-baseline justify-center gap-2 mb-2">
          {plan.originalPrice && <span className="text-white/50 line-through text-lg">${plan.originalPrice}</span>}
          <span className="text-4xl font-bold gradient-text">${plan.price}</span>
          <span className="text-white/70">/{plan.period}</span>
        </div>

        {discount > 0 && (
          <div className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
            Save {discount}%
          </div>
        )}
      </div>

      <Button
        onClick={() => onSubscribe(plan.id)}
        disabled={isLoading}
        className={`w-full mb-6 transition-all duration-300 ${
          plan.buttonVariant === "default"
            ? "bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600"
            : "glass border-white/20 hover:bg-white/10 bg-transparent"
        }`}
        variant={plan.buttonVariant}
      >
        {isLoading ? "Processing..." : plan.buttonText}
      </Button>

      <div className="space-y-4">
        <div>
          <h4 className="text-white font-semibold mb-3">What's included:</h4>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {plan.limitations && plan.limitations.length > 0 && (
          <div>
            <h4 className="text-white/70 font-medium mb-3 text-sm">Limitations:</h4>
            <ul className="space-y-2">
              {plan.limitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <div className="w-4 h-4 border border-white/30 rounded-full mt-0.5 flex-shrink-0" />
                  <span className="text-white/60">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
