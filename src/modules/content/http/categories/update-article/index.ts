import { updateCategoryFactory } from '@/modules/content/use-cases/categories/update-category/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { updateCategorySchema } from './schemas'

export class UpdateCategoryController extends BaseController {
  private useCase = updateCategoryFactory()

  constructor() {
    super({
      method: 'patch',
      path: '/categories'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = updateCategorySchema.parse(request.body)

    const result = await this.useCase.execute(payload)

    return reply.status(200).send(result)
  }
}

export const updateCategoryController = new UpdateCategoryController()
