import { ArticlesRepository } from '@/modules/content/repositories/interfaces/articles-repository'
import {
  CreateArticleUseCasePayload,
  CreateArticleUseCaseReturn
} from './types'
import { ArticleAlreadyExistsError } from '@/shared/infra/http/exceptions/articles'

export class CreateArticleUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  execute = async (
    payload: CreateArticleUseCasePayload
  ): Promise<CreateArticleUseCaseReturn> => {
    const articleAlreadyExists = await this.articlesRepository.getArticleBySlug(
      payload.slug
    )

    if (articleAlreadyExists) {
      throw new ArticleAlreadyExistsError()
    }

    const article = await this.articlesRepository.createArticle(payload)

    return {
      article
    }
  }
}
