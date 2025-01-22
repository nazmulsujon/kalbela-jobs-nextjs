"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EditModal } from "./CommonModal";
import Select, { SingleValue } from "react-select";
import { CalendarIcon, Pencil, Plus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn, selectCustomStyles } from "@/lib/utils";
import { useTheme } from "next-themes";

type CountryOption = {
  value: string;
  label: string;
};

const fetchNationalities = async (): Promise<CountryOption[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data.map((country: any) => ({
    value: country.cca2,
    label: country.name.common,
  }));
};

const IdTypeOptions = [
  { label: "Passport", value: "passport" },
  { label: "NID", value: "NID" },
  { label: "Birth Certificate", value: "birth_certificate" },
];

const UserIdentity = () => {
  const { theme } = useTheme();
  const customStyles = selectCustomStyles(theme || "light");
  const [editNationalityOpen, setEditNationalityOpen] = useState(false);
  const [selectedNationality, setSelectedNationality] =
    useState<CountryOption | null>(null);
  const [identificationType, setIdentificationType] = useState<
    { label: string; value: string } | null
  >(null);
  const [nidImage, setNidImage] = useState<File | null>(null);
  const [nidNumber, setNidNumber] = useState("");
  const [nidIssueDate, setNidIssueDate] = useState<Date | null>(null);

  const { data: nationalities = [], isLoading, isError } = useQuery({
    queryKey: ["nationalities"],
    queryFn: fetchNationalities,
  });

  const handleSave = () => {
    console.log("Selected Nationality:", selectedNationality?.label);
    console.log("Identification Type:", identificationType?.label);
    console.log("NID Image:", nidImage);
    console.log("NID Number:", nidNumber);
    console.log("Issue Date:", nidIssueDate);
    setEditNationalityOpen(false);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Identity</CardTitle>
        </CardHeader>
        <CardContent>
          {selectedNationality || nidNumber || nidImage || nidIssueDate ? (
            <div className="space-y-2 text-gray-600 dark:text-slate-200">
              <p className="text-sm font-semibold">Nationality: {selectedNationality?.label ? selectedNationality?.label : "N/A"}</p>
              <p className="text-sm font-semibold">NID Number: {nidNumber ? nidNumber : "N/A"}</p>
              {
                nidIssueDate ? <p className="text-sm font-semibold">
                  ID Issue Date:  {format(nidIssueDate, "dd MMM, yyyy")}
                </p> : <span className="text-sm font-semibold"> ID Issue Date: N/A</span>
              }
              <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-FiPMV4405HDPHTbRP2tbxaK9ysV02HDLA&s'} alt="NID image" />
              </div>
              <Button onClick={() => setEditNationalityOpen(true)} variant="outline">
                <Pencil className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-500">No identity added yet.</p>
              <Button
                onClick={() => setEditNationalityOpen(true)}
                variant="outline"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Identity
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {editNationalityOpen && (
        <EditModal
          open={editNationalityOpen}
          onOpenChange={setEditNationalityOpen}
          title="Edit Identity"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="space-y-6"
          >
            <div>
              <Label className="mb-2" htmlFor="nationality">Select Nationality</Label>
              {isLoading ? (
                <p>Loading...</p>
              ) : isError ? (
                <p className="text-red-500">Failed to load nationalities</p>
              ) : (
                <Select
                  id="nationality"
                  className="text-sm"
                  options={nationalities}
                  value={selectedNationality}
                  onChange={(option) =>
                    setSelectedNationality(option as CountryOption)
                  }
                  isSearchable
                  placeholder="Select nationality"
                  styles={customStyles}
                />
              )}
            </div>

            <div>
              <Label className="mb-2" htmlFor="id-type">Identification Type</Label>
              <Select
                id="id-type"
                className="text-sm"
                options={IdTypeOptions}
                value={identificationType}
                onChange={(option) => setIdentificationType(option)}
                isSearchable
                placeholder="Select ID type"
                styles={customStyles}
              />
            </div>

            <div>
              <Label className="mb-2" htmlFor="nid-image">Upload Image</Label>
              <Input
                id="nid-image"
                className="text-sm"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setNidImage(e.target.files ? e.target.files[0] : null)
                }
              />
            </div>

            <div>
              <Label className="mb-2" htmlFor="nid-number">ID Number</Label>
              <Input
                id="nid-number"
                className="text-sm"
                value={nidNumber}
                onChange={(e) => setNidNumber(e.target.value)}
                placeholder="Enter ID number"
              />
            </div>

            <div className="flex flex-col justify-start">
              <Label className="mb-2" htmlFor="issue-date">Issue Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="text-sm justify-start">
                    <CalendarIcon className="mr-2" />
                    {nidIssueDate
                      ? format(nidIssueDate, "PPP")
                      : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    className="text-sm"
                    mode="single"
                    selected={nidIssueDate as Date}
                    onSelect={setNidIssueDate as any}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={!selectedNationality}>
                Save
              </Button>
            </div>
          </form>
        </EditModal>
      )}
    </div>
  );
};

export default UserIdentity;
