import { Category, Prisma } from '@prisma/client'

export interface CategoriesRepository {
  createCategory: (
    payload: Prisma.CategoryUncheckedCreateInput
  ) => Promise<Category>
  deleteCategory: (id: string) => Promise<null>
  getCategoryById: (id: string) => Promise<Category | null>
  getAllCategories: () => Promise<Category[] | null>
  getCategoryBySlug: (slug: string) => Promise<Category | null>
}
