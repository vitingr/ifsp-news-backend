import { updateCategoryFactory } from '@/modules/content/use-cases/categories/update-category/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { updateCategoryParamsSchema, updateCategorySchema } from './schemas'

export class UpdateCategoryController extends BaseController {
  private useCase = updateCategoryFactory()

  constructor() {
    super({
      method: 'patch',
      path: '/categories/:id'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const { id } = updateCategoryParamsSchema.parse(request.params)

    const payload = updateCategorySchema.parse(request.body)

    const result = await this.useCase.execute(payload, id)

    return reply.status(200).send(result)
  }
}

export const updateCategoryController = new UpdateCategoryController()
