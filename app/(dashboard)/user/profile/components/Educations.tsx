import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap, Pencil } from "lucide-react";
import { useState } from "react";
import { EditModal } from "./CommonModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DEGREES = ["Bachelor's", "Master's", "Ph.D.", "Associate's", "Diploma", "HSC", "SSC", "JSC", "PSC", "Other"]
const YEARS = Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString())

const Educations = () => {

      const [editEducationOpen, setEditEducationOpen] = useState(false)
      const [formData, setFormData] = useState({
            country: '',
            universityName: '',
            degree: '',
            major: '',
            graduationYear: '',
      })

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log(formData, "form data")
      }

      return (

            <div>
              <h3 className="font-medium">Uttara University</h3>
              <p className="text-sm text-muted-foreground">B.Sc. Degree, cse</p>
              <p className="text-sm text-muted-foreground">Graduated 2018</p>
            </div>
          </div>
          <Button variant="outline" className="gap-2" onClick={() => setEditEducationOpen(true)}>
            <Pencil className="h-4 w-4" />
            Edit education
          </Button>
        </CardContent>
      </Card>


                  <EditModal
                        open={editEducationOpen}
                        onOpenChange={setEditEducationOpen}
                        title="Edit Education"
                        description="Update your education information"
                  >
                        <form onSubmit={handleSubmit} className="space-y-6">


          {/* University Name */}
          <div className="grid gap-2">
            <Label htmlFor="universityName" className="font-medium">
              College/University Name
            </Label>
            <Input
              id="universityName"
              value={formData.universityName}
              onChange={(e) => setFormData((prev) => ({ ...prev, universityName: e.target.value }))}
              placeholder="Enter university name"
              className="w-full"
            />
          </div>

          {/* Degree and Major */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Degree Selection */}
            <div className="grid gap-2">
              <Label htmlFor="degree" className="font-medium">
                Degree
              </Label>
              <Select
                value={formData.degree}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, degree: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select degree" />
                </SelectTrigger>
                <SelectContent>
                  {DEGREES.map((degree) => (
                    <SelectItem key={degree} value={degree.toLowerCase()}>
                      {degree}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Major */}
            <div className="grid gap-2">
              <Label htmlFor="major" className="font-medium">
                Major
              </Label>
              <Input
                id="major"
                value={formData.major}
                onChange={(e) => setFormData((prev) => ({ ...prev, major: e.target.value }))}
                placeholder="Enter major"
                className="w-full"
              />
            </div>
          </div>


                              {/* Graduation Year */}
                              <div className="grid gap-2">
                                    <Label htmlFor="graduationYear" className="font-medium">
                                          Year of Graduation
                                    </Label>
                                    <Input
                                          id="graduationYear"
                                          value={formData.graduationYear}
                                          onChange={(e) => setFormData((prev) => ({ ...prev, graduationYear: e.target.value }))}
                                          placeholder="Enter year of graduation"
                                          className="w-full"
                                    />
                              </div>


          <div className="grid gap-2">
            <Label htmlFor="major" className="font-medium">
              GPA or CGPA
            </Label>
            <Input
              id="major"
              value={formData.major}
              onChange={(e) => setFormData((prev) => ({ ...prev, major: e.target.value }))}
              placeholder="Enter major"
              className="w-full"
            />
          </div>

          {/* Footer */}
          <DialogFooter className="pt-4">
            <Button type="submit" className="w-full sm:w-auto">
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </EditModal>


    </div>
  );
};

export default Educations;
