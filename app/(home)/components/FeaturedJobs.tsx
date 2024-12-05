import { jobs } from "@/assets/dummyData";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PrimaryBtn from "@/components/PrimaryBtn";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";

const FeaturedJobs: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className={cn("", {
        "bg-[#323b4c]": theme === "dark",
        "bg-transparent": theme === "light",
      })}
    >
      <MaxWidthWrapper className="py-6 md:py-10 lg:py-16">
        <h2
          className={cn(
            "text-xl md:text-3xl font-bold mb-4 flex items-center",
            {
              "text-slate-200": theme === "dark",
              "base-color": theme === "light",
            }
          )}
        >
          <span className="text-red-500 mr-2">🔥</span> Featured Jobs
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={cn(
                "relative flex flex-col md:flex-row items-start p-4 border rounded-sm  overflow-hidden group",
                theme === "dark"
                  ? "bg-gray-900 border-gray-700"
                  : "border-gray-200"
              )}
            >
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-14 h-14 mr-3 rounded-full object-cover"
              />
              <div className="flex-grow">
                <h3
                  className={cn(
                    "font-semibold hover:text-blue-500",
                    theme === "dark" ? "text-slate-200" : "text-gray-900"
                  )}
                >
                  {job.company}
                </h3>
                <p
                  className={cn(
                    "text-xs",
                    theme === "dark" ? "text-slate-300" : "text-gray-800"
                  )}
                >
                  {job.title}
                </p>
              </div>

              <Link
                to={`/jobs/id`}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <PrimaryBtn className="backdrop-blur-md hover:bg-opacity-100">
                  View Details
                </PrimaryBtn>
              </Link>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FeaturedJobs;
