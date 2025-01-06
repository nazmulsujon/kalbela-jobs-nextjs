import React from "react"

import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const CardSkeleton = () => {
  return (
    <Card className="job-card w-full border border-b shadow-sm dark:bg-white">
      <div className="flex items-center justify-between p-4">
        <div className="space-y-2">
          <Skeleton className="h-5 w-32 lg:w-80" />
          <Skeleton className="h-4 w-28 lg:w-60" />
          <Skeleton className="h-4 w-16 lg:w-20" />
        </div>
        <div className="z-20 flex items-center gap-3 p-0">
          <Skeleton className="h-8 w-10 rounded" />
          <Skeleton className="h-8 w-20 rounded" />
        </div>
      </div>
    </Card>
  )
}

export default CardSkeleton
