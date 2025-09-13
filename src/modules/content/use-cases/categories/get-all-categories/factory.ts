import { PrismaCategoriesRepository } from '@/modules/content/repositories/prisma/categories-repository'
import { GetAllCategoriesUseCase } from '.'

export const getAllCategoriesFactory = () => {
  const categoriesRepository = new PrismaCategoriesRepository()

  const useCase = new GetAllCategoriesUseCase(categoriesRepository)

  return useCase
}
