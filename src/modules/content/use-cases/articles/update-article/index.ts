import { ArticlesRepository } from '@/modules/content/repositories/interfaces/articles-repository'
import { EditArticleUseCasePayload, EditArticleUseCaseReturn } from './types'
import { ArticleDoesNotExistError } from '@/shared/infra/http/exceptions/articles'

export class UpdateArticleUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute = async (
    payload: EditArticleUseCasePayload,
    id: string
  ): Promise<EditArticleUseCaseReturn> => {
    const articleAlreadyExists =
      await this.articlesRepository.getArticleById(id)

    if (!articleAlreadyExists) {
      throw new ArticleDoesNotExistError()
    }

    const article = await this.articlesRepository.updateArticle(payload)

    return {
      article
    }
  }
}
