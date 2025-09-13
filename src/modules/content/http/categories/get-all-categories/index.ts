import { getAllCategoriesFactory } from '@/modules/content/use-cases/categories/get-all-categories/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'

export class GetAllCategoriesController extends BaseController {
  private useCase = getAllCategoriesFactory()

  constructor() {
    super({
      method: 'get',
      path: '/categories',
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

export const getAllCategoriesController = new GetAllCategoriesController()
