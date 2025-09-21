import { PrismaArticlesRepository } from '@/modules/content/repositories/prisma/articles-repository'
import { UpdateArticleUseCase } from '.'

export const updateArticleFactory = () => {
  const articleRepository = new PrismaArticlesRepository()

  const useCase = new UpdateArticleUseCase(articleRepository)

  return useCase
}
