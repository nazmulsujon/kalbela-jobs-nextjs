import { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface PrimaryBtnProps extends HTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button" | undefined
  children: React.ReactNode
  disabled?: boolean
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  type,
  disabled,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "rounded text-center px-5 py-1 shadow-none whitespace-normal font-medium text-sm border hover:shadow-xl transition-colors duration-200",
        "bg-[#001968] text-white dark:bg-white dark:text-gray-900 dark:hover:bg-slate-100 ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
