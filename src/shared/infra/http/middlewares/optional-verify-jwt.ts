import { FastifyReply, FastifyRequest } from 'fastify'

/**
 * Used in public routes to identify user if token is provided.
 * Does not throw error when token is not provided.
 */
export async function optionalVerifyJWT(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const data = await request.jwtVerify<{ sub: string }>()

    request.user = { sub: data.sub }
  } catch (err) {
    // nothing :D
  }
}
