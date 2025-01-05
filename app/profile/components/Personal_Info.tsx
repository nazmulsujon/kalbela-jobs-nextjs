"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { z } from "zod"

import "react-phone-input-2/lib/style.css"
import { personal_info_formSchema } from "@/schema/schema"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import PrimaryBtn from "@/components/PrimaryBtn"

interface PersonalDetailsFormProps {
  setPersonalInfo: (value: any) => void
  setActiveTab: (value: string) => void
}

type FormData = z.infer<typeof personal_info_formSchema>

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  setPersonalInfo,
  setActiveTab,
}) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(personal_info_formSchema),
  })

  const onSubmit = (data: FormData) => {
    setPersonalInfo(data)
    setActiveTab("other_info")
  }

  return (
    <div className="lg:w-[800px] w-full mx-auto">
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-[800px] w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Personal Details
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-4 py-5 sm:p-6 space-y-6"
          >
            <div>
              <Label className="text-gray-800" htmlFor="fullName">
                Full Name
              </Label>
              <Input
                type="text"
                id="fullName"
                placeholder="Mir Sorkar"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <Label className="text-gray-800" htmlFor="email">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="mir@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label className="text-gray-800" htmlFor="currentAddress">
                Current Address
              </Label>
              <Textarea
                id="currentAddress"
                placeholder="Current Address"
                rows={3}
                {...register("currentAddress")}
              />
              {errors.currentAddress && (
                <p className="text-red-500">{errors.currentAddress.message}</p>
              )}
            </div>

            <div>
              <Label className="text-gray-800">Phone</Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    country={"bd"}
                    placeholder="+880 177 503 ----"
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                    inputStyle={{
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <Label className="text-gray-800" htmlFor="image">
                Profile Image
              </Label>
              <Input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => setValue("image", e.target.files?.[0] || null)}
              />
              {errors.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
            </div>

            <div>
              <Label className="text-gray-800" htmlFor="gender">
                Gender
              </Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.gender && (
                <p className="text-red-500">{errors.gender.message}</p>
              )}
            </div>

            <div>
              <Label className="text-gray-800" htmlFor="dateOfBirth">
                Date of Birth
              </Label>
              <Input
                type="date"
                id="dateOfBirth"
                {...register("dateOfBirth")}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500">{errors.dateOfBirth.message}</p>
              )}
            </div>

            <PrimaryBtn type="submit" className="w-1/5">
              Update
            </PrimaryBtn>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetailsForm
