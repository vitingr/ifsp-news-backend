import { PrismaCategoriesRepository } from '@/modules/content/repositories/prisma/categories-repository'
import { GetCategoryByIdUseCase } from '.'

export const getCategoryByIdFactory = () => {
  const categoriesRepository = new PrismaCategoriesRepository()

  const useCase = new GetCategoryByIdUseCase(categoriesRepository)

  return useCase
}
