"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Profile from "./auth/profile"
import { useUserProfile } from "@/hooks/use-user"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Images", href: "/images" },
  { name: "Videos", href: "/videos" },
  { name: "Pricing", href: "/pricing" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const {isSuccess, isFetched, isPending, data} = useUserProfile()


  return (
    <>
      <nav className="glass-card fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-1 p-1">
          <Link href="/" className="flex items-center gap-2 px-3 py-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-display font-bold text-lg gradient-text">Studio</span>
          </Link>

          <div className="flex items-center gap-1 ml-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === item.href ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
            {isSuccess && isFetched ? (
                <Profile user={data.user} />
              ) : (
                <>
                    <Button variant="ghost" size="sm" className="flex-1 text-white" asChild>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600"
                    asChild
                  >
                    <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
          </div>
        </div>
      </nav>

      <nav className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className="glass-card p-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-display font-bold text-lg gradient-text">Studio</span>
          </Link>

          <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="glass-card mt-2 p-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === item.href ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5",
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-2 mt-4 flex gap-2">
              {isSuccess && isFetched ? (
                <Profile user={data.user} />
              ) : (
                <>
                    <Button variant="ghost" size="sm" className="flex-1 text-white" asChild>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600"
                    asChild
                  >
                    <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
