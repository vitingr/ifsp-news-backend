import { User } from "@prisma/client";

export interface AuthorsRepository {
  getAllAuthors: () => Promise<User[]>
}
