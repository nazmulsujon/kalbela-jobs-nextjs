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
        "h-full mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl px-4 md:px-20 lg:px-12",
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
