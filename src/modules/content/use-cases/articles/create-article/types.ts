import { Article, Prisma } from '@prisma/client'

export interface CreateArticleUseCasePayload
  extends Prisma.ArticleUncheckedCreateInput {}

export interface CreateArticleUseCaseReturn {
  article: Article
}
