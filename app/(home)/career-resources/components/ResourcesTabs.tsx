'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import useApiRequest from "@/app/hooks/useApiRequest";
import Resource from "./Resource";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ResourcesTabs = () => {
  const {
    data: careerResources,
    loading,
    error,
  } = useApiRequest<any>("resource/category", "GET");

  const queryParams = useSearchParams();
  const router = useRouter();

  const resourceSlugFromQuery = queryParams.get("resource") || 'resume-tips';
  const [selectedTab, setSelectedTab] = useState(resourceSlugFromQuery);


  useEffect(() => {
    setSelectedTab(resourceSlugFromQuery);
  }, [resourceSlugFromQuery]);


  const handleTabChange = (slug: string) => {
    setSelectedTab(slug);
    router.push(`?resource=${slug}`);
  };

  if (loading && !careerResources?.data?.length) {
    return (
      <div>
        <Skeleton className="h-6 w-32 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading resources.</div>;
  }

  return (
    <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
      <TabsList>
        {careerResources?.data?.map((resource: any) => (
          <TabsTrigger key={resource._id} value={resource.slug}>
            {resource.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {careerResources?.data?.map((resource: any) => (
        <TabsContent key={resource._id} value={resource.slug}>
          <Resource resource={resource} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ResourcesTabs;
