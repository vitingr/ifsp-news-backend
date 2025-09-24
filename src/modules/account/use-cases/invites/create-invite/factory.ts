import { PrismaInvitesRepository } from "@/modules/account/repositories/prisma/invites-repository"
import { CreateInviteUseCase } from "."

export const createInviteFactory = () => {
  const invitesRepositority = new PrismaInvitesRepository()

  const useCase = new CreateInviteUseCase(invitesRepositority)

  return useCase
}
