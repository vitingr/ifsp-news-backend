import { Article, Prisma } from '@prisma/client'

export interface CreateArticleUseCasePayload
  extends Prisma.ArticleUncheckedCreateInput {
  categories: string[]
}

export interface CreateArticleUseCaseReturn {
  article: Article
}
