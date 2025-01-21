"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import {
  Award,
  Book,
  Contact,
  Edit,
  Eye,
  GraduationCap,
  LinkIcon,
  Mail,
  MapPin,
  Pencil,
  Plus,
  Share2,
  Upload,
  Video,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { EditModal } from "./CommonModal"
import "react-phone-input-2/lib/style.css"
import { set_user_data, useUserData } from "@/utils/encript_decript"
import { Controller, useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import CreatableSelect from "react-select/creatable"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import useApiForPost from "@/app/hooks/useApiForPost"
import useUploadImage from "@/app/hooks/useUploadImage"
import uploadImage from "@/app/hooks/useUploadImage"

import About from "./About"
import Certifications from "./Certifications"
import Educations from "./Educations"
import Experience from "./Experience"
import Resume from "./Resume"
import Skills from "./Skills"
import Gender from "./Gender"
import DateOfBirth from "./DateOfBirth"
import UserIdentity from "./UserIdentity"

export default function ProfilePage() {
  const [user, setUserData] = useUserData()
  const [editDetailsOpen, setEditDetailsOpen] = useState(false)
  const [editNameOpen, setEditNameOpen] = useState(false)
  const [editImageOpen, setEditImageOpen] = useState(false)
  const [editLanguagesOpen, setEditLanguagesOpen] = useState(false)
  const [image, setImage] = useState(null)
  const [image_file, setImageFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error_message, set_error_message] = useState("")

  const [name, setName] = useState(user?.fullName)
  const [languages, setLanguages] = useState(user?.languages || [])
  const [new_language, setNewLanguage] = useState(user?.languages)
  const [editContactOpen, setEditContactOpen] = useState(false)
  const [phone, setPhone] = useState<any>(user?.phone)
  const [email, setEmail] = useState(user?.email)

  useEffect(() => {
    setNewLanguage(user?.languages)
  }, [user?.languages])

  // Handle change for CreatableSelect
  const handleLanguageChange = (selectedOptions: any) => {
    const selectedLanguages = selectedOptions.map((item: any) => item.value)
    setLanguages(selectedLanguages)
    setNewLanguage(selectedLanguages)
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImageFile(file as any)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as any)
      }
      reader.readAsDataURL(file)
    }
  }

  const { apiRequest } = useApiForPost()

  const profile_image_update = async () => {
    setLoading(true)
    if (image_file) {
      const image = await uploadImage(image_file)
      if (image) {
        const { data, error } = await apiRequest<any>(
          `api/v1/user/update-profile?id=${user?._id}`,
          "PUT",
          {
            profile_picture: image,
          }
        )

        setLoading(false)
        if (error) {
          set_error_message(error.message)
          return
        }
        if (data) {
          set_user_data(data.data)
          setUserData(data.data)
          set_error_message("")
          setEditImageOpen(false)
        }
      }
    }
  }

  const user_name_update = async () => {
    setLoading(true)
    const { data, error } = await apiRequest<any>(
      `api/v1/user/update-profile?id=${user?._id}`,
      "PUT",
      {
        fullName: name,
      }
    )

    setLoading(false)
    if (error) {
      set_error_message(error.message)
      return
    }
    if (data) {
      set_user_data(data.data)
      setUserData(data.data)
      set_error_message("")
      setEditNameOpen(false)
    }
  }

  const user_languages_update = async () => {
    setLoading(true)
    const { data, error } = await apiRequest<any>(
      `api/v1/user/update-profile?id=${user?._id}`,
      "PUT",
      {
        languages,
      }
    )

    setLoading(false)
    if (error) {
      set_error_message(error.message)
      return
    }
    if (data) {
      set_user_data(data.data)
      setUserData(data.data)
      set_error_message("")
      setEditLanguagesOpen(false)
    }
  }

  const update_contact = async () => {
    setLoading(true)
    const { data, error } = await apiRequest<any>(
      `api/v1/user/update-profile?id=${user?._id}`,
      "PUT",
      {
        phone_number: `+${phone}`,
        email,
      }
    )

    setLoading(false)
    if (error) {
      set_error_message(error.message)
      return
    }
    if (data) {
      set_user_data(data.data)
      setUserData(data.data)
      set_error_message("")
      setEditContactOpen(false)
    }
  }

  return (
    <div>
      <div className="mb-14 grid grid-cols-1 gap-6 lg:mb-0 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          {/* Header Section */}
          {user ? (
            <div className="flex items-center gap-4">
              <div
                className="group relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-3xl text-white"
                onClick={() => setEditImageOpen(true)}
              >
                {user?.profile_picture ? (
                  <Image
                    src={user?.profile_picture}
                    alt="Bright Future Logo"
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full"
                  />
                ) : (
                  <span className="flex items-center justify-center">
                    {user?.fullName?.charAt(0).toUpperCase()}
                  </span>
                )}

                {/* Update text on hover */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-medium text-white">Update</span>
                </div>
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">
                      {user?.fullName ? user?.fullName : "Update Your Name"}
                    </h1>
                    <Pencil
                      onClick={() => setEditNameOpen(true)}
                      className="h-4 w-4"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Contact className="h-4 w-4" />
                    {user?.phone_number
                      ? user?.phone_number
                      : "Update Phone Number"}
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="flex size-1 items-center rounded-full bg-gray-500"></div>
                    <Mail className="h-4 w-4" />
                    {user?.email ? user?.email : "Update Email"}
                  </div>
                  <Pencil
                    onClick={() => setEditContactOpen(true)}
                    className="h-4 w-4"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Bangladesh
                  </div>

                  <div className="flex flex-wrap items-center gap-1">
                    <div className="flex size-1 items-center rounded-full bg-gray-500"></div>
                    <span>
                      {user?.languages?.length
                        ? user?.languages?.join(", ")
                        : "Update Languages"}
                    </span>
                    <Pencil
                      onClick={() => setEditLanguagesOpen(true)}
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Skeleton className="h-20 w-20 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          )}

          <About />
          <Resume />
          <Educations />
          <Experience />
          <Certifications />
          <Skills />
          <Gender />
          <DateOfBirth />
          <UserIdentity />

          <EditModal
            open={editNameOpen}
            onOpenChange={setEditNameOpen}
            title="Edit Name"
            description="Update your name"
          >
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  defaultValue={user?.fullName}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={user_name_update} type="submit">
                {loading ? "Updating..." : "Save changes"}
              </Button>
            </DialogFooter>
          </EditModal>

          <EditModal
            open={editContactOpen}
            onOpenChange={setEditContactOpen}
            title="Edit Contact Details"
            description="Update your contact details"
          >
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  readOnly
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  defaultValue={user?.email}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Phone Number</Label>
                {/* <Input required onChange={(e) => setPhone(e.target.value)} id="email" defaultValue={user?.phone_number} /> */}

                <PhoneInput
                  country="bd"
                  value={phone}
                  onChange={(e) => setPhone(e)}
                  inputProps={{
                    id: "phone",
                    className:
                      "w-full p-2 pl-14 border border-gray-300 rounded-md focus:ring focus:ring-indigo-500",
                  }}
                  containerClass="w-full"
                  buttonClass="rounded-l-md"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={update_contact} type="submit">
                {loading ? "Updating..." : "Save changes"}
              </Button>
            </DialogFooter>
          </EditModal>

          <EditModal
            open={editLanguagesOpen}
            onOpenChange={setEditLanguagesOpen}
            title="Edit Languages"
            description="Update your languages"
          >
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="languages">Spoken Languages</Label>
                <CreatableSelect
                  onChange={handleLanguageChange}
                  value={new_language?.map((item: any) => ({
                    value: item,
                    label: item,
                  }))}
                  isMulti
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={user_languages_update} type="submit">
                {loading ? "Updating..." : "Save changes"}
              </Button>
            </DialogFooter>
          </EditModal>

          {/* Edit Modals */}

          <EditModal
            open={editImageOpen}
            onOpenChange={setEditImageOpen}
            title="Edit Image"
            description="Update your profile image"
          >
            <div className="sm:max-w-md">
              <div className="space-y-4">
                <div className="flex flex-col items-center justify-center gap-4">
                  {image ? (
                    <div className="relative h-32 w-32">
                      <img
                        src={image}
                        alt="Preview"
                        className="h-full w-full rounded-full object-cover"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute right-0 top-0 rounded-full"
                        onClick={() => setImage(null)}
                      >
                        ✕
                      </Button>
                    </div>
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-muted">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Input
              className="my-4"
              id="picture"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <DialogFooter>
              <Button
                disabled={loading}
                onClick={profile_image_update}
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                {loading ? "Saving..." : " Save changes"}
              </Button>
            </DialogFooter>
          </EditModal>
        </div>

        <Card className="group h-fit">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground"
            >
              <LinkIcon className="h-4 w-4" />
              Portfolio
            </Link>
            <button className="mt-4 hidden scale-95 transform items-center justify-center gap-2 opacity-0 transition-all duration-300 ease-in-out group-hover:flex group-hover:scale-100 group-hover:opacity-100">
              <Plus className="h-4 w-4" /> Update
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
