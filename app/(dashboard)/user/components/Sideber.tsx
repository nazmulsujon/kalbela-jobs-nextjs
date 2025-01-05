"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { logout } from "@/utils/encript_decript"
import {
  BookmarkPlus,
  Briefcase,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarItems = [
  { name: "Dashboard", href: "/user", icon: LayoutDashboard },
  { name: "Save Jobs", href: "/user/save-jobs", icon: BookmarkPlus },
  { name: "Apply Jobs", href: "/user/apply-jobs", icon: Briefcase },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Products", href: "/products", icon: ShoppingCart },
  { name: "Reports", href: "/reports", icon: FileText },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 border-r lg:block">
      <ScrollArea className="h-full py-6">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Menu
            </h2>
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <Button
                  key={item.name}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-auto p-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
          <Button
            variant="outline"
            className="mt-2 w-full justify-start text-red-500 hover:text-red-600"
            onClick={() => {
              logout()
              window.location.href = "/login"
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </ScrollArea>
    </aside>
  )
}
