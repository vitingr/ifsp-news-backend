import { deleteArticleFactory } from '@/modules/content/use-cases/articles/delete-article/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { deleteArticleSchema } from './schemas'

export class DeleteArticleController extends BaseController {
  private useCase = deleteArticleFactory()

  constructor() {
    super({
      method: 'post',
      path: '/articles/:id'
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const { id } = deleteArticleSchema.parse(request.params)

    await this.useCase.execute(id)

    reply.status(204).send()
  }
}

export const deleteArticleController = new DeleteArticleController()
