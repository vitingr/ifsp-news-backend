import { acceptInviteFactory } from '@/modules/account/use-cases/invites/accept-invite/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { acceptInviteSchema } from './types'

export class AcceptInviteController extends BaseController {
  private useCase = acceptInviteFactory()

  constructor() {
    super({
      method: 'post',
      path: '/accept-invite',
      isPublicRoute: true
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { token } = acceptInviteSchema.parse(request.params)

    const result = await this.useCase.execute(token)
  }
}

export const acceptInviteController = new AcceptInviteController()
