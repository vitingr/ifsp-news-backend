import { acceptInviteFactory } from '@/modules/account/use-cases/invites/accept-invite/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { acceptInviteSchema } from './types'

export class AcceptInviteController extends BaseController {
  private useCase = acceptInviteFactory()

  constructor() {
    super({
      method: 'post',
      path: '/invites/accept-invite'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { token } = acceptInviteSchema.parse(request.body)

    const result = await this.useCase.execute(token)

    return reply.status(200).send(result)
  }
}

export const acceptInviteController = new AcceptInviteController()
