import { ArticlesRepository } from '@/modules/content/repositories/interfaces/articles-repository'
import { ArticleDoesNotExistError } from '@/shared/infra/http/exceptions/articles'
import { Article } from '@prisma/client'

export class getAllArticlesUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute = async (): Promise<Article[] | null> => {
    const articles = await this.articlesRepository.getAllArticles()

    if (!articles) {
      throw new ArticleDoesNotExistError()
    }

    return articles
  }
}
