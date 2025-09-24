import { InvitesRepository } from '@/modules/account/repositories/interfaces/invites-interface'
import {
  InviteDoesNotExistError,
  InviteExpiredExistError
} from '@/shared/infra/http/exceptions/invites'

export class AcceptInviteUseCase {
  constructor(private invitesRepository: InvitesRepository) {}

  execute = async (token: string): Promise<null> => {
    const inviteAlreadyExists =
      await this.invitesRepository.getInviteByToken(token)

    if (!inviteAlreadyExists) {
      throw new InviteDoesNotExistError()
    }

    const isInviteExpired = inviteAlreadyExists.expiresAt.getTime() < Date.now()

    if (isInviteExpired) {
      throw new InviteExpiredExistError()
    }

    await this.invitesRepository.acceptInvite(token)

    return null
  }
}
