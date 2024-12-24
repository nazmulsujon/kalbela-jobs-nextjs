import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const selectCustomStyles = (theme: string) => ({
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: theme === "dark" ? "#1E293B" : "#FFFFFF",
    color: theme === "dark" ? "#FFFFFF" : "#000000",
    borderColor: theme === "dark" ? "#f2f2f2" : "#cbd5e1",
    boxShadow: state.isFocused
      ? theme === "dark"
        ? "0 0 0 1px #f2f2f2"
        : "0 0 0 1px #001968"
      : "none",
    "&:hover": {
      borderColor: theme === "dark" ? "#f2f2f2" : "#001968",
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: theme === "dark" ? "#FFFFFF" : "#000000",
  }),
  menu: (provided: any) => ({
    ...provided,
    border: theme === "dark" ? "1px solid #FFFFFF" : provided.border,
    backgroundColor: theme === "dark" ? "#1E293B" : "#FFFFFF",
    color: theme === "dark" ? "#FFFFFF" : "#000000",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? theme === "dark"
        ? "#FFFFFF"
        : "#E2E8F0"
      : state.isFocused
        ? theme === "dark"
          ? "#334155"
          : "#f8fafc"
        : theme === "dark"
          ? "#1E293B"
          : "#FFFFFF",
    color: state.isSelected
      ? theme === "dark"
        ? "#000000"
        : "#000000"
      : theme === "dark"
        ? "#FFFFFF"
        : "#000000",
    "&:active": {
      backgroundColor: theme === "dark" ? "#475569" : "#f8fafc",
      color: theme === "dark" ? "#ffff" : "#000000",
    },
  }),
})
