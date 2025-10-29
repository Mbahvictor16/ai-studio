"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Key, Copy, Eye, EyeOff, Plus, Trash2, RefreshCw } from "lucide-react"

interface ApiKey {
  id: string
  name: string
  key: string
  created: Date
  lastUsed: Date | null
  usage: number
  limit: number
}

export function ApiSettings() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: "1",
      name: "Production App",
      key: "sk-1234567890abcdef1234567890abcdef",
      created: new Date("2024-01-15"),
      lastUsed: new Date("2024-01-20"),
      usage: 1250,
      limit: 10000,
    },
    {
      id: "2",
      name: "Development",
      key: "sk-abcdef1234567890abcdef1234567890",
      created: new Date("2024-01-10"),
      lastUsed: null,
      usage: 0,
      limit: 1000,
    },
  ])
  const [showKeys, setShowKeys] = useState<Set<string>>(new Set())
  const [newKeyName, setNewKeyName] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  const toggleKeyVisibility = (keyId: string) => {
    setShowKeys((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(keyId)) {
        newSet.delete(keyId)
      } else {
        newSet.add(keyId)
      }
      return newSet
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  const createApiKey = async () => {
    if (!newKeyName.trim()) return

    setIsCreating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newKey: ApiKey = {
      id: Date.now().toString(),
      name: newKeyName,
      key: `sk-${Math.random().toString(36).substring(2, 34)}`,
      created: new Date(),
      lastUsed: null,
      usage: 0,
      limit: 1000,
    }

    setApiKeys((prev) => [newKey, ...prev])
    setNewKeyName("")
    setIsCreating(false)
  }

  const deleteApiKey = (keyId: string) => {
    setApiKeys((prev) => prev.filter((key) => key.id !== keyId))
  }

  const regenerateApiKey = async (keyId: string) => {
    setApiKeys((prev) =>
      prev.map((key) =>
        key.id === keyId ? { ...key, key: `sk-${Math.random().toString(36).substring(2, 34)}` } : key,
      ),
    )
  }

  const maskKey = (key: string) => {
    return `${key.substring(0, 7)}${"*".repeat(20)}${key.substring(key.length - 4)}`
  }

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Key className="w-5 h-5 text-violet-400" />
        <h3 className="text-lg font-semibold text-white">API Keys</h3>
      </div>

      <div className="glass p-4 border border-yellow-500/20 bg-yellow-500/5 rounded-lg">
        <p className="text-yellow-400 text-sm">
          <strong>Important:</strong> Keep your API keys secure and never share them publicly. These keys provide access
          to your Butterfly account and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="Enter API key name (e.g., 'Production App')"
              className="glass border-white/20 focus:border-violet-400 text-white"
            />
          </div>
          <Button
            onClick={createApiKey}
            disabled={!newKeyName.trim() || isCreating}
            className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            {isCreating ? "Creating..." : "Create Key"}
          </Button>
        </div>

        <div className="space-y-4">
          {apiKeys.map((apiKey) => (
            <div key={apiKey.id} className="glass p-4 border border-white/10 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-white">{apiKey.name}</h4>
                  <p className="text-sm text-white/60">Created {apiKey.created.toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => regenerateApiKey(apiKey.id)}
                    className="hover:bg-white/10"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => deleteApiKey(apiKey.id)}
                    className="hover:bg-red-500/20 text-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Input
                    value={showKeys.has(apiKey.id) ? apiKey.key : maskKey(apiKey.key)}
                    readOnly
                    className="glass border-white/20 text-white font-mono text-sm"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleKeyVisibility(apiKey.id)}
                    className="hover:bg-white/10"
                  >
                    {showKeys.has(apiKey.id) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(apiKey.key)}
                    className="hover:bg-white/10"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-white/60">Usage</p>
                    <p className="text-white font-medium">
                      {apiKey.usage.toLocaleString()} / {apiKey.limit.toLocaleString()}
                    </p>
                    <div className="w-full bg-white/10 rounded-full h-2 mt-1">
                      <div
                        className="bg-gradient-to-r from-violet-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(apiKey.usage / apiKey.limit) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-white/60">Last Used</p>
                    <p className="text-white font-medium">
                      {apiKey.lastUsed ? apiKey.lastUsed.toLocaleDateString() : "Never"}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/60">Status</p>
                    <p className="text-green-400 font-medium">Active</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
