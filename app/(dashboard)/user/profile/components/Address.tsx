"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { EditModal } from "./CommonModal"
import { Pencil, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

const Address = () => {
  const [editAddressOpen, setEditAddressOpen] = useState(false)
  const [formData, setFormData] = useState({
    presentAddress: "",
    permanentAddress: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    console.log("Address data:", formData)
    setEditAddressOpen(false)
  }

  const handleAddEdit = () => {
    setEditAddressOpen(true)
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-left">
            {formData.presentAddress || formData.permanentAddress ? (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 dark:text-slate-200">
                  <span className="block">
                    Present Address: {formData.presentAddress || "N/A"}
                  </span>
                  <span className="block">
                    Permanent Address: {formData.permanentAddress || "N/A"}
                  </span>
                </p>
                <Button onClick={handleAddEdit} variant="outline">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit Address
                </Button>
              </div>
            ) : (
              <div>
                <p className="mt-1 text-sm text-gray-500">
                  No address added yet.
                </p>
                <div className="mt-4">
                  <Button variant="outline" onClick={handleAddEdit}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Address
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {editAddressOpen && (
        <EditModal
          open={editAddressOpen}
          onOpenChange={setEditAddressOpen}
          title={
            formData.presentAddress || formData.permanentAddress
              ? "Edit Address"
              : "Add Address"
          }
        >
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              handleSave()
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="present-address">Present Address*</Label>
              <Input
                id="present-address"
                type="text"
                value={formData.presentAddress}
                onChange={(e) =>
                  handleInputChange("presentAddress", e.target.value)
                }
                placeholder="Enter present address"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="permanent-address">Permanent Address*</Label>
              <Input
                id="permanent-address"
                type="text"
                value={formData.permanentAddress}
                onChange={(e) =>
                  handleInputChange("permanentAddress", e.target.value)
                }
                placeholder="Enter permanent address"
              />
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

export default Address
