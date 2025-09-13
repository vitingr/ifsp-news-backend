import { PrismaArticlesRepository } from '@/modules/content/repositories/prisma/articles-repository'
import { CreateArticleUseCase } from '.'

export const createArticleFactory = () => {
  const articleRepository = new PrismaArticlesRepository()

  const useCase = new CreateArticleUseCase(articleRepository)

  return useCase
}
