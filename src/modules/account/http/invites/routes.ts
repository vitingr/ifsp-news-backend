import { FastifyInstance } from "fastify";

import { createInviteController } from "./create-invite";
import { acceptInviteController } from "./accept-invite";
import { getInviteByTokenController } from "./get-invite-by-token";

export const invitesRoutes = async (app: FastifyInstance) => {
  createInviteController.register(app)
  acceptInviteController.register(app)
  getInviteByTokenController.register(app)
}
