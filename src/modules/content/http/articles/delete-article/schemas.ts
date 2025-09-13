import z from 'zod'

export const deleteArticleSchema = z.object({
  id: z.uuid()
})
