import { z } from "zod"

// Personal Info components
export const personal_info_formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  currentAddress: z.string().min(5, "Address must be at least 5 characters"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  dateOfBirth: z.string().refine(
    (value) => {
      const selectedDate = new Date(value)
      const today = new Date()
      return selectedDate < today // Ensure date is in the past
    },
    {
      message: "Date of birth must be in the past",
    }
  ),
  phone: z.string().min(10, "Invalid phone number"),
  image: z
    .instanceof(File, { message: "Please upload a valid image file." })
    .nullable()
    .refine((file) => file, { message: "Profile image is required." }),
})

// Other info Components
export const otherInfoSchema = z.object({
  position: z.string().nonempty("Position is required"),
  skills: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .min(1, "Please select at least one skill"),
})
