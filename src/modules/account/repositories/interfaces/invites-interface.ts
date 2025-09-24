import { Invite, Prisma, UserRoleEnum } from '@prisma/client'

export interface InvitesRepository {
  createInvite: (email: string, role: UserRoleEnum) => Promise<Invite>
  acceptInvite: (token: string) => Promise<Invite | void>
  getInviteByToken: (token: string) => Promise<Invite | null>
}
