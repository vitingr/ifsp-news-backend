import fastify from 'fastify'

import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'

import { env } from './shared/config/env'

import { articlesRoutes } from './modules/content/http/articles/routes'
import { categoriesRoutes } from './modules/content/http/categories/routes'
import { authRoutes } from './modules/account/http/auth/routes'
import { usersRoutes } from './modules/account/http/users/routes'
import { invitesRoutes } from './modules/account/http/invites/routes'

export const app = fastify({
  logger: {
    enabled: env.DEBUG === 'true'
  }
})

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Access-Control-Allow-Credentials',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
    'Cookie'
  ],
  credentials: true,
  exposedHeaders: ['Set-Cookie']
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: true
  },
  sign: {
    expiresIn: '7d'
  }
})

app.register(fastifyCookie, {
  secret: env.JWT_SECRET
})

app.register(authRoutes)
app.register(articlesRoutes)
app.register(categoriesRoutes)
app.register(usersRoutes)
app.register(invitesRoutes)

app.get('/', (_, reply) => {
  return reply.send({
    name: 'projeto-ifsp-web-news',
    status: 'healthy'
  })
})
