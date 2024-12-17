import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDownIcon } from "lucide-react"

import { CategoryType } from "@/types/global"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import useApiRequest from "@/app/hooks/useApiRequest"

export function Navigations() {
  const { data, loading, error } = useApiRequest<any>("category", "GET")

  return (
    <section className="text-gray-900 dark:text-slate-200">
      <nav className="flex justify-center">
        <NavigationMenu className="py-3">
          <NavigationMenuList>
            {data?.data?.map((navigation: any) => (
              <NavigationMenuItem key={navigation._id}>
                <Link href={navigation?.slag}>
                  <NavigationMenuTrigger className="rounded-sm bg-transparent text-gray-900 hover:bg-transparent dark:text-white dark:hover:text-slate-100">
                    {navigation.name}
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </section>
  )
}
