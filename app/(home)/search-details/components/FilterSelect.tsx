import React from "react"
import Select, { SingleValue, StylesConfig } from "react-select"

interface FilterSelectProps {
  customStyles: StylesConfig<any, false>
  location: string
  setLocation: React.Dispatch<React.SetStateAction<string>>
  job_type: string
  setJobType: React.Dispatch<React.SetStateAction<string>>
}

const FilterSelect: React.FC<FilterSelectProps> = ({
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
            { value: "chandigarh", label: "Chandigarh" },
            { value: "delhi", label: "Delhi / NCR" },
            { value: "bengaluru", label: "Bengaluru" },
            { value: "new-delhi", label: "New Delhi" },
          ]}
          styles={customStyles}
          isSearchable
        />
      </div>
    </>
  )
}

export default FilterSelect
