import { createInviteFactory } from '@/modules/account/use-cases/invites/create-invite/factory'
import { BaseController } from '@/shared/infra/http/controllers/base-controller'
import { FastifyRequest, FastifyReply } from 'fastify'
import { createInviteSchema } from './types'
import { UserRoleEnum } from '@prisma/client'
import { resend } from '@/services/resend/client'
import { env } from '@/shared/config/env'
import { generateInviteEmailHtml } from '@/services/templates/invite/render'

export class CreateInviteController extends BaseController {
  private useCase = createInviteFactory()

  constructor() {
    super({
      method: 'post',
      path: '/invites/create-invite'
    })
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply) {
    const { email, role } = createInviteSchema.parse(request.body)

    const result = await this.useCase.execute(email, role as UserRoleEnum)

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Convite para ser autor no Portal de Notícias do IFSP',
        html: await generateInviteEmailHtml(
          `${env.WEBPAGE_BASE_URL}/invites?inviteToken=${result.invite.token}`
        )
      })
      // await resend.emails.send({
      //   from: 'onboarding@resend.dev',
      //   to: email,
      //   subject: 'Você foi convidado!',
      //   html: `
      //     <h1>Convite para acessar a plataforma</h1>
      //     <p>Você recebeu um convite para acessar a plataforma com a role: <strong>${role}</strong></p>
      //     <p>Clique <a href="${env.WEBPAGE_BASE_URL}/invite/${result.invite.token}">aqui</a> para aceitar.</p>
      //   `
      // })
    } catch (err) {
      request.log.error({ err }, 'ERROR! Cannot send resend email to user')
    }

    return reply.status(201).send(result)
  }
}

export const createInviteController = new CreateInviteController()
