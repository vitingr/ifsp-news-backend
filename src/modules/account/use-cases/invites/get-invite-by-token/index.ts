import { InvitesRepository } from '@/modules/account/repositories/interfaces/invites-interface'
import { InviteDoesNotExistError } from '@/shared/infra/http/exceptions/invites'
import { Invite } from '@prisma/client'

export class GetInviteByTokenUseCase {
  constructor(private invitesRepository: InvitesRepository) {}

  execute = async (token: string): Promise<Invite> => {
    const invite = await this.invitesRepository.getInviteByToken(token)

    if (!invite) {
      throw new InviteDoesNotExistError()
    }

    return invite
  }
}
