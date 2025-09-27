import { SUPPORTED_SOCIAL_AUTH_TYPES } from '@/modules/account/use-cases/auth/social-login/constants'
import z from 'zod'

export const socialLoginBodySchema = z.object({
  email: z.string().email(),
  socialToken: z.string(),
  socialType: z.enum(SUPPORTED_SOCIAL_AUTH_TYPES),
  role: z.string().default("student"),
  name: z.string(),
  avatarUrl: z
    .string()
    .default(
      'https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'
    )
})
