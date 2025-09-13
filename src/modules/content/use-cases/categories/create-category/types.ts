import { Category, Prisma } from '@prisma/client'

export interface CreateCategoryUseCasePayload
  extends Prisma.CategoryUncheckedCreateInput {}

export interface CreateCategoryUseCaseReturn {
  category: Category
}
