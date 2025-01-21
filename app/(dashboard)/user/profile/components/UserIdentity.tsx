"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { EditModal } from "./CommonModal"
import Select, { SingleValue } from "react-select"
import { CalendarIcon, Pencil, Plus } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { cn, selectCustomStyles } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"

type CountryOption = {
  value: string
  label: string
}

const fetchNationalities = async (): Promise<CountryOption[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all")
  const data = await response.json()
  return data.map((country: any) => ({
    value: country.cca2, // Country Code (ISO 3166-1 alpha-2)
    label: country.name.common // Country Name
  }))
}

const UserIdentity = () => {
  const { theme } = useTheme()
  const customStyles = selectCustomStyles(theme || "light")
  const [editNationalityOpen, setEditNationalityOpen] = useState(false)
  const [selectedNationality, setSelectedNationality] = useState<CountryOption | null>(null)


  const [nidImage, setNidImage] = useState<File | null>(null)
  const [nidNumber, setNidNumber] = useState("")
  const [nidIssueDate, setNidIssueDate] = useState<Date | null>(null)

  const { data: nationalities = [], isLoading, isError } = useQuery({
    queryKey: ["nationalities"],
    queryFn: fetchNationalities,
  })

  const handleSave = () => {
    if (selectedNationality) {
      console.log("Selected Nationality:", selectedNationality.label)
      console.log("NID/Passport/Birth Certificate Image:", nidImage)
      console.log("NID/Passport/Birth Certificate Number:", nidNumber)
      console.log("NID/Passport/Birth Certificate Issue Date:", nidIssueDate)
      setEditNationalityOpen(false)
    }
  }

  const handleAddEdit = () => {
    setEditNationalityOpen(true)
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Nationality</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-left">
            {selectedNationality ? (
              <div className="space-y-2">
                <p className="text-lg font-semibold">{selectedNationality.label}</p>
                <Button onClick={handleAddEdit} variant="outline">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            ) : (
              <div>
                <p className="mt-1 text-sm text-gray-500">No nationality added yet.</p>
                <div className="mt-6">
                  <Button variant="outline" onClick={handleAddEdit}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Nationality
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {editNationalityOpen && (
        <EditModal
          open={editNationalityOpen}
          onOpenChange={setEditNationalityOpen}
          title={selectedNationality ? "Edit Nationality" : "Add Nationality"}
        >
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              handleSave()
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="nationality">Select Nationality*</Label>
              <div>
                {isLoading ? (
                  <p>Loading...</p>
                ) : isError ? (
                  <p className="text-red-500">Failed to load nationalities</p>
                ) : (
                  <Select
                    id="nationality"
                    options={nationalities as CountryOption[]}
                    value={selectedNationality}
                    onChange={(option: SingleValue<CountryOption>) => setSelectedNationality(option)}
                    isSearchable
                    placeholder="Search and select nationality..."
                    menuPortalTarget={document.body}
                    styles={customStyles}
                  />
                )}
              </div>
            </div>

            {/* NID/Passport/Birth Certificate Image Field */}
            <div className="space-y-2">
              <Label htmlFor="nid-image">NID/Passport/Birth Certificate Image</Label>
              <Input
                id="nid-image"
                type="file"
                accept="image/*"
                onChange={(e) => setNidImage(e.target.files ? e.target.files[0] : null)}
              />
            </div>

            {/* NID/Passport/Birth Certificate Number Field */}
            <div className="space-y-2">
              <Label htmlFor="nid-number">NID/Passport/Birth Certificate No.</Label>
              <Input
                id="nid-number"
                type="text"
                value={nidNumber}
                onChange={(e) => setNidNumber(e.target.value)}
                placeholder="Enter NID/Passport/Birth Certificate No."
              />
            </div>

            {/* NID/Passport/Birth Certificate Issue Date Field */}
            <div className="space-y-2 flex flex-col">
              <Label htmlFor="nid-issue-date">NID/Passport/Birth Certificate Issue Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal",
                      !nidIssueDate && "text-muted-foreground"
                    )}
                  >
                    {nidIssueDate ? (
                      format(nidIssueDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    // @ts-ignore
                    selected={nidIssueDate}
                    onChange={setNidIssueDate}
                    placeholder="Select issue date"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="text-right">
              <Button type="submit" disabled={!selectedNationality}>
                Save
              </Button>
            </div>
          </form>
        </EditModal>
      )}
    </div>
  )
}

export default UserIdentity
