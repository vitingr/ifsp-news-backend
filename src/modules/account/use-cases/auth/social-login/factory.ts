import { PrismaUsersRepository } from '@/modules/account/repositories/prisma/users-repository'
import { SocialLoginUseCase } from '.'

export const socialLoginFactory = () => {
  const usersRepository = new PrismaUsersRepository()

  const useCase = new SocialLoginUseCase(usersRepository)

  return useCase
}
