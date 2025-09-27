import { FastifyInstance } from 'fastify'

import { getAllAuthorsController } from './get-all-authors'

export const authorsRoutes = async (app: FastifyInstance) => {
  getAllAuthorsController.register(app)
}
