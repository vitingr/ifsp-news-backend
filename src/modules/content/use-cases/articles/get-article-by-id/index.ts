import { ArticlesRepository } from '@/modules/content/repositories/interfaces/articles-repository'
import { ArticleDoesNotExistError } from '@/shared/infra/http/exceptions/articles'
import { Article } from '@prisma/client'

export class GetArticleByIdUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute = async (id: string): Promise<Article | null> => {
    const article = await this.articlesRepository.getArticleById(id)

    if (!article) {
      throw new ArticleDoesNotExistError()
    }

    return article
  }
}
