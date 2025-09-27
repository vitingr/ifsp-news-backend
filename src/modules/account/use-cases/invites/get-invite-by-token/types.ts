import { Invite } from '@prisma/client'

export interface GetInviteByTokenReturn {
  invite: Invite
}
