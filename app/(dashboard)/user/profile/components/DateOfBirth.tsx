"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { EditModal } from "./CommonModal"
import { Calendar } from "@/components/ui/calendar"
import { Pencil, Plus } from "lucide-react"
import { format, addYears, subYears } from "date-fns"

const DateOfBirth = () => {
  const [editDobOpen, setEditDobOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [currentDate, setCurrentDate] = useState(new Date())

  const handleSave = () => {
    if (selectedDate) {
      console.log("Selected Date of Birth:", format(selectedDate, "dd MMM, yyyy"))
      setEditDobOpen(false)
    }
  }

  const handleAddEdit = () => {
    setEditDobOpen(true)
  }

  const handleYearChange = (direction: "prev" | "next") => {
    setCurrentDate((prevDate) =>
      direction === "prev" ? subYears(prevDate, 1) : addYears(prevDate, 1)
    )
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Date of Birth</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-left">
            {selectedDate ? (
              <div className="space-y-2">
                <p className="text-lg font-semibold">
                  {format(selectedDate, "dd MMM, yyyy")}
                </p>
                <Button onClick={handleAddEdit} variant="outline">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            ) : (
              <div>
                <p className="mt-1 text-sm text-gray-500">No data added yet.</p>
                <div className="mt-6">
                  <Button variant="outline" onClick={handleAddEdit}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Date of Birth
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {editDobOpen && (
        <EditModal
          open={editDobOpen}
          onOpenChange={setEditDobOpen}
          title={selectedDate ? "Edit Date of Birth" : "Add Date of Birth"}
        >
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              handleSave()
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="calendar">Select Date of Birth*</Label>
              <div className="p-4 border rounded-md">
                {/* Year Navigation Controls */}
                <div className="flex items-center justify-between mb-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleYearChange("prev")}
                  >
                    Previous Year
                  </Button>
                  <span className="text-lg font-semibold">
                    {format(currentDate, "yyyy")}
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleYearChange("next")}
                  >
                    Next Year
                  </Button>
                </div>
                {/* Calendar */}
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  defaultMonth={currentDate}
                  key={currentDate.toISOString()}
                />
              </div>
            </div>
            <div className="text-right">
              <Button type="submit" disabled={!selectedDate}>
                Save
              </Button>
            </div>
          </form>
        </EditModal>
      )}
    </div>
  )
}

export default DateOfBirth
