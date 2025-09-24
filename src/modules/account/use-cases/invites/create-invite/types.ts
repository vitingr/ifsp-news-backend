import { Prisma, UserRoleEnum } from '@prisma/client'

export interface CreateInviteUseCasePayload {
  email: string
  role: UserRoleEnum
}

export interface CreateInviteUseCaseReturn {}
