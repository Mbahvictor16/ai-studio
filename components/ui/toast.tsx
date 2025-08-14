"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  variant?: "default" | "destructive"
  onClose: () => void
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ id, title, description, variant = "default", onClose, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
          "glass-card backdrop-blur-md border-white/20",
          variant === "destructive" && "border-red-500/50 bg-red-500/10 text-red-100",
        )}
        {...props}
      >
        <div className="grid gap-1">
          {title && <div className="text-sm font-semibold text-white">{title}</div>}
          {description && <div className="text-sm opacity-90 text-white/80">{description}</div>}
        </div>
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-md p-1 text-white/50 opacity-0 transition-opacity hover:text-white focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  },
)
Toast.displayName = "Toast"

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}
