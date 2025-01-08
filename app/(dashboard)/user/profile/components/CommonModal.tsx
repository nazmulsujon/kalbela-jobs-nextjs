"use client"

import { Button } from "@/components/ui/button"
import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface EditModalProps {
      open: boolean
      onOpenChange: (open: boolean) => void
      title: string
      description?: string
      children: React.ReactNode
}

export function EditModal({
      open,
      onOpenChange,
      title,
      description,
      children,
}: EditModalProps) {
      return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                  <form>
                        <DialogContent >
                              <DialogHeader>
                                    <DialogTitle>{title}</DialogTitle>
                                    {description && <DialogDescription>{description}</DialogDescription>}
                              </DialogHeader>
                              <div className="max-h-[500px] overflow-y-auto">
                                    {children}
                              </div>
                        </DialogContent>
                  </form>
            </Dialog>
      )
}
