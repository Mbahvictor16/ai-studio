import { Skeleton } from "@/components/ui/skeleton"

export function LoadingSkeleton({ className }: { className?: string }) {
  return <Skeleton className={className} />
}

export function ImageGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="glass-card p-2">
          <Skeleton className="aspect-square mb-3" />
          <Skeleton className="h-4 mb-2" />
          <div className="flex justify-between">
            <Skeleton className="h-3 w-20" />
            <div className="flex gap-1">
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-6 h-6 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function VideoPlayerSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="glass-card p-4">
          <Skeleton className="aspect-video mb-4" />
          <Skeleton className="h-4 mb-2" />
          <div className="flex justify-between">
            <Skeleton className="h-3 w-24" />
            <div className="flex gap-1">
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-6 h-6 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
