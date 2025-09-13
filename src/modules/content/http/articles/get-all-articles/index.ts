import { getAllArticlesFactory } from '@/modules/content/use-cases/articles/get-all-articles/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'

export class GetAllArticlesController extends BaseController {
  private useCase = getAllArticlesFactory()

  constructor() {
    super({
      method: 'get',
      path: '/articles',
      isPublicRoute: true
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const result = await this.useCase.execute()

    reply.status(200).send(result)
  }
}

export const getAllArticlesController = new GetAllArticlesController()
