"use client"

import React, { useState } from "react"

import { Tabs, TabsContent } from "@/components/ui/tabs"

import Other_info from "./components/Other_info"

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ProfilePage from "./components/Personal_Info"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState("personal_info")
  const [personalInfo, setPersonalInfo] = useState({})

  console.log("checked", personalInfo)
  return (
    <QueryClientProvider client={queryClient}>
      <ProfilePage />
    </QueryClientProvider>

  )
}

export default CustomTabs
