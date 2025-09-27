import { AuthorsRepository } from "@/modules/account/repositories/interfaces/authors-repository";
import { AuthorDoesNotExistError } from "@/shared/infra/http/exceptions/authors";
import { User } from "@prisma/client";

export class GetAllAuthorsUseCase {
  constructor(private authorsRepository: AuthorsRepository) {}

  execute = async (): Promise<User[]> => {
    const authors = await this.authorsRepository.getAllAuthors()

    if (!authors) {
      throw new AuthorDoesNotExistError()
    }

    return authors
  }
}
