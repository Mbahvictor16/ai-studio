"use client"

interface PricingToggleProps {
  isYearly: boolean
  onToggle: (isYearly: boolean) => void
}

export function PricingToggle({ isYearly, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span className={`text-lg ${!isYearly ? "text-white" : "text-white/60"} transition-colors`}>Monthly</span>
      <button
        onClick={() => onToggle(!isYearly)}
        className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
          isYearly ? "bg-gradient-to-r from-violet-500 to-cyan-500" : "bg-white/20"
        }`}
      >
        <div
          className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
            isYearly ? "translate-x-8" : "translate-x-1"
          }`}
        />
      </button>
      <div className="flex items-center gap-2">
        <span className={`text-lg ${isYearly ? "text-white" : "text-white/60"} transition-colors`}>Yearly</span>
        <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">Save 20%</div>
      </div>
    </div>
  )
}
