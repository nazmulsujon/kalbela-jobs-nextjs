import React, { useState } from "react"
import Select, { SingleValue, StylesConfig } from "react-select"

interface FilterSelectProps {
  customStyles: StylesConfig<any, false>
}

interface Filters {
  workMode: string
  location: string
  jobType: string
  companyType: string
  experience: string
  sortOrder: string
}

const FilterSelect: React.FC<FilterSelectProps> = ({ customStyles }) => {
  const [filters, setFilters] = useState<Filters>({
    workMode: "all",
    location: "all",
    jobType: "all",
    companyType: "all",
    experience: "all",
    sortOrder: "relevance",
  })

  const handleFilterChange =
    (key: keyof Filters) =>
    (option: SingleValue<{ value: string; label: string }>) => {
      setFilters((prev) => ({
        ...prev,
        [key]: option?.value || "all",
      }))
    }

  console.log("filters", filters)

  return (
    <React.Fragment>
      {/* Work Mode Filter */}
      <div className="mb-4">
        <h4 className="text-sm mb-1 font-medium">Work Mode</h4>
        <Select
          value={{ label: filters.workMode, value: filters.workMode }}
          onChange={handleFilterChange("workMode")}
          options={[
            { value: "all", label: "All" },
            { value: "office", label: "Work from Office" },
            { value: "remote", label: "Remote" },
            { value: "hybrid", label: "Hybrid" },
          ]}
          styles={customStyles}
          isSearchable
        />
      </div>

      {/* Job Type Filter */}
      <div className="mb-4">
        <h4 className="text-sm mb-1 font-medium">Job Type</h4>
        <Select
          value={{ label: filters.jobType, value: filters.jobType }}
          onChange={handleFilterChange("jobType")}
          options={[
            { value: "all", label: "All" },
            { value: "full-time", label: "Full-Time" },
            { value: "part-time", label: "Part-Time" },
            { value: "contract", label: "Contract" },
            { value: "internship", label: "Internship" },
          ]}
          styles={customStyles}
          isSearchable
        />
      </div>

      {/* Company Type Filter */}
      <div className="mb-4">
        <h4 className="text-sm mb-1 font-medium">Company Type</h4>
        <Select
          value={{ label: filters.companyType, value: filters.companyType }}
          onChange={handleFilterChange("companyType")}
          options={[
            { value: "all", label: "All" },
            { value: "startup", label: "Startup" },
            { value: "corporate", label: "Corporate" },
          ]}
          styles={customStyles}
          isSearchable
        />
      </div>

      {/* Experience Filter */}
      <div className="mb-4">
        <h4 className="text-sm mb-1 font-medium">Experience</h4>
        <Select
          value={{ label: filters.experience, value: filters.experience }}
          onChange={handleFilterChange("experience")}
          options={[
            { value: "all", label: "All" },
            { value: "entry", label: "Entry Level" },
            { value: "mid", label: "Mid Level" },
            { value: "senior", label: "Senior Level" },
          ]}
          styles={customStyles}
          isSearchable
        />
      </div>

      {/* Location Filter */}
      <div className="mb-4">
        <h4 className="text-sm mb-1 font-medium">Location</h4>
        <Select
          value={{ label: filters.location, value: filters.location }}
          onChange={handleFilterChange("location")}
          options={[
            { value: "all", label: "All Locations" },
            { value: "chandigarh", label: "Chandigarh" },
            { value: "delhi", label: "Delhi / NCR" },
            { value: "bengaluru", label: "Bengaluru" },
            { value: "new-delhi", label: "New Delhi" },
          ]}
          styles={customStyles}
          menuPlacement="top"
          isSearchable
        />
      </div>
    </React.Fragment>
  )
}

export default FilterSelect
