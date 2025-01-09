import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";


const JobDetailsSkeleton = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-8 py-6 pb-14 md:gap-4 lg:flex-row px-2">
        <div className="content-container flex-1 space-y-6">
          <Card className="p-6">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <div className="flex gap-2 mb-4">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </Card>
        </div>
        <div className="lg:w-96">
          <Card className="p-6">
            <Skeleton className="h-8 w-1/2 mb-4" />
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          </Card>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default JobDetailsSkeleton;
