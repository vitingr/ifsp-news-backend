import { Article, Prisma } from '@prisma/client'
import { ArticlesRepository } from '../interfaces/articles-repository'
import { prisma } from '@/shared/infra/database/prisma/client'

export class PrismaArticlesRepository implements ArticlesRepository {
  createArticle = async (payload: Prisma.ArticleUncheckedCreateInput) => {
    const article = await prisma.article.create({
      data: payload
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
      }
    })

    return article
  }

  getArticleBySlug = async (slug: string) => {
    const article = await prisma.article.findFirst({
      where: {
        slug
      }
    })

    return article
  }

  getAllArticles = async () => {
    return await prisma.article.findMany()
  }
}
