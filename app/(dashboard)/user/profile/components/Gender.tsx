"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { EditModal } from "./CommonModal"
import { Edit2, Pencil, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


const Gender = () => {
  const [editGenderOpen, setEditGenderOpen] = useState(false)
  const [formData, setFormData] = useState({
    gender: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    console.log("Gender data:", formData)
    setEditGenderOpen(false)
  }

  const handleAddEdit = () => {
    setEditGenderOpen(true)
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Gender</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-left">
            {formData.gender ? (
              <div className="space-y-2">
                <p className="text-lg font-semibold">{formData.gender}</p>
                <Button onClick={handleAddEdit} variant="outline">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit Gender
                </Button>
              </div>
            ) : (
              <div>
                <p className="mt-1 text-sm text-gray-500">
                  No data added yet.
                </p>
                <div className="mt-4">
                  <Button variant="outline" onClick={handleAddEdit}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Gender
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {editGenderOpen && (
        <EditModal
          open={editGenderOpen}
          onOpenChange={setEditGenderOpen}
          title={formData.gender ? "Edit Gender" : "Add Gender"}
        >
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              handleSave()
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="gender">Gender*</Label>
              <Select
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, gender: value }))
                }
                value={formData.gender}
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Transgender">Transgender</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-right">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </EditModal>
      )}
    </div>
  )
}

export default Gender
