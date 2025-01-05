"use client"

import React, { useState } from "react"

import { Tabs, TabsContent } from "@/components/ui/tabs"

import Other_info from "./components/Other_info"
import Personal_Info from "./components/Personal_Info"

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState("personal_info")
  const [personalInfo, setPersonalInfo] = useState({})

  console.log("checked", personalInfo)
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsContent value="personal_info">
        <Personal_Info
          setPersonalInfo={setPersonalInfo}
          setActiveTab={setActiveTab}
        />
      </TabsContent>

      <TabsContent value="other_info">
        <Other_info
          setPersonalInfo={setPersonalInfo}
          setActiveTab={setActiveTab}
        />
      </TabsContent>
    </Tabs>
  )
}

export default CustomTabs
