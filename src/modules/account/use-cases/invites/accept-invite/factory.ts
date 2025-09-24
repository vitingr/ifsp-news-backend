import { PrismaInvitesRepository } from '@/modules/account/repositories/prisma/invites-repository'
import { AcceptInviteUseCase } from '.'

export const acceptInviteFactory = () => {
  const invitesRepositority = new PrismaInvitesRepository()

  const useCase = new AcceptInviteUseCase(invitesRepositority)

  return useCase
}
