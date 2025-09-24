import { FastifyInstance } from "fastify";
import { createInviteController } from "./create-invite";
import { acceptInviteController } from "./accept-invite";

export const invitesRoutes = async (app: FastifyInstance) => {
  createInviteController.register(app)
  acceptInviteController.register(app)
}
