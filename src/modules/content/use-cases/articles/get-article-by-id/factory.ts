import { PrismaArticlesRepository } from '@/modules/content/repositories/prisma/articles-repository'
import { GetArticleByIdUseCase } from '.'

export const getArticleByIdFactory = () => {
  const articlesRepository = new PrismaArticlesRepository()

  const useCase = new GetArticleByIdUseCase(articlesRepository)

  return useCase
}
