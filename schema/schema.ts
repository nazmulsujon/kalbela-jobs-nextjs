import { z } from "zod"

//Modal Apply Form Schema
export const apply_form_Schema = z.object({
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  resume: z
    .any()
    .refine(
      (file) => {
        if (file instanceof File) {
          const validTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ]
          return validTypes.includes(file.type)
        }
        return true // Allow empty input
      },
      {
        message: "Only PDF and DOC files are allowed",
      }
    )
    .optional(),
  age: z.string().min(1, "Age is required").max(3, "Invalid age"),
  salary: z.string().min(1, "Salary expectation is required"),
})
