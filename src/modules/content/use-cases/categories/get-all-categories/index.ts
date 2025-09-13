import { CategoriesRepository } from '@/modules/content/repositories/interfaces/categories-repository'
import { CategoryDoesNotExistError } from '@/shared/infra/http/exceptions/categories'
import { Category } from '@prisma/client'

export class GetAllCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute = async (): Promise<Category[] | null> => {
    const categories = await this.categoriesRepository.getAllCategories()

    if (!categories) {
      throw new CategoryDoesNotExistError()
    }

    return categories
  }
}
