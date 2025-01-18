import useApiRequest from "@/app/hooks/useApiRequest";
import { formatDate, truncateText } from "@/lib/utils";
import Link from "next/link";

const Resource = ({ resource, resourceSlugFromQuery }: { resource: any, resourceSlugFromQuery: string }) => {
  const { data, loading, error } = useApiRequest<any>(
    `resource/category-resource?slag=${resourceSlugFromQuery}`,
    "GET"
  );

  console.log("data", data);


  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <section className="py-6">
      <div>
        <div className="mx-auto text-left">
          <h2 className="text-xl font-bold leading-tight md:text-3xl">
            Latest from {resource.name}
          </h2>
        </div>
        <div className="grid max-w-md grid-cols-1 mx-auto mt-6 lg:max-w-full lg:mt-10 lg:grid-cols-3 gap-x-16 gap-y-6">
          {
            data?.data?.length > 0 && !loading ?
              data?.data?.map((item: any) => (
                <div key={item._id}>
                  <Link href={`/career-resources/${item._id}`} className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
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
                    dangerouslySetInnerHTML={{ __html: truncateText(item.description, 200) }}
                  ></p>
                  <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed" />
                  <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                    {formatDate(item.created_at)}
                  </span>
                </div>

              )) :
              <div>
                <p className="text-gray-600">No data available</p>
              </div>
          }
        </div>
      </div>
    </section>
  );
};

export default Resource;
