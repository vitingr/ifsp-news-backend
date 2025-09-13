import z from 'zod'

export const createCategorySchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable()
})
