import z from 'zod'

export const createArticleSchema = z.object({
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  thumb: z.string(),
  description: z.string().optional().nullable()
})
