"use client"

import type React from "react"

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
          },
          mutations: {
            retry: 1,
          },
        },
        queryCache: new QueryCache({
          onError: (err: any) => {
            if (err.response.status == 403) {
              router.push('/')
            }
          }
        }),
        mutationCache: new MutationCache({
          onError: (err: any) => {
            if (err.response.status == 403) {
              router.push('/')
            }
          }
        })
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
