import { createCategoryFactory } from '@/modules/content/use-cases/categories/create-category/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { createCategorySchema } from './schemas'

export class CreateCategoryController extends BaseController {
  private useCase = createCategoryFactory()

  constructor() {
    super({
      method: 'post',
      path: '/categories'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const payload = createCategorySchema.parse(request.body)

    const result = await this.useCase.execute(payload)

    return reply.status(201).send(result)
  }
}

export const createCategoryController = new CreateCategoryController()
