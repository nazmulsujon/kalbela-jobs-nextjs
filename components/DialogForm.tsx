"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { z } from "zod"

import "react-phone-input-2/lib/style.css"
import { apply_form_Schema } from "@/schema/schema"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PrimaryBtn from "@/components/PrimaryBtn"

type FormData = z.infer<typeof apply_form_Schema>

const DailogForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(apply_form_Schema),
  })

  const onSubmit = (data: FormData) => {
    console.log("checked", data)
  }

  const [allFile, setAllFile] = useState([])
  console.log()
  return (
    <div className="mx-auto mt-7 h-[500px] w-full overflow-y-auto rounded">
      <div className="py-12">
        <div className="space-y-4">
          {/* Profile Section */}
          <div className="ml-5 flex flex-col items-center gap-4 md:flex-row">
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Rifazul Islam"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Elias Sokar
              </h3>
              <p className="text-md text-gray-700 dark:text-white">
                Mern Stack Developer || React.js Developer
              </p>
              <p className="text-sm text-gray-600 dark:text-white">
                Dinajpur, Rajshahi, Bangladesh
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative space-y-3 px-4 py-5 sm:p-6"
          >
            <div>
              <Label
                className="text-left text-sm font-semibold text-gray-800 dark:text-white"
                htmlFor="email"
              >
                Email Address
              </Label>
              <Input
                className="border-[0.5px] border-gray-900"
                type="email"
                id="email"
                placeholder="Elias@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label className="text-left text-sm font-semibold text-gray-800 dark:text-white">
                Phone Number
              </Label>
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
                      backgroundColor: "transparent",
                      color: "black",
                      border: "1px solid black",
                    }}
                    containerClass="dark:bg-gray-800"
                    inputClass="dark:text-white"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <Label
                className="text-md font-semibold text-gray-800"
                htmlFor="image"
              >
                Resume
              </Label>
              <Input
                className="border-[0.5px] border-gray-900"
                type="file"
                id="resume"
                accept="resume/*"
                onChange={(e) =>
                  setValue("resume", e.target.files?.[0] || null)
                }
              />
              {errors.resume && (
                <p className="text-red-500">{errors.resume.message}</p>
              )}
            </div>
            {/* Resume Upload  */}

            {/* Additional Questions */}
            <div>
              <p className="text-lg font-bold">Additional Question</p>
              <Label
                className="text-md text-left font-semibold text-gray-800 dark:text-white"
                htmlFor="age"
              >
                your age
              </Label>
              <Input
                className="border-[0.5px] border-gray-900"
                type="text"
                id="age"
                placeholder="your age"
                {...register("age")}
              />
              {errors.age && (
                <p className="text-red-500">{errors.age.message}</p>
              )}
            </div>

            <div>
              <Label
                className="text-md text-left font-semibold text-gray-800 dark:text-white"
                htmlFor="salary"
              >
                your Salary Expectation?
              </Label>
              <Input
                className="border-[0.5px] border-gray-900"
                type="text"
                id="salary"
                placeholder="your Salary Expectation"
                {...register("salary")}
              />
              {errors.salary && (
                <p className="text-red-500">{errors.salary.message}</p>
              )}
            </div>
            <div className="absolute -bottom-10">
              <PrimaryBtn type="submit">Apply Now</PrimaryBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DailogForm
