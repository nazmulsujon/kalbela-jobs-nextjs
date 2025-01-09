'use client'

import React, { Fragment, useState } from "react";
import { Settings, User, Menu, Home, LayoutDashboardIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { Sidebar } from "../app/(dashboard)/user/components/Sideber";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const BottomNav: React.FC = () => {
  const [isDashboardSidebarOpen, setIsDashboardSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Fragment>
      <div className="lg:hidden fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 border-2 rounded-full bottom-0.5 left-1/2 bg-white/30 backdrop-blur-md ">

        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          {/* All menu */}
          <div className="flex items-center justify-center">
            <div
              onClick={() => setIsDashboardSidebarOpen(true)}
              data-tooltip-target="tooltip-home"
              className="inline-flex flex-col items-center justify-center w-10 h-10 rounded-full group bg-gray-200 hover:bg-gray-300 dark:text-black"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Menu className="w-5 h-5" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>All Menu</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Dashboard */}
          <div className="flex items-center justify-center">
            <Link href="/user">
              <div

                data-tooltip-target="tooltip-wallet"
                className={cn(
                  'inline-flex flex-col items-center justify-center w-10 h-10 rounded-full group',
                  pathname === "/user"
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 dark:text-black'
                )}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <LayoutDashboardIcon className="w-5 h-5" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Dashboard</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </Link>
          </div>


          {/* home */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <div

                data-tooltip-target="tooltip-new"
                className={cn(
                  'inline-flex flex-col items-center justify-center w-10 h-10 rounded-full group',
                  pathname === "/"
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 dark:text-black'
                )}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Home className="w-5 h-5" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Home</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </Link>
          </div>

          {/* Settings */}
          <div className="flex items-center justify-center">
            <Link href="user/settings">
              <div

                data-tooltip-target="tooltip-settings"
                className={cn(
                  'inline-flex flex-col items-center justify-center w-10 h-10 rounded-full group',
                  pathname === "/user/settings"
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 dark:text-black'
                )}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Settings className="w-5 h-5" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Settings</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div></Link>
          </div>

          {/* Profile */}
          <div className="flex items-center justify-center">
            <Link href="/user/profile">
              <div

                data-tooltip-target="tooltip-profile"
                className={cn(
                  'inline-flex flex-col items-center justify-center w-10 h-10 rounded-full group',
                  pathname === "/user/profile"
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 dark:text-black'
                )}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <User className="w-5 h-5" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Profile</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Dashboard sidebar */}
      <div className="md:hidden">
        <Sheet open={isDashboardSidebarOpen} onOpenChange={setIsDashboardSidebarOpen}>
          <SheetTrigger asChild>
            <div />
          </SheetTrigger>

          <SheetContent
            side="left"
            className={`h-full w-80 overflow-y-auto bg-white pt-[14px] text-gray-800 dark:bg-gray-900 dark:text-slate-200`}
          >
            <SheetHeader>
              <SheetTitle className="text-start">
                <Link href="/">
                  <img className="h-auto w-48" src="/logo.png" alt="logo" />
                </Link>
              </SheetTitle>
              <SheetDescription className="sr-only">
                Dasboard Didebar Navigations
              </SheetDescription>
            </SheetHeader>

            <Sidebar setIsDashboardSidebarOpen={setIsDashboardSidebarOpen} />
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default BottomNav;
