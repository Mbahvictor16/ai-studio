import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
