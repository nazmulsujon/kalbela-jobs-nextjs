"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Eye, LinkIcon, MapPin, Share2, Plus, Video, GraduationCap, Award, Book, Upload, Edit, Pencil, Contact, Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { EditModal } from "./CommonModal"
import { DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import "react-phone-input-2/lib/style.css"

import { set_user_data, useUserData } from "@/utils/encript_decript"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CreatableSelect from "react-select/creatable"
import Certifications from "./Certifications"
import Skills from "./Skills"
import Educations from "./Educations"
import Resume from "./Resume"
import useUploadImage from "@/app/hooks/useUploadImage"
import uploadImage from "@/app/hooks/useUploadImage"
import useApiForPost from "@/app/hooks/useApiForPost"
import About from "./About"
import { Skeleton } from "@/components/ui/skeleton"
import { Controller, useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import Experience from "./Experience"


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
  const [languages, setLanguages] = useState(user?.languages || []);
  const [new_language, setNewLanguage] = useState(user?.languages);
  const [editContactOpen, setEditContactOpen] = useState(false)
  const [phone, setPhone] = useState<any>(user?.phone)
  const [email, setEmail] = useState(user?.email)



  useEffect(() => {
    setNewLanguage(user?.languages);
  }, [user?.languages]);

  // Handle change for CreatableSelect
  const handleLanguageChange = (selectedOptions: any) => {
    const selectedLanguages = selectedOptions.map((item: any) => item.value);
    setLanguages(selectedLanguages);
    setNewLanguage(selectedLanguages);
  };



  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file as any)
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as any);
      };
      reader.readAsDataURL(file);
    }
  };



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
            profile_picture: image
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
        fullName: name
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
        languages
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
        email
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
    <div >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 mb-14 lg:mb-0">
        <div className="space-y-6">
          {/* Header Section */}
          {user ? <div className="flex items-center gap-4">
            <div
              className="relative group w-20 h-20 flex items-center justify-center text-3xl text-white rounded-full bg-blue-600 cursor-pointer"
              onClick={() => setEditImageOpen(true)}
            >
              {user?.profile_picture ? (
                <Image
                  src={user?.profile_picture}
                  alt="Bright Future Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full"
                />
              ) : (
                <span className="flex items-center justify-center">
                  {user?.fullName?.charAt(0).toUpperCase()}
                </span>
              )}

              {/* Update text on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-full transition-opacity">
                <span className="text-sm text-white font-medium">Update</span>
              </div>
            </div>

            <div className="space-y-1 flex-1">
              <div className="flex  items-center justify-between">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{user?.fullName ? user?.fullName : "Update Your Name"}</h1>
                  <Pencil onClick={() => setEditNameOpen(true)} className="h-4 w-4" />
                </div>

              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Contact className="h-4 w-4" />
                  {user?.phone_number ? user?.phone_number : "Update Phone Number"}
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex items-center rounded-full size-1 bg-gray-500"></div>
                  <Mail className="h-4 w-4" />
                  {user?.email ? user?.email : "Update Email"}
                </div>
                <Pencil onClick={() => setEditContactOpen(true)} className="h-4 w-4" />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Bangladesh
                </div>

                <div className="flex flex-wrap items-center gap-1">
                  <div className="flex items-center rounded-full size-1 bg-gray-500"></div>
                  <span>{user?.languages?.length ? user?.languages?.join(", ") : "Update Languages"}</span>
                  <Pencil onClick={() => setEditLanguagesOpen(true)} className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div> : <div className="flex items-center gap-4">
            <Skeleton className="w-20 h-20 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
          }


          <About />
          <Resume />
          <Educations />
          <Experience />
          <Certifications />
          <Skills />

          <EditModal
            open={editNameOpen}
            onOpenChange={setEditNameOpen}
            title="Edit Name"
            description="Update your name"
          >
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input onChange={(e) => setName(e.target.value)} id="name" defaultValue={user?.fullName} />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={user_name_update} type="submit">{loading ? "Updating..." : 'Save changes'}</Button>
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
                <Input required onChange={(e) => setEmail(e.target.value)} id="email" defaultValue={user?.email} />
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
              <Button onClick={update_contact} type="submit">{loading ? "Updating..." : 'Save changes'}</Button>
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
                  value={new_language?.map((item: any) => ({ value: item, label: item }))}
                  isMulti
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={user_languages_update} type="submit">{loading ? "Updating..." : 'Save changes'}</Button>
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
                    <div className="relative w-32 h-32">
                      <img
                        src={image}
                        alt="Preview"
                        className="w-full h-full   rounded-full object-cover"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute rounded-full top-0 right-0"
                        onClick={() => setImage(null)}
                      >
                        ✕
                      </Button>
                    </div>
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                      <Upload className="w-8 h-8 text-muted-foreground" />
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
              <Button disabled={loading} onClick={profile_image_update} type="submit" className="bg-blue-500 text-white hover:bg-blue-600">
                {loading ? "Saving..." : " Save changes"}
              </Button>
            </DialogFooter>
          </EditModal>






        </div>


        <Card className="h-fit group">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in-out"
            >
              <LinkIcon className="h-4 w-4" />
              Portfolio
            </Link>
            <button
              className="hidden gap-2 items-center justify-center mt-4 transition-all duration-300 ease-in-out opacity-0 transform scale-95 group-hover:flex group-hover:opacity-100 group-hover:scale-100"
            >
              <Plus className="h-4 w-4" /> Update
            </button>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
