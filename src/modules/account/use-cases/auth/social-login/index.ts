import { OAuth2Client } from 'google-auth-library'
import { env } from '@/shared/config/env'
import { InvalidSocialAccountError } from '@/shared/infra/http/exceptions/auth'
import { UserDoesNotExistError } from '@/shared/infra/http/exceptions/user'
import { UsersRepository } from '@/modules/account/repositories/interfaces/users-repository'
import { SocialLoginUseCasePayload, SocialLoginUseCaseReturn } from './types'
import { createUserFactory } from '../../users/create-user/factory'
import { UserRoleEnum } from '@prisma/client'

const createUserUseCase = createUserFactory()

export class SocialLoginUseCase {
  private googleClient: OAuth2Client

  protected readonly usersRepository: UsersRepository

  constructor(usersRepository: UsersRepository) {
    this.googleClient = new OAuth2Client(env.GOOGLE_CLIENT_ID)
    this.usersRepository = usersRepository
  }

  validateGoogleAccount = async (socialToken: string) => {
    try {
      const ticket = await this.googleClient.verifyIdToken({
        idToken: socialToken,
        audience: env.GOOGLE_CLIENT_ID
      })

      const payload = ticket.getPayload()

      if (!payload) {
        throw new InvalidSocialAccountError()
      }

      return payload
    } catch (error) {
      console.error({
        validateGoogleAccount: error
      })

      throw new InvalidSocialAccountError()
    }
  }

  protected async getOrCreateUser(
    email: string,
    name: string,
    role: string,
    avatarUrl: string
  ) {
    let user = await this.usersRepository.getUserByEmail(email)

    if (!user) {
      const { user: newUser } = await createUserUseCase.execute({
        email,
        avatarUrl,
        role: role as UserRoleEnum,
        name
      })

      user = {
        ...newUser
      }
    }

    if (user) return user
  }

  execute = async (
    payload: SocialLoginUseCasePayload
  ): Promise<SocialLoginUseCaseReturn> => {
    const { email, socialType, socialToken, avatarUrl, name, role } = payload

    const user = await this.getOrCreateUser(email, name, role, avatarUrl)

    if (!user?.id) {
      throw new UserDoesNotExistError()
    }

    switch (socialType) {
      case 'google':
        await this.validateGoogleAccount(socialToken)
        break
    }

    return { user }
  }
}
