import { getArticleByIdFactory } from '@/modules/content/use-cases/articles/get-article-by-id/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getArticleByIdSchema } from './schemas'

export class GetArticleByIdController extends BaseController {
  private useCase = getArticleByIdFactory()

  constructor() {
    super({
      method: 'get',
      path: '/articles/id/:id'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const { articleId } = getArticleByIdSchema.parse(request.params)

    const result = await this.useCase.execute(articleId)

    reply.status(200).send(result)
  }
}

export const getArticleByIdController = new GetArticleByIdController()
