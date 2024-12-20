"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { z } from "zod"

import "react-phone-input-2/lib/style.css"
import { apply_form_Schema } from "@/schema/schema"
import { Download } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import PrimaryBtn from "./PrimaryBtn"

type FormData = z.infer<typeof apply_form_Schema>

const DailogForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(apply_form_Schema),
  })

  const onSubmit = (data: FormData) => {
    const formData = new FormData()
    formData.append("email", data.email)
    formData.append("phone", data.phone)
    if (data.resume instanceof File) {
      formData.append("resume", data.resume)
    }
    formData.append("age", data.age)
    formData.append("salary", data.salary)

    console.log("Form data:", Object.fromEntries(formData))
    addFile(data.resume)
  }

  const [resumeStore, setResumeStore] = useState([
    { name: "react.jsResume.pdf(Demo)" },
    {},
  ])

  const addFile = (newFile: string) => {
    setResumeStore([...resumeStore, { file: newFile }])
  }
  // console.log("checked resume", resumeStore)

  return (
    <div className="mx-auto mt-7 h-[500px] w-full max-w-2xl overflow-y-auto rounded bg-white p-6 dark:bg-gray-800">
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Elias Sokar"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Elias Sokar
            </h3>
            <p className="text-md text-gray-700 dark:text-gray-300">
              Mern Stack Developer || React.js Developer
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dinajpur, Rajshahi, Bangladesh
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {/* Email Input field */}
          <div>
            <Label
              htmlFor="email"
              className="text-md border-gray-900 font-medium"
            >
              Email Address
            </Label>
            <Input
              className="border-[0.5px] border-gray-900"
              type="email"
              id="email"
              placeholder="elias@example.com"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Phone number Input field */}
          <div>
            <Label
              htmlFor="phone"
              className="text-md border-gray-900 font-medium"
            >
              Phone Number
            </Label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  country={"bd"}
                  inputProps={{
                    id: "phone",
                    "aria-invalid": errors.phone ? "true" : "false",
                  }}
                  placeholder="+880 177 503 ----"
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  inputStyle={{
                    width: "100%",
                    height: "40px",
                    fontSize: "16px",
                    paddingLeft: "48px",
                    borderRadius: "0.375rem",
                    backgroundColor: "transparent",
                    color: "inherit",
                    border: "1px solid black",
                  }}
                  containerClass="dark:bg-gray-800"
                  inputClass="dark:text-white"
                  buttonClass="dark:bg-gray-700"
                  dropdownClass="dark:bg-gray-700 dark:text-white"
                />
              )}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Resume file select Area Input field start*/}
          <RadioGroup defaultValue="option-one">
            <Label htmlFor="resume" className="text-lg font-bold">
              Resume
            </Label>
            {resumeStore.slice().map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between space-x-2 border-2 border-blue-600 px-3 py-2"
              >
                <Label htmlFor={`option-${index}`}>
                  {item?.name || "No file name"}
                </Label>
                <div className="flex items-center gap-3">
                  <Download className="h-4 w-4" />

                  <RadioGroupItem
                    value={item.name || `option-${index}`}
                    id={`option-${index}`}
                  />
                </div>
              </div>
            ))}
          </RadioGroup>
          <div>
            <Label
              htmlFor="resume"
              className="text-md border-gray-900 font-medium"
            >
              Resume (PDF or DOC only)
            </Label>

            <Input
              className="border-[0.5px] border-gray-900"
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              {...register("resume", {
                onChange: (e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    const validTypes = [
                      "application/pdf",
                      "application/msword",
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    ]
                    if (!validTypes.includes(file.type)) {
                      e.target.value = ""
                    }
                  }
                },
              })}
            />
            {/* {errors.resume && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.resume.message}
              </p>
            )} */}
          </div>
          {/* Resume file select Area Input field  end*/}

          {/* Additional Questions Area */}
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              Additional Questions
            </h4>
            <div>
              <Label
                htmlFor="age"
                className="text-md border-gray-900 font-medium"
              >
                Your Age
              </Label>
              <Input
                className="border-[0.5px] border-gray-900"
                type="text"
                id="age"
                placeholder="Your age"
                {...register("age")}
                aria-invalid={errors.age ? "true" : "false"}
              />
              {errors.age && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.age.message}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="salary"
                className="text-md border-gray-900 font-medium"
              >
                Your Salary Expectation
              </Label>
              <Input
                className="border-[0.5px] border-gray-900"
                type="text"
                id="salary"
                placeholder="Your salary expectation"
                {...register("salary")}
                aria-invalid={errors.salary ? "true" : "false"}
              />
              {errors.salary && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.salary.message}
                </p>
              )}
            </div>
          </div>

          <div className="pt-3">
            <PrimaryBtn type="submit" className="w-1/3 py-1.5">
              Submit Application
            </PrimaryBtn>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DailogForm
