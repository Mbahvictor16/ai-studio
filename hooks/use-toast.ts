"use client"

import { useState, useCallback } from "react"
import type { ToastProps } from "@/components/ui/toast"

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const addToast = useCallback((toast: Omit<ToastProps, "id" | "onClose">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { ...toast, id, onClose: () => removeToast(id) }])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const toast = {
    success: (title: string, description?: string) => addToast({ title, description, variant: "default" }),
    error: (title: string, description?: string) => addToast({ title, description, variant: "destructive" }),
    info: (title: string, description?: string) => addToast({ title, description, variant: "default" }),
    warning: (title: string, description?: string) => addToast({ title, description, variant: "destructive" }),
  }

  return { toasts, toast, removeToast }
}
