import z from "zod";

export const getCategoryBySlugSchema = z.object({
  slug: z.string()
})
