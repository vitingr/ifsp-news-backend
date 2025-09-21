import { PrismaCategoriesRepository } from '@/modules/content/repositories/prisma/categories-repository'
import { UpdateCategoryUseCase } from '.'

export const updateCategoryFactory = () => {
  const categoriesRepository = new PrismaCategoriesRepository()

  const useCase = new UpdateCategoryUseCase(categoriesRepository)

  return useCase
}
