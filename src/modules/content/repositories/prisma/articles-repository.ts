import { Prisma } from '@prisma/client'
import { ArticlesRepository } from '../interfaces/articles-repository'
import { prisma } from '@/shared/infra/database/prisma/client'

export class PrismaArticlesRepository implements ArticlesRepository {
  createArticle = async (
    payload: Prisma.ArticleUncheckedCreateInput & { categories: string[] }
  ) => {
    const article = await prisma.article.create({
      data: {
        ...payload,
        articleCategory:
          payload?.categories && payload?.categories?.length > 0
            ? {
                create: payload.categories.map(catId => ({
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
}
