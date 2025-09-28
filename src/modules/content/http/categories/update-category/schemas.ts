import z from 'zod'

export const updateCategorySchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable()
})

export const updateCategoryParamsSchema = z.object({
  id: z.string()
})
