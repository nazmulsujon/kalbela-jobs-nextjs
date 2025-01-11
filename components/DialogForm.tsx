"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { z } from "zod"
import "react-phone-input-2/lib/style.css"
import { Download, Upload } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import useApiRequest from "@/app/hooks/useApiRequest"
import { useUserData } from "@/utils/encript_decript"
import uploadImage from "@/app/hooks/useUploadImage"
import useApiForPost from "@/app/hooks/useApiForPost"
import { toast } from "react-toastify"

type FormData = z.infer<typeof apply_form_Schema>

interface ApplyModalProps {
      slug: string;
      company: string;
      user: any
}

const DailogForm: React.FC<ApplyModalProps> = ({ user, slug, company }) => {
      const {
            register,
            handleSubmit,
            control,
            formState: { errors },
      } = useForm<FormData>({
            resolver: zodResolver(apply_form_Schema),
            defaultValues: {
                  phone: user?.phone_number || "", // Set the default value for the phone field
            },

      })


      const [isUploading, setIsUploading] = useState(false)
      const { data, loading, error } = useApiRequest<any>(
            `user/get-resume?user_id=${user?._id}`,
            "GET"
      )

      const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0]
            if (file) {
                  const validTypes = [
                        "application/pdf",
                        "application/msword",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  ]
                  if (!validTypes.includes(file.type)) {
                        e.target.value = ""
                        toast.error("Invalid file type. Please upload a PDF, DOC, or DOCX file.")
                  }
            }
      }

      const { apiRequest } = useApiForPost()

      const onSubmit = async (apply_data: FormData) => {
            console.log("Form data:", apply_data)
            let resume = null
            if (isUploading) {
                  resume = await uploadImage(apply_data.resume_file[0])
            }
            else {
                  resume = apply_data?.resume_url
            }
            const upload_data = {
                  resume_url: resume,
                  user_phone_number: apply_data.phone,
                  user_email: apply_data.email,
                  job_slug: slug,
                  user_id: user._id,
                  company_id: company,
                  expected_salary: apply_data.salary,
            }

            console.log("upload_data", upload_data);

            if (!user._id) {
                  toast.info('need to login')
            }
            if (!slug) {
                  toast.error('Something went wrong')
            }
            const { data, error } = await apiRequest<any>(
                  `api/v1/user/apply-job`,
                  "POST",
                  upload_data
            )
            if (error) {
                  toast.error
                        (error.message)
            }
            else {
                  toast.success(data.message)
            }


      }

      return (
            <div >
                  <CardHeader>
                        <CardTitle className="text-2xl font-bold">Job Application</CardTitle>
                  </CardHeader>
                  <CardContent className="text-start">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                              <div className="flex items-center space-x-4">
                                    <Avatar className="w-16 h-16">
                                          <AvatarImage src={user?.profile_picture} alt={user?.fullName} />
                                          <AvatarFallback>{user?.fullName?.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                          <h3 className="text-lg font-semibold">{user?.fullName}</h3>
                                          <p className="text-sm text-muted-foreground">{user?.title}</p>
                                    </div>
                              </div>

                              <div className="space-y-4">
                                    <div className="space-y-2">
                                          <Label htmlFor="email">Email Address</Label>
                                          <Input
                                                type="email"
                                                id="email"
                                                placeholder="you@example.com"
                                                defaultValue={user?.email}
                                                {...register("email")}
                                          />
                                          {errors.email && (
                                                <p className="text-sm text-destructive">{errors.email.message}</p>
                                          )}
                                    </div>

                                    <div className="space-y-2">
                                          <Label htmlFor="phone">Phone Number</Label>
                                          <Controller
                                                name="phone"
                                                control={control}
                                                render={({ field }) => (
                                                      <PhoneInput
                                                            country="bd"
                                                            value={field.value}
                                                            onChange={(phone) => field.onChange(phone)}
                                                            inputProps={{
                                                                  id: "phone",
                                                                  className:
                                                                        "w-full p-2 pl-14 border border-gray-300 rounded-md focus:ring focus:ring-indigo-500",
                                                            }}
                                                            containerClass="w-full"
                                                            buttonClass="rounded-l-md"
                                                      />
                                                )}
                                          />
                                          {errors.phone && (
                                                <p className="text-sm text-destructive">{errors.phone.message}</p>
                                          )}
                                    </div>

                                    <div className="space-y-2">
                                          <Label htmlFor="resume">Resume</Label>
                                          {loading ? (
                                                <p>Loading resumes...</p>
                                          ) : (
                                                <div className="space-y-2">
                                                      {data?.data?.length > 0 && (
                                                            <Select
                                                                  disabled={isUploading}
                                                                  onValueChange={(value) => {
                                                                        // @ts-ignore
                                                                        register("resume_url", { value });
                                                                  }}
                                                            >
                                                                  <SelectTrigger>
                                                                        <SelectValue placeholder="Select an existing resume" />
                                                                  </SelectTrigger>
                                                                  <SelectContent>
                                                                        {data?.data?.map((resume: any, index: number) => (
                                                                              <SelectItem key={index} value={resume.resume_url}>
                                                                                    {resume.resume_name}
                                                                              </SelectItem>
                                                                        ))}
                                                                  </SelectContent>
                                                            </Select>
                                                      )}

                                                      <div className="flex items-center space-x-2">
                                                            <input
                                                                  type="checkbox"
                                                                  id="uploadToggle"
                                                                  checked={isUploading}
                                                                  onChange={(e) => setIsUploading(e.target.checked)}
                                                                  className="rounded border-gray-300 text-primary focus:ring-primary"
                                                            />
                                                            <Label htmlFor="uploadToggle" className="text-sm">
                                                                  Upload a new resume
                                                            </Label>
                                                      </div>

                                                      {isUploading && (
                                                            <div className="flex items-center space-x-2">
                                                                  <Input
                                                                        type="file"
                                                                        id="resume"
                                                                        accept=".pdf,.doc,.docx"
                                                                        {...register("resume_file", { onChange: handleResumeChange })}
                                                                  />

                                                            </div>
                                                      )}
                                                </div>
                                          )}
                                          {error && <p className="text-sm text-destructive">Failed to load resumes. Try again later.</p>}
                                    </div>

                                    <div className="space-y-2">
                                          <Label htmlFor="salary">Salary Expectation</Label>
                                          <Input
                                                type="text"
                                                id="salary"
                                                placeholder="Your salary expectation"
                                                {...register("salary")}
                                          />
                                          {errors.salary && (
                                                <p className="text-sm text-destructive">{errors.salary.message}</p>
                                          )}
                                    </div>
                              </div>

                              <Button type="submit" className="w-full">
                                    Submit Application
                              </Button>
                        </form>
                  </CardContent>
            </div>
      )
}

export default DailogForm


const apply_form_Schema = z.object({
      email: z.string().email({ message: "Invalid email address" }),
      phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
      resume_file: z.any().optional(),
      resume_url: z.string().optional(),
      salary: z.string().min(1, { message: "Salary expectation is required" }),
})
