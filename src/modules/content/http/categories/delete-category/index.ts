import { deleteCategoryFactory } from '@/modules/content/use-cases/categories/delete-category/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { deleteCategorySchema } from './schemas'

export class DeleteCategoryController extends BaseController {
  private useCase = deleteCategoryFactory()

  constructor() {
    super({
      method: 'post',
      path: '/categories/:id'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { id } = deleteCategorySchema.parse(request.params)

    await this.useCase.execute(id)

    reply.status(204).send()
  }
}

export const deleteCategoryController = new DeleteCategoryController()
