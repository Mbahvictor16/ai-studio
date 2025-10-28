"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X, AudioLines, VideoIcon, ImageIcon, Gem, User as UserIcon, WorkflowIcon } from "lucide-react"
import Profile from "./auth/profile"
import { useUserProfile } from "@/hooks/use-user"
import { FullLogo } from "./logo"

const navigation = [
  { name: "Audio", href: "/audios", icon: <AudioLines size={16} />, beta: true},
  { name: "Image", href: "/images", icon: <ImageIcon size={16} />},
  { name: "Video", href: "/videos", icon: <VideoIcon size={16} />},
  {name: "Agent", href: "/agents", icon: <WorkflowIcon size={16}/>, beta: true}
]

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const {isSuccess, isFetched, isPending, data} = useUserProfile()


  return (
    <>
      <header className="flex md:block items-center justify-between relative glass-card z-50 text-white">
        <div className="md:flex items-center justify-between">
          <FullLogo />

          <nav className="hidden md:flex gap-8 text-xs md:text-sm">
            <ul className="flex">
              {navigation.map(link => {
                return (
                  <li className="list-none" key={link.name}>
                    <Link href={link.href} className="flex gap-1 items-center hover:bg-white/10 px-4 py-1 rounded-full">{link.icon} {link.name}{link.beta && <sub className="p-2 text-[8px] bg-[#ffa600] rounded-full">Coming soon</sub>}</Link>
                  </li>
                )
              })}
            </ul>

            <div>
              <ul className="flex items-center gap-4">
                <li>
                  <Link href={'/pricing'} className="flex items-center gap-1">
                    <Gem size={12} color="#ffa600" />
                    Pricing
                  </Link>
                </li>
                <li>
                  {isFetched && isSuccess ? (
                    <Link href={'/account'} className="bg-gradient-to-r from-violet-400 to-cyan-400 px-4 py-1 rounded-full flex gap-1 items-center">
                      <UserIcon size={16} />
                      Account
                    </Link>
                  ) : (<Link href={'/login'} className="bg-gradient-to-r from-violet-400 to-cyan-400 px-4 py-1 rounded-full">Try now</Link>)}
                </li>
              </ul>
            </div>
          </nav>

          {isMobileMenuOpen && <nav className="bg-black rounded-lg border border-white/10 p-8 absolute md:hidden z-50 left-0 top-24 w-full gap-16 text-xs md:text-sm">
            <ul>
              {navigation.map(link => {
                return (
                  <li className="list-none mb-8" key={link.name}>
                    <Link href={link.href} className="flex gap-1 items-center hover:bg-white/10 px-4 py-1 rounded-xl">{link.icon} {link.name}{link.beta && <sub className="p-2 text-[8px] bg-[#ffa600] rounded-full">Coming soon</sub>}</Link>
                  </li>
                )
              })}

              {isFetched && isSuccess && (
                <li className="mb-8">
                  <Link href={'/pricing'} className="flex items-center gap-1 hover:bg-white/10 px-4 py-1 rounded-xl">
                    <Gem size={12} />
                    Pricing
                  </Link>
                </li>
              )}
            </ul>

            <div>
              <ul className="flex items-center justify-end gap-4">
                {isFetched && isSuccess ? (
                  <li>
                    <Link href={'/account'} className="bg-gradient-to-r from-violet-400 to-cyan-400 px-4 py-1 rounded-full flex gap-1 items-center">
                      <UserIcon size={16} />
                      Account
                    </Link>
                  </li>
                ) : (<><li>
                  <Link href={'/pricing'} className="flex items-center gap-1">
                    <Gem size={12} color="#ffa600" />
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href={'/login'} className="bg-gradient-to-r from-violet-400 to-cyan-400 px-4 py-1 rounded-full">Try now</Link>
                </li></>)}
              </ul>
            </div>
          </nav>}
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </Button>
        </div>
      </header>
    </>
  )
}
