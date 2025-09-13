import z from 'zod'

export const getArticleByIdSchema = z.object({
  articleId: z.string()
})
