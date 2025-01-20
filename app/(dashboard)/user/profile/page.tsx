"use client"

import React from "react"
import ProfilePage from "./components/Personal_Info"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


const CustomTabs = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <ProfilePage />
    </QueryClientProvider>

  )
}

export default CustomTabs
