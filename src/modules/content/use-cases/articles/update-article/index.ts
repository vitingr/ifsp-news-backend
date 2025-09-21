import { ArticlesRepository } from '@/modules/content/repositories/interfaces/articles-repository'
import { EditArticleUseCasePayload, EditArticleUseCaseReturn } from './types'
import { ArticleAlreadyExistsError, ArticleDoesNotExistError } from '@/shared/infra/http/exceptions/articles'

export class UpdateArticleUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute = async (
    payload: EditArticleUseCasePayload
  ): Promise<EditArticleUseCaseReturn> => {
    const articleAlreadyExists = await this.articlesRepository.getArticleBySlug(
      payload.slug
    )

    if (!articleAlreadyExists) {
      throw new ArticleDoesNotExistError()
    }

    const article = await this.articlesRepository.updateArticle(payload)

    return {
      article
    }
  }
}
