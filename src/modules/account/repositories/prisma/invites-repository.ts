import { Invite, Prisma, UserRoleEnum } from '@prisma/client'
import { InvitesRepository } from '../interfaces/invites-interface'
import { prisma } from '@/shared/infra/database/prisma/client'
import { generateRandomNumber } from '@/shared/types/utilities/generate-random-number'

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

  createInvite = async (email: string, role: UserRoleEnum) => {
    const tokenId = generateRandomNumber()

    const expirationDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)

    const invite = await prisma.invite.create({
      data: {
        email,
        role,
        expiresAt: expirationDate,
        token: tokenId,
        used: false
      }
    })

    return invite
  }

  getInviteByToken = async (token: string) => {
    const invite = await prisma.invite.findFirst({
      where: {
        token
      }
    })

    if (invite) {
      return invite
    }

    return null
  }
}
