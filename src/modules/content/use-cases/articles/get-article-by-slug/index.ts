import { ArticlesRepository } from '@/modules/content/repositories/interfaces/articles-repository'
import { ArticleDoesNotExistError } from '@/shared/infra/http/exceptions/articles'
import { Article } from '@prisma/client'

export class GetArticleBySlugUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute = async (slug: string): Promise<Article | null> => {
    const article = await this.articlesRepository.getArticleBySlug(slug)

    console.log(JSON.stringify(article))

    if (!article) {
      throw new ArticleDoesNotExistError()
    }

    return article
  }
}
