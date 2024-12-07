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

interface NavigationItem {
  name: string
  slug: string
  categories?: CategoryType[]
}

export function Navigations() {
  const [categories, setCategories] = useState<CategoryType[]>([])

  const navigations: NavigationItem[] = [
    {
      name: "Jobs",
      slug: "/jobs",
      categories: categories,
    },
    {
      name: "Dashboard",
      slug: "/job-seeker/personal-profile/profile",
    },
    {
      name: "Blogs",
      slug: "/blogs",
    },
  ]

  return (
    <section className="text-gray-900 dark:text-slate-200">
      <nav className="flex justify-center">
        <NavigationMenu className="py-3">
          <NavigationMenuList>
            {navigations.map((navigation, index) => (
              <NavigationMenuItem key={index}>
                <Link href={navigation.slug}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-900 dark:text-white dark:hover:text-slate-100 rounded-sm">
                    {navigation.name}
                    {/* {navigation.categories && (
                      <ChevronDownIcon
                        className="relative top-[1px] ml-1 size-5 transition duration-300 text-gray-700 dark:text-gray-400 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />
                    )} */}
                  </NavigationMenuTrigger>
                </Link>
                {navigation.categories && navigation.categories.length > 0 ? (
                  <NavigationMenuContent className="bg-white text-gray-900 dark:bg-gray-900 dark:text-slate-200">
                    <ul className="grid gap-3 lg:gap-12 p-6 md:w-[400px] md:grid-cols-3">
                      {navigation.categories.map((category, categoryIndex) => (
                        <li key={categoryIndex}>
                          <div className="group relative w-max">
                            <Link
                              title={category.name}
                              href={`/${category.slug}`}
                              className="text-sm !text-start my-1 p-1 block select-none leading-none no-underline outline-none text-gray-800 dark:text-gray-300"
                            >
                              {category.name}
                            </Link>
                            <span className="absolute -bottom-1 left-0 w-0 transition-all min-h-[1px] bg-[#001968] dark:bg-gray-400 group-hover:w-full group-hover:rounded-full ease-in-out"></span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                ) : (
                  <NavigationMenuContent className="hidden" />
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </section>
  )
}
