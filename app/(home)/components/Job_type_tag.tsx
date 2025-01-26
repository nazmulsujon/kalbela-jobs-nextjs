"use client"

import { useRouter } from "next/navigation"

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import useApiRequest from "@/app/hooks/useApiRequest"

const Job_type_tag = () => {
      // const [api, setApi] = useState<CarouselApi | null>(null)
      const { data, loading, error } = useApiRequest<any>("job-type", "GET")

      console.log(data?.data, 'data from job type tag');

      const router = useRouter()

      const handleRedirect = (type: string) => {
            const queryParams = new URLSearchParams({
                  job_type: type,
            }).toString()
            router.push(`/search-details?${queryParams}`)
      }
      return (
            <MaxWidthWrapper>
                  <div className="flex justify-start mt-2 lg:justify-center overflow-x-auto w-full gap-2 ">
                        {data?.data?.slice(0, 6)?.map((single_data: any) => (
                              <button
                                    onClick={() => handleRedirect(single_data.name)}
                                    key={single_data?._id}
                                    className="whitespace-nowrap shrink-0 min-w-[100px] rounded-full border border-[#00186822] px-4 py-1 text-sm font-medium text-[#001968] hover:bg-[#001968] hover:text-white transition-all duration-200 ease-in-out shadow-sm"
                              >
                                    {single_data?.name} ({single_data?.count})
                              </button>
                        ))}
                  </div>
            </MaxWidthWrapper>

      )
}

export default Job_type_tag
