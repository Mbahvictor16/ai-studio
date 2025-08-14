"use client"

import { useMemo } from "react"

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = useMemo(() => {
    if (!password) return { score: 0, label: "", color: "" }

    let score = 0
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      numbers: /\d/.test(password),
      symbols: /[^A-Za-z0-9]/.test(password),
    }

    score = Object.values(checks).filter(Boolean).length

    const strengthLevels = [
      { score: 0, label: "", color: "" },
      { score: 1, label: "Very Weak", color: "bg-red-500" },
      { score: 2, label: "Weak", color: "bg-orange-500" },
      { score: 3, label: "Fair", color: "bg-yellow-500" },
      { score: 4, label: "Good", color: "bg-blue-500" },
      { score: 5, label: "Strong", color: "bg-green-500" },
    ]

    return strengthLevels[score]
  }, [password])

  if (!password) return null

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
              level <= strength.score ? strength.color : "bg-white/20"
            }`}
          />
        ))}
      </div>
      {strength.label && (
        <p className={`text-xs ${strength.score >= 4 ? "text-green-400" : "text-white/60"}`}>
          Password strength: {strength.label}
        </p>
      )}
    </div>
  )
}
