import { Invite, Prisma } from '@prisma/client'
import { InvitesRepository } from '../interfaces/invites-interface'
import { prisma } from '@/shared/infra/database/prisma/client'

export class PrismaInvitesRepository implements InvitesRepository {
  acceptInvite = async (token: string) => {
    return await prisma.invite.update({
      where: {
        token
      },
      data: {
        used: true
      }
    })
  }

  createInvite = async (payload: Prisma.InviteUncheckedCreateInput) => {
    const invite = await prisma.invite.create({
      data: payload
    })

    return invite
  }
}
