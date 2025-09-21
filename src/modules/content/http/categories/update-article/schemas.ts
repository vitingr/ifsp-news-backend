import z from 'zod'

export const updateCategorySchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable()
})
