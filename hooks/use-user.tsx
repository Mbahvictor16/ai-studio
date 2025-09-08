"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getUser } from "@/lib/actions/client"
import { useAuth } from "./use-auth"

export const useUserProfile = () => {
  const {isAuthenticated, auth} = useAuth()


  return useQuery({
    queryKey: ["user", auth.user?.id],
    queryFn: () => getUser(auth.user?.id!),
    enabled: isAuthenticated && !!auth.user?.id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 2,
  })
}

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (userData) => {
      // Mock update function - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      return { success: true, message: "Profile updated successfully!" }
    },
    onSuccess: () => {
      // Invalidate and refetch user profile
      queryClient.invalidateQueries({ queryKey: ["user"] })
    },
  })
}
