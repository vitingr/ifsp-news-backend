import { InvitesRepository } from '@/modules/account/repositories/interfaces/invites-interface'
import { CreateInviteUseCaseReturn } from './types'
import { UserRoleEnum } from '@prisma/client'

export class CreateInviteUseCase {
  constructor(private invitesRepository: InvitesRepository) {}

  execute = async (
    email: string,
    role: UserRoleEnum
  ): Promise<CreateInviteUseCaseReturn> => {
    const invite = await this.invitesRepository.createInvite(email, role)

    return {
      invite
    }
  }
}
