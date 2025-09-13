import { PrismaArticlesRepository } from '@/modules/content/repositories/prisma/articles-repository'
import { GetArticleBySlugUseCase } from '.'

export const getArticleBySlugFactory = () => {
  const articlesRepository = new PrismaArticlesRepository()

  const useCase = new GetArticleBySlugUseCase(articlesRepository)

  return useCase
}
