import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  subject: z.string().trim().min(4).max(120),
  message: z.string().trim().min(20).max(3000),
  company: z.string().trim().max(120).optional()
});

export type ContactInput = z.infer<typeof contactSchema>;
