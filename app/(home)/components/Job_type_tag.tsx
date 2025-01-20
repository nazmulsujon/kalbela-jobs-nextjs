"use client"

import { Badge } from "@/components/ui/badge"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import useApiRequest from "@/app/hooks/useApiRequest"

const Job_type_tag = () => {
  // const [api, setApi] = useState<CarouselApi | null>(null)
  const { data, loading, error } = useApiRequest<any>("job-type", "GET")
  return (
    <MaxWidthWrapper>
      <div className="flex flex-wrap justify-center gap-2">
        {data?.data?.slice(0, 10)?.map((single_data: any) => (
          <span
            key={single_data?._id}
            className="whitespace-nowrap rounded-full bg-[#001968] px-2.5 py-0.5 text-sm text-white"
          >
            {single_data?.name}
          </span>
        ))}
      </div>
    </MaxWidthWrapper>
  )
}

export default Job_type_tag
