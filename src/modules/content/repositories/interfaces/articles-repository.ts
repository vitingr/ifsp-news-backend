import { Article, Prisma } from '@prisma/client'

export type GetArticlesReturn = Prisma.ArticleGetPayload<{
  include: {
    author: true
  }
}>

export interface ArticlesRepository {
  createArticle: (
    payload: Prisma.ArticleUncheckedCreateInput & { categories: string[] }
  ) => Promise<Article>
  deleteArticle: (id: string) => Promise<null>
  getArticleById: (id: string) => Promise<Article | null>
  getAllArticles: () => Promise<Article[] | null>
  getArticleBySlug: (slug: string) => Promise<Article | null>
  updateArticle: (
    payload: Omit<Prisma.ArticleUncheckedCreateInput, 'authorId'> & {
      categories: string[]
    },
    id: string
  ) => Promise<Article>
}
