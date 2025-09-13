import { PrismaCategoriesRepository } from '@/modules/content/repositories/prisma/categories-repository'
import { CreateCategoryUseCase } from '.'

export const createCategoryFactory = () => {
  const categoriesRepository = new PrismaCategoriesRepository()

  const useCase = new CreateCategoryUseCase(categoriesRepository)

  return useCase
}
