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
import { logout } from "@/utils/encript_decript"
import Link from "next/link"
import { Fragment } from "react"
import PrimaryBtn from "../PrimaryBtn"
import SecondaryBtn from "../SecondaryBtn"
import { User } from "lucide-react"

const UserNav = ({ loading, user }: { loading: boolean, user: any }) => {

  return (
    <DropdownMenu>
      <div>
        <DropdownMenuTrigger asChild>

          {
            !loading && user ? <Button variant="ghost" className="relative h-8 w-8 rounded-full border bg-gray-100"> <Avatar className="h-8 w-8 border">
              <AvatarImage src={user?.profile_picture} alt={user?.fullName} />
              <AvatarFallback className="bg-gray-100 dark:text-black">{user?.fullName?.charAt(0)}</AvatarFallback>
            </Avatar>
            </Button>
              :
              <Button variant="ghost" className="relative h-8 w-8 rounded-full border bg-gray-100 lg:hidden"> <User className="h-[1.5rem] w-[1.5rem] text-black" />
              </Button>
          }

        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 rounded-sm border border-gray-300"
          align="end"
          forceMount
        >
          {
            !loading && user ?
              <Fragment>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.fullName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
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
              </Fragment> :
              <div className="flex flex-col space-y-2 p-4">
                <Link href="/login">
                  <PrimaryBtn className="py-2 px-4">
                    Login
                  </PrimaryBtn>
                </Link>

                <Link href="/registration">
                  <SecondaryBtn className="py-2 px-4">
                    Registration
                  </SecondaryBtn>
                </Link>
              </div>
          }
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  )
}

export default UserNav