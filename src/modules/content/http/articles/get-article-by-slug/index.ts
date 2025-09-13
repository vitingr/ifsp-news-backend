import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getArticleBySlugSchema } from './schemas'
import { getArticleBySlugFactory } from '@/modules/content/use-cases/articles/get-article-by-slug/factory'

export class GetArticleBySlugController extends BaseController {
  private useCase = getArticleBySlugFactory()

  constructor() {
    super({
      method: 'get',
      path: '/articles/slug/:slug'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const { articleSlug } = getArticleBySlugSchema.parse(request.params)

    const result = await this.useCase.execute(articleSlug)

    reply.status(200).send(result)
  }
}

export const getArticleBySlugController = new GetArticleBySlugController()
