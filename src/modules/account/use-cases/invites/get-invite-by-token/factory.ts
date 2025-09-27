import { PrismaInvitesRepository } from '@/modules/account/repositories/prisma/invites-repository'
import { GetInviteByTokenUseCase } from '.'

export const getInviteByTokenFactory = () => {
  const invitesRepository = new PrismaInvitesRepository()

  const useCase = new GetInviteByTokenUseCase(invitesRepository)

  return useCase
}
