import { Prisma } from '@prisma/client'
import { ArticlesRepository } from '../interfaces/articles-repository'
import { prisma } from '@/shared/infra/database/prisma/client'

export class PrismaArticlesRepository implements ArticlesRepository {
  createArticle = async (
    payload: Prisma.ArticleUncheckedCreateInput & { categories: string[] }
  ) => {
    const { categories, ...articleData } = payload

    const article = await prisma.article.create({
      data: {
        ...articleData,
        articleCategory:
          categories && categories.length > 0
            ? {
                create: categories.map(catId => ({
                  category: { connect: { id: catId } }
                }))
              }
            : undefined
      },
      include: {
        articleCategory: { include: { category: true } },
        author: true
      }
    })

    return article
  }

  deleteArticle = async (id: string) => {
    await prisma.article.delete({
      where: {
        id
      }
    })

    return null
  }

  getArticleById = async (id: string) => {
    const article = await prisma.article.findFirst({
      where: {
        id
      },
      include: {
        articleCategory: {
          include: {
            category: true
          }
        },
        author: true
      }
    })

    return article
  }

  getArticleBySlug = async (slug: string) => {
    const article = await prisma.article.findFirst({
      where: {
        slug
      },
      include: {
        articleCategory: {
          include: {
            category: true
          }
        },
        author: true
      }
    })

    return article
  }

  getAllArticles = async () => {
    return await prisma.article.findMany({
      include: {
        articleCategory: {
          include: {
            category: true
          }
        },
        author: true
      }
    })
  }

  updateArticle = async (
    payload: Omit<Prisma.ArticleUncheckedCreateInput, 'authorId'> & {
      categories: string[]
    }
  ) => {
    return await prisma.article.update({
      where: {
        id: payload.id
      },
      data: payload
    })
  }
}
