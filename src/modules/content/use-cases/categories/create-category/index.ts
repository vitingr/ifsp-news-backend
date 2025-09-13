import { CategoriesRepository } from '@/modules/content/repositories/interfaces/categories-repository'
import {
  CreateCategoryUseCasePayload,
  CreateCategoryUseCaseReturn
} from './types'
import { CategoryAlreadyExistsError } from '@/shared/infra/http/exceptions/categories'

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute = async (
    payload: CreateCategoryUseCasePayload
  ): Promise<CreateCategoryUseCaseReturn> => {
    const categoryAlreadyExists =
      await this.categoriesRepository.getCategoryBySlug(payload.slug)

    if (categoryAlreadyExists) {
      throw new CategoryAlreadyExistsError()
    }

    const category = await this.categoriesRepository.createCategory(payload)

    return {
      category
    }
  }
}
