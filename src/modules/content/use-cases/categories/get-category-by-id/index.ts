import { CategoriesRepository } from '@/modules/content/repositories/interfaces/categories-repository'
import { CategoryDoesNotExistError } from '@/shared/infra/http/exceptions/categories'
import { Category } from '@prisma/client'

export class GetCategoryByIdUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute = async (id: string): Promise<Category | null> => {
    const category = await this.categoriesRepository.getCategoryById(id)

    if (!category) {
      throw new CategoryDoesNotExistError()
    }

    return category
  }
}
