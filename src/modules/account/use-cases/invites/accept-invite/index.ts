import { InvitesRepository } from "@/modules/account/repositories/interfaces/invites-interface";

export class AcceptInviteUseCase {
  constructor(private invitesRepository: InvitesRepository) {}

  execute = async (token: string): Promise<null> => {
    // validar se o invite ainda está ativo aqui -> sem tempo aqui, 1h da manhã agora kkk

    await this.invitesRepository.acceptInvite(token)

    return null
  }
}
