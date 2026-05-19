import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must contain at least two characters."),
  organization: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  requestType: z.enum(["consultation", "training", "project", "employment", "other"]),
  message: z.string().min(20, "Message must contain at least twenty characters.")
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address.")
});

export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
