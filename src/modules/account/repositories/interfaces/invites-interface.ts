import { Invite, Prisma } from "@prisma/client";

export interface InvitesRepository {
  createInvite: (payload: Prisma.InviteUncheckedCreateInput) => Promise<Invite>
  acceptInvite: (token: string) => Promise<Invite | void>
}
