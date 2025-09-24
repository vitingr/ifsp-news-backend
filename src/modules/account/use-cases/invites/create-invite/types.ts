import { Prisma } from '@prisma/client'

export interface CreateInviteUseCasePayload
  extends Prisma.InviteUncheckedCreateInput {}

export interface CreateInviteUseCaseReturn {}
