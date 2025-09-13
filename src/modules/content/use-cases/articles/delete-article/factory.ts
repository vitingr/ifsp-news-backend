import { PrismaArticlesRepository } from '@/modules/content/repositories/prisma/articles-repository'
import { DeleteArticleUseCase } from '.'

export const deleteArticleFactory = () => {
  const articlesRepository = new PrismaArticlesRepository()

  const useCase = new DeleteArticleUseCase(articlesRepository)

  return useCase
}
