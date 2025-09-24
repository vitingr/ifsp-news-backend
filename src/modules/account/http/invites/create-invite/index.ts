import { createInviteFactory } from '@/modules/account/use-cases/invites/create-invite/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { createInviteSchema } from './types'
import { UserRoleEnum } from '@prisma/client'

export class CreateInviteController extends BaseController {
  private useCase = createInviteFactory()

  constructor() {
    super({
      method: 'post',
      path: '/create-invite'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { email, role } = createInviteSchema.parse(request.body)

    const result = await this.useCase.execute(email, role as UserRoleEnum)

    return reply.status(201).send(result)
  }
}

export const createInviteController = new CreateInviteController()
