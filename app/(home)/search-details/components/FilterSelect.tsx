import React, { Dispatch, FC, SetStateAction } from "react"
import Select, { SingleValue, StylesConfig } from "react-select"

interface FilterSelectProps {
  customStyles: StylesConfig<any, false>
  location: string
  setLocation: Dispatch<SetStateAction<string>>
  job_type: string
  setJobType: Dispatch<SetStateAction<string>>
}

const FilterSelect: FC<FilterSelectProps> = ({
  customStyles,
  location,
  setLocation,
  job_type,
  setJobType,
}) => {
  const handleFilterChange =
    (key: "location" | "job_type") =>
    (option: SingleValue<{ value: string; label: string }>) => {
      if (key === "location") {
        setLocation(option?.value || "")
      } else if (key === "job_type") {
        setJobType(option?.value || "")
      }
    }

  return (
    <>
      {/* Job Type Filter */}
      <div className="mb-4">
        <h4 className="mb-1 text-sm font-medium">Job Type</h4>
        <Select
          value={{
            label: job_type === "" ? "All" : job_type,
            value: job_type,
          }}
          onChange={handleFilterChange("job_type")}
          options={[
            { value: "", label: "All" },
            { value: "full-time", label: "Full-Time" },
            { value: "part-time", label: "Part-Time" },
            { value: "contract", label: "Contract" },
            { value: "internship", label: "Internship" },
          ]}
          className="capitalize"
          styles={customStyles}
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
          }}
          onChange={handleFilterChange("location")}
          options={[
            { value: "", label: "All Locations" },
            { value: "dhaka", label: "Dhaka" },
            { value: "chittagong", label: "Chittagong" },
            { value: "rajshahi", label: "Rajshahi" },
            { value: "khulna", label: "Khulna" },
            { value: "barisal", label: "Barisal" },
            { value: "sylhet", label: "Sylhet" },
            { value: "rangpur", label: "Rangpur" },
            { value: "mymensingh", label: "Mymensingh" },
          ]}
          className="capitalize"
          styles={customStyles}
          isSearchable
        />
      </div>
    </>
  )
}

export default FilterSelect
