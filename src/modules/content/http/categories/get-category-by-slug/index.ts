import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getCategoryBySlugSchema } from './schemas'
import { getCategoryBySlugFactory } from '@/modules/content/use-cases/categories/get-category-by-slug/factory'


export class GetCategoryBySlugController extends BaseController {
  private useCase = getCategoryBySlugFactory()

  constructor() {
    super({
      method: 'get',
      path: '/categories/slug/:slug',
      isPublicRoute: true
    })
  }

  protected async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    const { slug } = getCategoryBySlugSchema.parse(request.params)

    const result = await this.useCase.execute(slug)

    reply.status(200).send(result)
  }
}

export const getCategoryBySlugController = new GetCategoryBySlugController()
