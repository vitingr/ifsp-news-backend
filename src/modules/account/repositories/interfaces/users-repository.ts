import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  createUser: (payload: Prisma.UserUncheckedCreateInput) => Promise<User>
  deleteUser: (id: string) => Promise<User | null>
  getUserByEmail: (email: string) => Promise<User | null>
  getUserById: (id: string) => Promise<User | null>
  getUsers: () => Promise<User[]>
  updateUser: (
    id: string,
    payload: Prisma.UserUncheckedUpdateInput
  ) => Promise<User | null>
}
