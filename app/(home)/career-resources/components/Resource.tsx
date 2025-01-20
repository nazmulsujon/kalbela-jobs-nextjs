import Link from "next/link"

import { formatDate, truncateText } from "@/lib/utils"
import useApiRequest from "@/app/hooks/useApiRequest"

const Resource = ({
  resource,
  resourceSlugFromQuery,
}: {
  resource: any
  resourceSlugFromQuery: string
}) => {
  const { data, loading, error } = useApiRequest<any>(
    `resource/category-resource?slag=${resourceSlugFromQuery}`,
    "GET"
  )

  console.log("data", data)

  if (error) {
    return <p>Error loading data</p>
  }

  return (
    <section className="py-6">
      <div>
        <div className="mx-auto text-left">
          <h2 className="text-xl font-bold leading-tight md:text-3xl">
            Latest from {resource.name}
          </h2>
        </div>
        <div className="mx-auto mt-6 grid max-w-md grid-cols-1 gap-x-16 gap-y-6 lg:mt-10 lg:max-w-full lg:grid-cols-3">
          {data?.data?.length > 0 && !loading ? (
            data?.data?.map((item: any) => (
              <div key={item._id}>
                <Link
                  href={`/career-resources/${item._id}`}
                  className="aspect-w-4 aspect-h-3 block"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={item.photo}
                    alt={item.name}
                  />
                </Link>
                <p className="mt-6 text-xl font-semibold">
                  <Link href={`/career-resources/${item._id}`}>
                    {item.name}
                  </Link>
                </p>
                <p
                  className="mt-4 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: truncateText(item.description, 200),
                  }}
                ></p>
                <div className="mb-4 mt-6 h-0 border-t-2 border-dashed border-gray-200" />
                <span className="block text-sm font-bold uppercase tracking-widest text-gray-500">
                  {formatDate(item.created_at)}
                </span>
              </div>
            ))
          ) : (
            <div>
              <p className="text-gray-600">No data available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Resource
