import { Zap, Shield, Palette, Download, Globe, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Generation",
    description: "Create stunning visuals in seconds with our optimized AI models. No more waiting hours for results.",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: Palette,
    title: "Unlimited Creativity",
    description: "From photorealistic images to abstract art, our AI adapts to any style and creative vision you have.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Shield,
    title: "Commercial License",
    description: "Use generated content for commercial projects with full rights. Perfect for businesses and creators.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Download,
    title: "High Resolution Output",
    description: "Download your creations in 4K resolution, perfect for print, web, and professional use cases.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Globe,
    title: "API Integration",
    description: "Integrate our AI models into your applications with our developer-friendly REST API.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Sparkles,
    title: "Advanced Controls",
    description: "Fine-tune your generations with advanced parameters, styles, and composition controls.",
    gradient: "from-rose-500 to-pink-600",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Everything you need to bring your creative vision to life with cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="glass-card group hover:bg-white/10 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
