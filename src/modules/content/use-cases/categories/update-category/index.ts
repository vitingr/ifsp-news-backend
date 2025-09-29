import { CategoriesRepository } from '@/modules/content/repositories/interfaces/categories-repository'
import {
  UpdateCategoryUseCasePayload,
  UpdateCategoryUseCaseReturn
} from './types'
import { CategoryDoesNotExistError } from '@/shared/infra/http/exceptions/categories'

export class UpdateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute = async (
    payload: UpdateCategoryUseCasePayload,
    id: string
  ): Promise<UpdateCategoryUseCaseReturn> => {
    const categoryAlreadyExists =
      await this.categoriesRepository.getCategoryById(id)

    if (!categoryAlreadyExists) {
      throw new CategoryDoesNotExistError()
    }

    const category = await this.categoriesRepository.updateCategory(payload, id)

    return {
      category
    }
  }
}
