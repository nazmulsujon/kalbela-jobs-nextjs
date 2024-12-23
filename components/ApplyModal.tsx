import React from "react"
import { FileText } from "lucide-react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import DailogForm from "./DialogForm"
import PrimaryBtn from "./PrimaryBtn"

const ApplyModal: React.FC = () => {
  return (
    <div>
      <Dialog>
        <div>
          <DialogTrigger asChild>
            <PrimaryBtn className="dark:border-2 dark:border-gray-600">
              Apply
            </PrimaryBtn>
          </DialogTrigger>
        </div>

        <DialogContent className="w-[300px] max-w-full sm:w-[400px] md:w-[600px] lg:w-[744px]">
          <DialogHeader>
            <DailogForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ApplyModal
