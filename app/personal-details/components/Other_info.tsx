"use client"

import React from "react"
import { otherInfoSchema } from "@/schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
// shadcn/ui label
import CreatableSelect from "react-select/creatable"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// shadcn/ui button
import { Input } from "@/components/ui/input"
// shadcn/ui input
import { Label } from "@/components/ui/label"
import PrimaryBtn from "@/components/PrimaryBtn"
import SecondaryBtn from "@/components/SecondaryBtn"

type SkillOption = {
  value: string
  label: string
}

type OtherInfoFormData = z.infer<typeof otherInfoSchema>

interface OtherInfoProps {
  setPersonalInfo: (value: OtherInfoFormData) => void
  setActiveTab: (value: string) => void
}

const skillsArray: SkillOption[] = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
]

const OtherInfo: React.FC<OtherInfoProps> = ({
  setPersonalInfo,
  setActiveTab,
}) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<OtherInfoFormData>({
    resolver: zodResolver(otherInfoSchema),
    defaultValues: {
      position: "",
      skills: [],
    },
  })

  const onSubmit = (data: OtherInfoFormData) => {
    setPersonalInfo(data)
  }

  return (
    <div className="lg:w-[800px] w-full mx-auto">
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Others Info</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Position Input */}
              <div>
                <Label htmlFor="position">Your Position</Label>
                <Controller
                  name="position"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="position"
                      placeholder="Current Position"
                      {...field}
                    />
                  )}
                />
                {errors.position && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.position.message}
                  </p>
                )}
              </div>

              {/* Skills Multi-Select */}
              <div>
                <Label htmlFor="skills">Skills</Label>
                <Controller
                  name="skills"
                  control={control}
                  render={({ field }) => (
                    <CreatableSelect
                      isMulti
                      options={skillsArray}
                      value={field.value}
                      onChange={(selected) => field.onChange(selected || [])}
                    />
                  )}
                />
                {errors.skills && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.skills.message}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <SecondaryBtn onClick={() => setActiveTab("personal_info")}>
                  Back
                </SecondaryBtn>
                <PrimaryBtn type="submit">Update</PrimaryBtn>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default OtherInfo
