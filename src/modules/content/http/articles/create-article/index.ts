import { createArticleFactory } from '@/modules/content/use-cases/articles/create-article/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyReply, FastifyRequest } from 'fastify'
import { createArticleSchema } from './schemas'

export class CreateArticleController extends BaseController {
  private useCase = createArticleFactory()

  constructor() {
    super({
      method: 'post',
      path: '/articles'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const payload = createArticleSchema.parse(request.body)

    console.log(request.user.sub)
    console.log(payload)

    const result = await this.useCase.execute({
      ...payload,
      authorId: request.user.sub
    })

    return reply.status(201).send(result)
  }
}

export const createArticleController = new CreateArticleController()
