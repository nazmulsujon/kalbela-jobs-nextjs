"use client"

import { useState } from "react"
import Link from "next/link"
import animation from "@/public/assets/animation/log_in.json"
import Lottie from "lottie-react"
import { Eye, EyeOff } from "lucide-react"

import PrimaryBtn from "@/components/PrimaryBtn"
import SecondaryBtn from "@/components/SecondaryBtn"
import usePostApiRequest from "../hooks/usePostApiRequest"
import axios from "axios"


interface FormData {
      fullName: string
      email: string
      password: string
}
const RegistrationPage = () => {
      const [isPasswordVisible, setPasswordVisible] = useState(false)
      const [error_message, set_error_message] = useState('')

      const { data, loading, error, sendRequest } = usePostApiRequest<any>(
            "api/v1/auth/sign-up-user",
            "POST"
      )

      const [formData, setFormData] = useState<FormData>({
            fullName: "",
            email: "",
            password: "",
      })

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target
            setFormData((prevData) => ({
                  ...prevData,
                  [name]: value,
            }))
      }

      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault()
            await sendRequest(formData)
            console.log(data, 'data');
            if (data.error) {
                  console.log('error', data);
                  set_error_message(data.message)
            }
            else {
                  console.log(data)
                  set_error_message('')
            }
      }

      return (
            <section className="bg-white">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
                        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                              <div className="absolute inset-0">
                                    <Lottie
                                          className="object-cover w-full h-full"
                                          animationData={animation}
                                    />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                              <div className="relative">
                                    <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                          <h3 className="text-4xl font-bold text-white">
                                                Join 35k+ job seekers & recruiters find your perfect match
                                                today!
                                          </h3>
                                          <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                                                <li className="flex items-center space-x-3">
                                                      <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                            <svg
                                                                  className="w-3.5 h-3.5 text-white"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 20 20"
                                                                  fill="currentColor"
                                                            >
                                                                  <path
                                                                        fillRule="evenodd"
                                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                        clipRule="evenodd"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <span className="text-lg font-medium text-white">
                                                            AI Job Matching
                                                      </span>
                                                </li>
                                                <li className="flex items-center space-x-3">
                                                      <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                            <svg
                                                                  className="w-3.5 h-3.5 text-white"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 20 20"
                                                                  fill="currentColor"
                                                            >
                                                                  <path
                                                                        fillRule="evenodd"
                                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                        clipRule="evenodd"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <span className="text-lg font-medium text-white">
                                                            Resume Builder
                                                      </span>
                                                </li>
                                                <li className="flex items-center space-x-3">
                                                      <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                            <svg
                                                                  className="w-3.5 h-3.5 text-white"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 20 20"
                                                                  fill="currentColor"
                                                            >
                                                                  <path
                                                                        fillRule="evenodd"
                                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                        clipRule="evenodd"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <span className="text-lg font-medium text-white">
                                                            Job Alerts
                                                      </span>
                                                </li>
                                                <li className="flex items-center space-x-3">
                                                      <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                                            <svg
                                                                  className="w-3.5 h-3.5 text-white"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  viewBox="0 0 20 20"
                                                                  fill="currentColor"
                                                            >
                                                                  <path
                                                                        fillRule="evenodd"
                                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                        clipRule="evenodd"
                                                                  />
                                                            </svg>
                                                      </div>
                                                      <span className="text-lg font-medium text-white">
                                                            Advanced Filters
                                                      </span>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                              <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                          Sign up to Celebration
                                    </h2>
                                    <p className="mt-2 text-base text-gray-600">
                                          Already have an account?
                                          <Link
                                                href="/login"
                                                title=""
                                                className="font-medium pl-1 text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                                          >
                                                Login
                                          </Link>
                                    </p>
                                    <form
                                          onSubmit={handleSubmit}
                                          action="#"
                                          method="POST"
                                          className="mt-8"
                                    >
                                          <div className="space-y-5">
                                                <div>
                                                      <label
                                                            htmlFor=""
                                                            className="text-base font-medium text-gray-900"
                                                      >
                                                            {" "}
                                                            Fast &amp; Last name{" "}
                                                      </label>
                                                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                  <svg
                                                                        className="w-5 h-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                  >
                                                                        <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              strokeWidth={2}
                                                                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <input
                                                                  type="text"
                                                                  name="fullName"
                                                                  value={formData.fullName}
                                                                  onChange={handleChange}
                                                                  placeholder="Enter your full name"
                                                                  className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                            />
                                                      </div>
                                                </div>
                                                <div>
                                                      <label
                                                            htmlFor=""
                                                            className="text-base font-medium text-gray-900"
                                                      >
                                                            {" "}
                                                            Email address{" "}
                                                      </label>
                                                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                  <svg
                                                                        className="w-5 h-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                  >
                                                                        <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              strokeWidth={2}
                                                                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <input
                                                                  type="email"
                                                                  name="email"
                                                                  value={formData.email}
                                                                  onChange={handleChange}
                                                                  placeholder="Enter email to get started"
                                                                  className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                            />
                                                      </div>
                                                </div>
                                                <div>
                                                      <label
                                                            htmlFor=""
                                                            className="text-base font-medium text-gray-900"
                                                      >
                                                            {" "}
                                                            Password{" "}
                                                      </label>
                                                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                  <svg
                                                                        className="w-5 h-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                  >
                                                                        <path
                                                                              strokeLinecap="round"
                                                                              strokeLinejoin="round"
                                                                              strokeWidth={2}
                                                                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                                        />
                                                                  </svg>
                                                            </div>
                                                            <input
                                                                  type={isPasswordVisible ? "text" : "password"}
                                                                  name="password"
                                                                  value={formData.password}
                                                                  onChange={handleChange}
                                                                  placeholder="Enter your password"
                                                                  className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                            />
                                                            <button
                                                                  type="button"
                                                                  onClick={() => setPasswordVisible(!isPasswordVisible)}
                                                                  className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                                                            >
                                                                  {isPasswordVisible ? (
                                                                        <EyeOff className="w-5 h-5" />
                                                                  ) : (
                                                                        <Eye className="w-5 h-5" />
                                                                  )}
                                                            </button>
                                                      </div>
                                                </div>
                                                {error_message.length ? <p className="text-red-500 py-4">{error_message}</p> : ''}
                                                <div>
                                                      <PrimaryBtn disabled={loading} className="w-full py-3">{loading ? "Loading..." : "Sign up"}</PrimaryBtn>
                                                </div>
                                          </div>
                                    </form>
                                    <div className="mt-3 space-y-3">
                                          <SecondaryBtn
                                                // onClick={handlerGoogleLogin}

                                                className="w-full py-3 relative"
                                          >
                                                <div className="absolute inset-y-0 left-0 py-2 px-4">
                                                      <img
                                                            className="w-7 h-8 text-[#2563EB]"
                                                            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                                                            alt=""
                                                      />
                                                </div>
                                                Sign up with Google
                                          </SecondaryBtn>
                                          <SecondaryBtn
                                                // onClick={handlerGoogleLogin}

                                                className="w-full py-3 relative"
                                          >
                                                <div className="absolute inset-y-0 left-0 py-2 px-4">
                                                      <img
                                                            className="w-6 h-6 text-[#2563EB]"
                                                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                                                            alt=""
                                                      />
                                                </div>
                                                Sign up with Linkedin
                                          </SecondaryBtn>
                                    </div>
                                    <p className="mt-5 text-sm text-gray-600">
                                          This site is protected by reCAPTCHA and the Google{" "}
                                          <a
                                                href="#"
                                                title=""
                                                className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                                          >
                                                Privacy Policy
                                          </a>{" "}
                                          &amp;
                                          <a
                                                href="#"
                                                title=""
                                                className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                                          >
                                                Terms of Service
                                          </a>
                                    </p>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default RegistrationPage
