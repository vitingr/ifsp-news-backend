import { PrismaCategoriesRepository } from "@/modules/content/repositories/prisma/categories-repository"
import { DeleteCategoryUseCase } from "."

export const deleteCategoryFactory = () => {
  const categoriesRepository = new PrismaCategoriesRepository()

  const useCase = new DeleteCategoryUseCase(categoriesRepository)

  return useCase
}
