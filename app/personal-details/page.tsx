"use client"

import React, { ChangeEvent, FormEvent, useState } from "react"
import PhoneInput from "react-phone-input-2"

import "react-phone-input-2/lib/style.css"
import PrimaryBtn from "@/components/PrimaryBtn"

interface FormData {
  fullName: string
  email: string
  currentAddress: string
  gender: string
  dateOfBirth: string
  image: File | null
}

const PersonalDetailsForm: React.FC = () => {
  const [countryCode, setContryCode] = useState("")

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    currentAddress: "",
    gender: "",
    dateOfBirth: "",
    image: null,
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files![0],
      }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form Data:", countryCode, formData)
    // Here you would typically send the data to an API
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="lg:w-[800px] w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Personal Details
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-800"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Mir Sorkar"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="mir@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="currentAddress"
                className="block text-sm font-semibold text-gray-800"
              >
                Current Address
              </label>
              <textarea
                name="currentAddress"
                id="currentAddress"
                placeholder="Current Address"
                rows={3}
                required
                value={formData.currentAddress}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <h1 className="font-inter text-[18px] font-semibold mb-2">
                Phone
              </h1>
              <PhoneInput
                country={"bd"}
                value={countryCode}
                placeholder="+880 177 503 ----"
                onChange={(value) => setContryCode(value)}
                inputStyle={{
                  width: "100%",
                  borderRadius: "8px",
                  opacity: "0.7",
                  color: "black",
                  font: "bold",
                }}
                inputClass="py-6"
                dropdownStyle={{ width: "200px", marginTop: "-0.1px" }}
                buttonStyle={{ borderRadius: "8px 0 0 8px" }}
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-semibold text-gray-800"
              >
                Profile Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-semibold text-gray-800"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-semibold text-gray-800"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                required
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <PrimaryBtn type="submit" className="w-1/5">
              Next
            </PrimaryBtn>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalDetailsForm
