import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ReactQueryProvider } from "@/lib/react-query"
import StoreProvider from "@/lib/store/store-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "AI Studio - Generate Images & Videos",
  description: "Modern AI-powered platform for generating stunning images and videos from text prompts",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="min-h-screen bg-[#0a0a0a]">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="relative z-10">
          <StoreProvider>
            <ReactQueryProvider>
              <main>{children}</main>
              <Toaster />
            </ReactQueryProvider>
          </StoreProvider>
        </div>
      </body>
    </html>
  )
}
