import { CategoriesRepository } from '@/modules/content/repositories/interfaces/categories-repository'
import {
  UpdateCategoryUseCasePayload,
  UpdateCategoryUseCaseReturn
} from './types'
import { CategoryDoesNotExistError } from '@/shared/infra/http/exceptions/categories'

export class UpdateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute = async (
    payload: UpdateCategoryUseCasePayload
  ): Promise<UpdateCategoryUseCaseReturn> => {
    const categoryAlreadyExists =
      await this.categoriesRepository.getCategoryBySlug(payload.slug)

    if (!categoryAlreadyExists) {
      throw new CategoryDoesNotExistError()
    }

    const category = await this.categoriesRepository.updateCategory(payload)

    return {
      category
    }
  }
}
