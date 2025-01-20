"use client"

import { useRouter } from "next/navigation"

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import useApiRequest from "@/app/hooks/useApiRequest"

const Job_type_tag = () => {
  // const [api, setApi] = useState<CarouselApi | null>(null)
  const { data, loading, error } = useApiRequest<any>("job-type", "GET")

  const router = useRouter()

  const handleRedirect = (type: string) => {
    const queryParams = new URLSearchParams({
      job_type: type,
    }).toString()
    router.push(`/search-details?${queryParams}`)
  }
  return (
    <MaxWidthWrapper>
      <div className="flex flex-wrap justify-center gap-2">
        {data?.data?.slice(0, 10)?.map((single_data: any) => (
          <button
            onClick={() => handleRedirect(single_data.name)}
            key={single_data?._id}
            className="whitespace-nowrap rounded-full bg-[#001968] px-2.5 py-0.5 text-sm text-white"
          >
            {single_data?.name}
          </button>
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default Job_type_tag
