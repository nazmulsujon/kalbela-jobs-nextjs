import { ReactNode } from "react"

import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-4 md:px-20 lg:px-12 2xl:max-w-screen-2xl",
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
