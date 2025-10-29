"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does the credit system work?",
    answer:
      "Credits are used for generating images and videos. Each image generation uses 1 credit, while video generation uses 10 credits. Credits reset monthly with your subscription.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference immediately. When downgrading, the change takes effect at your next billing cycle.",
  },
  {
    question: "What happens if I exceed my credit limit?",
    answer:
      "If you exceed your monthly credits, you can purchase additional credit packs or upgrade to a higher plan. Your account won't be suspended, but you'll need more credits to continue generating.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund within the first 14 days.",
  },
  {
    question: "Can I use generated content commercially?",
    answer:
      "Yes, all content generated with paid plans comes with full commercial usage rights. Free plan users have personal use rights only.",
  },
  {
    question: "Is there an API available?",
    answer:
      "Yes, API access is included with Pro and Enterprise plans. You can integrate our AI models directly into your applications with our REST API.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise plans.",
  },
  {
    question: "How does the Enterprise plan work?",
    answer:
      "Enterprise plans are customized based on your needs. Contact our sales team to discuss volume pricing, custom integrations, dedicated support, and SLA agreements.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-white/80">Everything you need to know about Butterfly pricing</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-white/70 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white/70 flex-shrink-0" />
                )}
              </button>
              {openItems.has(index) && (
                <div className="px-6 pb-6">
                  <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
