import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    company: "Design Studio Pro",
    content:
      "AI Studio has revolutionized our creative workflow. We can now prototype visual concepts in minutes instead of hours. The quality is absolutely stunning.",
    rating: 5,
    avatar: "/professional-woman-dark-hair.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Marketing Manager",
    company: "TechFlow Inc",
    content:
      "The video generation feature is a game-changer for our marketing campaigns. We've reduced our content creation costs by 70% while improving quality.",
    rating: 5,
    avatar: "/professional-bearded-man.png",
  },
  {
    name: "Emily Watson",
    role: "Freelance Artist",
    company: "Independent",
    content:
      "As a freelancer, AI Studio gives me superpowers. I can take on more projects and deliver incredible results that wow my clients every time.",
    rating: 5,
    avatar: "/young-woman-curly-hair.png",
  },
  {
    name: "David Kim",
    role: "Product Manager",
    company: "StartupXYZ",
    content:
      "The API integration was seamless. We built AI-powered features into our app in just a few days. Our users love the new creative tools.",
    rating: 5,
    avatar: "/asian-man-glasses.png",
  },
  {
    name: "Lisa Thompson",
    role: "Content Creator",
    company: "Social Media Agency",
    content:
      "I create content for 50+ brands and AI Studio helps me maintain consistency while exploring new creative directions. It's absolutely essential.",
    rating: 5,
    avatar: "/blonde-woman-smiling.png",
  },
  {
    name: "Alex Johnson",
    role: "Film Director",
    company: "Indie Films Co",
    content:
      "The video generation quality is incredible for pre-visualization and concept development. It's like having a full VFX team at my fingertips.",
    rating: 5,
    avatar: "/creative-long-hair-man.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Loved by Creators</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of creators, designers, and businesses who trust AI Studio for their creative needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card group hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card inline-flex items-center gap-4 px-8 py-4">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <img
                  key={testimonial.name}
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Join 10,000+ creators</p>
              <p className="text-white/60 text-sm">Creating amazing content daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
