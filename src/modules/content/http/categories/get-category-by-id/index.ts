import { getCategoryByIdFactory } from '@/modules/content/use-cases/categories/get-category-by-id/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getCategoryByIdSchema } from './schemas'

export class GetCategoryByIdController extends BaseController {
  private useCase = getCategoryByIdFactory()

  constructor() {
    super({
      method: 'get',
      path: '/categories/:id'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const { id } = getCategoryByIdSchema.parse(request.params)

    const result = await this.useCase.execute(id)

    reply.status(200).send(result)
  }
}

export const getCategoryByIdController = new GetCategoryByIdController()
