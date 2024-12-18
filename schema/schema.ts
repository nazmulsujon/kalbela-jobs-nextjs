import { z } from "zod"

export const apply_form_Schema = z.object({
  email: z.string().email("Invalid email address"),
  currentAddress: z.string().min(5, "Address must be at least 5 characters"),

  phone: z.string().min(10, "Invalid phone number"),

  resume: z
    .instanceof(File, { message: "Please upload a valid resume file." })
    .nullable()
    .refine((file) => file, { message: "Profile resume is required." }),
  age: z.string().min(3, "Invalid Age "),
  salary: z.string().min(5, "Salary Expection"),
})
