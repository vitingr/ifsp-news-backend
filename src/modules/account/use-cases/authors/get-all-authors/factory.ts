import { PrismaAuthorsRepository } from "@/modules/account/repositories/prisma/authors-repository"
import { GetAllAuthorsUseCase } from "."

export const getAllAuthorsFactory = () => {
  const authorsRepository = new PrismaAuthorsRepository()

  const useCase = new GetAllAuthorsUseCase(authorsRepository)

  return useCase
}
