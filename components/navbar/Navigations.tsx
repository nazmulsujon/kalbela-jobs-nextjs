import { useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import useApiRequest from "@/app/hooks/useApiRequest"

import PrimaryBtn from "../PrimaryBtn"
import { Button } from "../ui/button"

export function Navigations() {
      const router = useRouter()
      const [activeDropdown, setActiveDropdown] = useState<
            "categories" | "resources" | null
      >(null)
      const closeTimeoutRef = useRef<any>(null)

      const { data, loading, error } = useApiRequest<any>("category/top-five", "GET")

      const {
            data: careerResources,
            loading: loading2,
            error: error2,
      } = useApiRequest<any>("resource/category", "GET")

      const handleMouseEnter = (dropdown: "categories" | "resources") => {
            if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current)
                  closeTimeoutRef.current = null
            }
            setActiveDropdown(dropdown)
      }

      const handleMouseLeave = () => {
            closeTimeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null)
            }, 300)
      }

      const handleRedirect = (category: string) => {
            const queryParams = new URLSearchParams({
                  category: category,
            }).toString()
            router.push(`/search-details?${queryParams}`)
      }

      const handleRedirectToCareerResources = (resource: string) => {
            const queryParams = new URLSearchParams({
                  resource: resource,
            }).toString()
            router.push(`/career-resources?${queryParams}`)
      }


      return (
            <section className="text-gray-900 dark:text-slate-200">
                  <nav className="flex justify-center gap-4">
                        {/* Categories Dropdown */}
                        <div
                              className="relative inline-flex"
                              onMouseEnter={() => handleMouseEnter("categories")}
                              onMouseLeave={handleMouseLeave}
                        >
                              <PrimaryBtn
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 rounded-sm border-0 bg-slate-50 py-1.5 text-sm font-semibold text-black shadow transition-all duration-500 hover:bg-slate-100"
                              >
                                    Categories
                                    <ChevronDown
                                          className={`h-2.5 w-2.5 transform transition-transform ${activeDropdown === "categories" ? "rotate-180" : ""
                                                }`}
                                    />
                              </PrimaryBtn>

                              {activeDropdown === "categories" && (
                                    <div
                                          id="categories-dropdown"
                                          className="absolute top-full mt-2 w-[45rem] border text-nowrap rounded-sm bg-white shadow-lg transition-opacity duration-300"
                                    >
                                          <ul
                                                className="py-1 px-4 max-h-[19rem] grid grid-cols-3  overflow-y-auto"
                                                style={{ scrollbarWidth: "none" }}
                                          >
                                                {loading && (
                                                      <li className="p-4 text-gray-500">Loading categories...</li>
                                                )}
                                                {error && (
                                                      <li className="p-4 text-red-500">
                                                            Failed to load categories
                                                      </li>
                                                )}
                                                {data?.data?.map((section: any) => (
                                                      <div>
                                                            <h2 className="mb-2 text-sm py-2 px-2  font-bold text-gray-900">{section.megaCategory}</h2>
                                                            <hr className="mb-2 border-gray-200" />
                                                            <ul className="space-y-1 mb-4">
                                                                  {section.categories.map((category: any) => (
                                                                        <li key={category._id}>
                                                                              <button

                                                                                    className={cn(
                                                                                          "w-full text-left rounded-md px-3 py-2 text-sm",
                                                                                          "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                                                                                          "transition-colors duration-200",
                                                                                          "focus:outline-none focus:ring-2 focus:ring-gray-200"
                                                                                    )}
                                                                              >
                                                                                    <span>{category.name}</span>
                                                                                    {category.jobCount > 0 && (
                                                                                          <span className="ml-1.5 text-xs text-gray-400">
                                                                                                ({category.jobCount})
                                                                                          </span>
                                                                                    )}
                                                                              </button>
                                                                        </li>
                                                                  ))}
                                                            </ul>
                                                      </div>
                                                ))}
                                          </ul>
                                    </div>
                              )}

                        </div>

                        {/* Career Resources Dropdown */}
                        <div
                              className="relative inline-flex"
                              onMouseEnter={() => handleMouseEnter("resources")}
                              onMouseLeave={handleMouseLeave}
                        >
                              <PrimaryBtn
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 rounded-sm border-0 bg-slate-50 py-1.5 text-sm font-semibold text-black shadow transition-all duration-500 hover:bg-slate-100"
                              >
                                    Career Resources
                                    <ChevronDown
                                          className={`h-2.5 w-2.5 transform transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""
                                                }`}
                                    />
                              </PrimaryBtn>

                              {activeDropdown === "resources" && (
                                    <div
                                          id="resources-dropdown"
                                          className="absolute top-full mt-2 w-fit text-nowrap rounded-sm bg-white shadow-lg transition-opacity duration-300"
                                    >
                                          <ul className="py-1 max-h-[19.5rem] overflow-y-auto min-w-52"
                                                style={{ scrollbarWidth: "none" }}
                                          >
                                                {loading2 && (
                                                      <li className="p-4 text-gray-500">Loading resources...</li>
                                                )}
                                                {error2 && (
                                                      <li className="p-4 text-red-500">Failed to load resources</li>
                                                )}
                                                {careerResources?.data?.map((resource: any) => (
                                                      <li key={resource?._id}>
                                                            <Button
                                                                  onClick={() => {
                                                                        handleRedirectToCareerResources(resource?.slug)
                                                                  }}
                                                                  variant="link"
                                                                  className="block w-full px-4 text-left text-sm text-gray-700 hover:bg-gray-100 hover:no-underline"
                                                            >
                                                                  {resource.name}
                                                            </Button>
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
