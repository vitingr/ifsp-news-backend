import z from 'zod'

export const updateArticleSchema = z.object({
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  thumb: z.string(),
  description: z.string().optional().nullable(),
  isFeatured: z.boolean().default(false),
  categories: z.array(z.string()).default([])
})
