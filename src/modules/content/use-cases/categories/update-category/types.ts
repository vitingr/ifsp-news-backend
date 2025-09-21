import { Category, Prisma } from '@prisma/client'

export interface UpdateCategoryUseCasePayload
  extends Prisma.CategoryUncheckedCreateInput {}

export interface UpdateCategoryUseCaseReturn {
  category: Category
}
