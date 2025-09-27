import { User } from '@prisma/client'
import { AuthorsRepository } from '../interfaces/authors-repository'
import { prisma } from '@/shared/infra/database/prisma/client'

export class PrismaAuthorsRepository implements AuthorsRepository {
  getAllAuthors = async () => {
    const authors = await prisma.user.findMany({
      where: {
        role: 'author'
      }
    })

    return authors
  }
}
