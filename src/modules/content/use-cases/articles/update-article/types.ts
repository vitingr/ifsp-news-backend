import { Article, Prisma } from '@prisma/client'

export interface EditArticleUseCasePayload
  extends Omit<Prisma.ArticleUncheckedCreateInput, 'authorId'> {
  categories: string[]
}

export interface EditArticleUseCaseReturn {
  article: Article
}
