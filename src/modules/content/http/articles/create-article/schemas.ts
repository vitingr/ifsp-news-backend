import z from 'zod'

export const createArticleSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable()
})
