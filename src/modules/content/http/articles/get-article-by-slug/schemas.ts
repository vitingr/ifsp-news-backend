import z from 'zod'

export const getArticleBySlugSchema = z.object({
  slug: z.string()
})
