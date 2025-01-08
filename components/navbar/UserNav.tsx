"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout, useUserData } from "@/utils/encript_decript"
import Cookies from "js-cookie"
import Link from "next/link"

const UserNav = () => {
      const [user] = useUserData()
      return (
            <DropdownMenu>
                  {user ? <div>
                        <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8 border">
                                          <AvatarImage src={user?.profile_picture} alt={user?.fullName} />
                                          <AvatarFallback>{user?.fullName?.charAt(0)}</AvatarFallback>
                                    </Avatar>
                              </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                              className="w-56 rounded-sm border border-gray-300"
                              align="end"
                              forceMount
                        >
                              <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                          <p className="text-sm font-medium leading-none">{user?.fullName}</p>
                                          <p className="text-xs leading-none text-muted-foreground">
                                                {user.email}
                                          </p>
                                    </div>
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuGroup>
                                    <Link href="/user"> <DropdownMenuItem className="cursor-pointer">Dashboard</DropdownMenuItem></Link>
                                    <Link href="/user/profile"> <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem></Link>
                                    <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                              </DropdownMenuGroup>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => logout()} className="cursor-pointer">Log out</DropdownMenuItem>
                        </DropdownMenuContent>
                  </div> : ""}
            </DropdownMenu>
      )
}

export default UserNav
