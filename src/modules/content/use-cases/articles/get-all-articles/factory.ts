import { PrismaArticlesRepository } from '@/modules/content/repositories/prisma/articles-repository'
import { getAllArticlesUseCase } from '.'

export const getAllArticlesFactory = () => {
  const articlesRepository = new PrismaArticlesRepository()

  const useCase = new getAllArticlesUseCase(articlesRepository)

  return useCase
}
