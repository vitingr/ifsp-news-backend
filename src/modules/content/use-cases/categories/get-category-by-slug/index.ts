import { CategoriesRepository } from '@/modules/content/repositories/interfaces/categories-repository'
import { CategoryDoesNotExistError } from '@/shared/infra/http/exceptions/categories'
import { Category } from '@prisma/client'

export class GetCategoryBySlugUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute = async (slug: string): Promise<Category | null> => {
    const category = await this.categoriesRepository.getCategoryBySlug(slug)

    if (!category) {
      throw new CategoryDoesNotExistError()
    }

    return category
  }
}
