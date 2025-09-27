import { getInviteByTokenFactory } from '@/modules/account/use-cases/invites/get-invite-by-token/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { getInviteByTokenParamsSchema } from './schemas'

export class GetInviteByTokenController extends BaseController {
  private useCase = getInviteByTokenFactory()

  constructor() {
    super({
      method: 'get',
      path: '/invites/:token',
      isPublicRoute: true
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { token } = getInviteByTokenParamsSchema.parse(request.params)

    const result = await this.useCase.execute(token)

    return reply.status(200).send(result)
  }
}

export const getInviteByTokenController = new GetInviteByTokenController()
