import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-()+ ]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  patientAge: z
    .string()
    .min(1, "Patient age is required")
    .refine(
      (val) => {
        const num = parseInt(val, 10);
        return !isNaN(num) && num >= 0 && num <= 150;
      },
      { message: "Please enter a valid age" }
    ),
  relationship: z.string().min(1, "Please select your relationship to the patient"),
  serviceNeeded: z.string().min(1, "Please select the service needed"),
  insurance: z.string().min(1, "Please select your insurance status"),
  contactMethod: z.enum(["Phone", "Email", "Either"], {
    message: "Please select a preferred contact method",
  }),
  message: z.string().optional(),
  consent: z.literal(true, {
    message: "You must consent to be contacted",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
