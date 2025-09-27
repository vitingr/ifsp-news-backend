import { getAllAuthorsFactory } from "@/modules/account/use-cases/authors/get-all-authors/factory";
import { BaseController } from "@/shared/infra/http/controllers/base-controller";
import { FastifyRequest, FastifyReply } from "fastify";

export class GetAllAuthorsController extends BaseController {
  private useCase = getAllAuthorsFactory()

  constructor() {
    super({method: "get", path: "/authors"})
  }

  protected async execute(request: FastifyRequest, reply: FastifyReply): Promise<void> {
      const response = await this.useCase.execute()

      return reply.status(200).send(response)
  }
}

export const getAllAuthorsController = new GetAllAuthorsController()
