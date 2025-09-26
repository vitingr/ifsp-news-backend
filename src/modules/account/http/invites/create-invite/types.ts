import z from "zod";

export const createInviteSchema = z.object({
  email: z.string(),
  role: z.string().nullable().default('author')
})
