import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import useApiRequest from "@/app/hooks/useApiRequest"

import PrimaryBtn from "../PrimaryBtn"

export function Navigations() {
  const [activeDropdown, setActiveDropdown] = useState<
    "categories" | "resources" | null
  >(null)

  const { data, loading, error } = useApiRequest<any>("category", "GET")
  const {
    data: careerResources,
    loading: loading2,
    error: error2,
  } = useApiRequest<any>("resource/category", "GET")

  console.log("careerResources", careerResources)

  const toggleDropdown = (dropdown: "categories" | "resources") => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown))
  }

  return (
    <section className="text-gray-900 dark:text-slate-200">
      <nav className="flex justify-center gap-4">
        {/* Categories Dropdown */}
        <div className="relative inline-flex">
          <PrimaryBtn
            type="button"
            onClick={() => toggleDropdown("categories")}
            className="inline-flex items-center justify-center gap-2 rounded-sm border-0 bg-slate-50 py-1.5 text-sm font-semibold text-black shadow transition-all duration-500 hover:bg-slate-100"
          >
            Categories
            <ChevronDown
              className={`h-2.5 w-2.5 transform transition-transform ${
                activeDropdown === "categories" ? "rotate-180" : ""
              }`}
            />
          </PrimaryBtn>

          {activeDropdown === "categories" && (
            <div
              id="categories-dropdown"
              className="absolute top-full mt-2 w-fit text-nowrap rounded-sm bg-white shadow-lg"
            >
              <ul className="py-2">
                {loading && (
                  <li className="p-4 text-gray-500">Loading categories...</li>
                )}
                {error && (
                  <li className="p-4 text-red-500">
                    Failed to load categories
                  </li>
                )}
                {data?.data?.map((navigation: any) => (
                  <li key={navigation?._id}>
                    <Link
                      href={navigation?.slag}
                      passHref
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {navigation.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Career Resources Dropdown */}
        <div className="relative inline-flex">
          <PrimaryBtn
            type="button"
            onClick={() => toggleDropdown("resources")}
            className="inline-flex items-center justify-center gap-2 rounded-sm border-0 bg-slate-50 py-1.5 text-sm font-semibold text-black shadow transition-all duration-500 hover:bg-slate-100"
          >
            Career Resources
            <ChevronDown
              className={`h-2.5 w-2.5 transform transition-transform ${
                activeDropdown === "resources" ? "rotate-180" : ""
              }`}
            />
          </PrimaryBtn>

          {activeDropdown === "resources" && (
            <div
              id="resources-dropdown"
              className="absolute top-full mt-2 w-fit text-nowrap rounded-sm bg-white shadow-lg"
            >
              <ul className="py-2">
                {loading2 && (
                  <li className="p-4 text-gray-500">Loading resources...</li>
                )}
                {error2 && (
                  <li className="p-4 text-red-500">Failed to load resources</li>
                )}
                {careerResources?.data?.map((resource: any) => (
                  <li key={resource?._id}>
                    <Link
                      href={resource?.slug}
                      passHref
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </section>
  )
}
