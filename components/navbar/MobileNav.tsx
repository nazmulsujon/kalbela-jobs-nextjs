import Link from "next/link"
import { ChevronDownIcon } from "lucide-react"

import { CategoryType } from "@/types/category"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface NavigationItem {
  name: string
  slug: string
  categories?: CategoryType[]
}

const MobileNav: React.FC = () => {
  const navigations: NavigationItem[] = [
    {
      name: "Jobs",
      slug: "/jobs",
      categories: [],
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
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-slate-200">
      <section>
        <Accordion type="single" collapsible className="py-3 space-y-3">
          {navigations.map((navigation) => (
            <AccordionItem
              className="border-b-0"
              key={navigation.name}
              value={navigation.name}
            >
              {navigation.categories ? (
                <AccordionTrigger className="uppercase flex justify-between items-center w-full p-0 text-left hover:no-underline  pb-1">
                  <Link href={navigation.slug} className="flex items-center">
                    {navigation.name}
                  </Link>

                  <ChevronDownIcon
                    className="group-data-[state=open]:rotate-180 relative top-[1px] ml-1 size-5 transition duration-300 text-gray-700 dark:text-gray-400"
                    aria-hidden="true"
                  />
                </AccordionTrigger>
              ) : (
                <Link href={navigation.slug} className="flex items-center">
                  {navigation.name}
                </Link>
              )}

              {navigation.categories && navigation.categories.length > 0 && (
                <AccordionContent className="pl-4 mt-2">
                  <ul>
                    {navigation.categories.map((category) => (
                      <li
                        key={category.name}
                        className="group relative mb-1 max-w-fit"
                      >
                        <Link
                          href={`/${category.slug}`}
                          className="block py-1 select-none leading-none no-underline outline-none"
                        >
                          {category.name}
                        </Link>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all min-h-[1px] bg-slate-600 group-hover:w-full group-hover:rounded-full ease-in-out"></span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

export default MobileNav
