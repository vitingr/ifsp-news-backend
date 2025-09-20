import { FastifyInstance } from 'fastify'

import { refreshTokenController } from './refresh-token'
import { socialLoginController } from './social-login'

export const authRoutes = async (app: FastifyInstance) => {
  socialLoginController.register(app)
  refreshTokenController.register(app)
}
