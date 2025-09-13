import z from 'zod'

export const getArticleBySlugSchema = z.object({
  articleSlug: z.string()
})
