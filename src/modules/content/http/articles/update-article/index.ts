import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyReply, FastifyRequest } from 'fastify'
import { updateArticleParamsSchema, updateArticleSchema } from './schemas'
import { updateArticleFactory } from '@/modules/content/use-cases/articles/update-article/factory'

export class UpdateArticleController extends BaseController {
  private useCase = updateArticleFactory()

  constructor() {
    super({ method: 'patch', path: '/articles/:id' })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { id } = updateArticleParamsSchema.parse(request.params)

    const payload = updateArticleSchema.parse(request.body)

    const result = await this.useCase.execute(payload, id)

    return reply.status(200).send(result)
  }
}

export const updateArticleController = new UpdateArticleController()
