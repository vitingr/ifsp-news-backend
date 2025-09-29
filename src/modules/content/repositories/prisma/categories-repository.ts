import { Prisma, Category } from '@prisma/client'
import { CategoriesRepository } from '../interfaces/categories-repository'
import { prisma } from '@/shared/infra/database/prisma/client'

export class PrismaCategoriesRepository implements CategoriesRepository {
  createCategory = async (payload: Prisma.CategoryUncheckedCreateInput) => {
    const category = await prisma.category.create({
      data: payload
    })

    return category
  }

  deleteCategory = async (id: string) => {
    await prisma.category.delete({
      where: {
        id
      }
    })

    return null
  }

  getCategoryById = async (id: string) => {
    const category = await prisma.category.findFirst({
      where: {
        id
      }
    })

    return category
  }

  getCategoryBySlug = async (slug: string) => {
    const category = await prisma.category.findFirst({
      where: {
        slug
      }
    })

    return category
  }

  getAllCategories = async () => {
    return await prisma.category.findMany()
  }

  updateCategory = async (payload: Prisma.CategoryUncheckedCreateInput, id: string) => {
    return await prisma.category.update({
      where: {
        id
      },
      data: payload
    })
  }
}
