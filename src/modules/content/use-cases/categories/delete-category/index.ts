import { CategoriesRepository } from '@/modules/content/repositories/interfaces/categories-repository'
import { CategoryDoesNotExistError } from '@/shared/infra/http/exceptions/categories'

export class DeleteCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute = async (id: string): Promise<null> => {
    const category = await this.categoriesRepository.getCategoryById(id)

    console.log(category)

    if (!category) {
      throw new CategoryDoesNotExistError()
    }

    await this.categoriesRepository.deleteCategory(id)

    return null
  }
}
