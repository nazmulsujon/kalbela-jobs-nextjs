import { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface SecondaryBtnProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "rounded-sm text-center px-5 py-1 shadow-none whitespace-normal font-medium text-sm border hover:shadow-lg transition-colors duration-200",
        "bg-white text-[#001968] hover:bg-slate-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:border-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default SecondaryBtn
