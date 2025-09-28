import { PrismaCategoriesRepository } from '@/modules/content/repositories/prisma/categories-repository'
import { GetCategoryBySlugUseCase } from '.'

export const getCategoryBySlugFactory = () => {
  const categoriesRepository = new PrismaCategoriesRepository()

  const useCase = new GetCategoryBySlugUseCase(categoriesRepository)

  return useCase
}
