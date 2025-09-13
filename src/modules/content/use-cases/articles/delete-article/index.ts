import { ArticlesRepository } from '@/modules/content/repositories/interfaces/articles-repository'
import { ArticleDoesNotExistError } from '@/shared/infra/http/exceptions/articles'

export class DeleteArticleUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute = async (id: string): Promise<null> => {
    const article = await this.articlesRepository.getArticleById(id)

    if (!article) {
      throw new ArticleDoesNotExistError()
    }

    await this.articlesRepository.deleteArticle(id)

    return null
  }
}
