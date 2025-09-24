import { InvitesRepository } from '@/modules/account/repositories/interfaces/invites-interface'
import { CreateInviteUseCasePayload, CreateInviteUseCaseReturn } from './types'

export class CreateInviteUseCase {
  constructor(private invitesRepositority: InvitesRepository) {}

  execute = async (
    payload: CreateInviteUseCasePayload
  ): Promise<CreateInviteUseCaseReturn> => {
    // checar aqui futuramente se o invite já foi aceito

    const invite = await this.invitesRepositority.createInvite(payload)

    return {
      invite
    }
  }
}
