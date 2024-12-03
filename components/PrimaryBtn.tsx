import { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface PrimaryBtnProps extends HTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button" | undefined
  children: React.ReactNode
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  type,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        "rounded text-center px-5 py-1 shadow-none whitespace-normal font-medium text-sm border-[1px] hover:shadow-xl transition-colors duration-200",
        "bg-[#001968] text-white border-[#001968] dark:bg-white dark:text-gray-900 dark:border-white dark:hover:bg-slate-100 dark:hover:border-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
