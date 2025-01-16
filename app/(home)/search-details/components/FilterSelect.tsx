import useApiRequest from "@/app/hooks/useApiRequest";
import React, { Dispatch, FC, SetStateAction } from "react";
import Select, { SingleValue, StylesConfig } from "react-select";

interface FilterSelectProps {
  customStyles: StylesConfig<any, false>;
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  job_type: string;
  setJobType: Dispatch<SetStateAction<string>>;
}

const FilterSelect: FC<FilterSelectProps> = ({
  customStyles,
  location,
  setLocation,
  job_type,
  setJobType,
}) => {
  const { data: jobTypes } = useApiRequest<any>("job-type", "GET");

  const handleFilterChange =
    (key: "location" | "job_type") =>
      (option: SingleValue<{ value: string; label: string; image?: string }>) => {
        if (key === "location") {
          setLocation(option?.value || "");
        } else if (key === "job_type") {
          setJobType(option?.value || "");
        }
      };

  const CustomOption = (props: any) => {
    const { data, innerRef, innerProps, isSelected, isFocused } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className={`flex items-center space-x-2 p-2 ${isSelected ? "bg-blue-500 text-white" : isFocused ? "bg-gray-300" : ""
          }`}
      >
        {data.image && (
          <img src={data.image} alt={data.label} className="w-6 h-6 rounded-full" />
        )}
        <span>{data.label}</span>
      </div>
    );
  };


  const CustomSingleValue = (props: any) => {
    const { data } = props;
    return (
      <div className="flex items-center space-x-2">
        {data.image && (
          <img src={data.image} alt={data.label} className="w-5 h-5 rounded-full" />
        )}
        <span className="text-sm">{data.label}</span>
      </div>
    );
  };

  return (
    <>
      {/* Job Type Filter */}
      <div className="mb-4">
        <h4 className="mb-1 text-sm font-medium">Job Type</h4>
        <Select
          value={
            job_type
              ? jobTypes?.data
                ?.map((item: any) => ({
                  value: item.slag,
                  label: item.name,
                  image: item.image || "",
                }))
                .find((item: any) => item.value === job_type) || null
              : { value: "", label: "All", image: "/icons/all_job_type.jpg" }
          }
          onChange={handleFilterChange("job_type")}
          options={[
            { value: "", label: "All", image: "/icons/all_job_type.jpg" },
            ...(jobTypes?.data?.map((item: any) => ({
              value: item.slag,
              label: item.name,
              image: item.image || "",
            })) || []),
          ]}
          className="capitalize w-full"
          styles={customStyles}
          components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
          isSearchable
        />
      </div>

      {/* Location Filter */}
      <div className="mb-4">
        <h4 className="mb-1 text-sm font-medium">Location</h4>
        <Select
          value={{
            label: location === "" ? "All Locations" : location,
            value: location,
            image: "/icons/location.jpg",
          }}
          onChange={handleFilterChange("location")}
          options={[
            { value: "", label: "All Locations", image: "/icons/location.jpg" },
            { value: "dhaka", label: "Dhaka", image: "/icons/location.jpg" },
            { value: "chittagong", label: "Chittagong", image: "/icons/location.jpg" },
            { value: "rajshahi", label: "Rajshahi", image: "/icons/location.jpg" },
            { value: "khulna", label: "Khulna", image: "/icons/location.jpg" },
            { value: "barisal", label: "Barisal", image: "/icons/location.jpg" },
            { value: "sylhet", label: "Sylhet", image: "/icons/location.jpg" },
            { value: "rangpur", label: "Rangpur", image: "/icons/location.jpg" },
            { value: "mymensingh", label: "Mymensingh", image: "/icons/location.jpg" },
          ]}
          className="capitalize w-full"
          styles={customStyles}
          components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
          isSearchable
        />
      </div>
    </>
  );
};

export default FilterSelect;
