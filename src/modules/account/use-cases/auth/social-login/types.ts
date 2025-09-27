import { SUPPORTED_SOCIAL_AUTH_TYPES } from '@/modules/account/use-cases/auth/social-login/constants'
import { User } from '@prisma/client'

export interface SocialLoginUseCasePayload {
  email: string
  socialToken: string
  socialType: (typeof SUPPORTED_SOCIAL_AUTH_TYPES)[number]
  avatarUrl: string
  role: string
  name: string
}

export interface SocialLoginUseCaseReturn {
  user: User
}
