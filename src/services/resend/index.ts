import { env } from '@/shared/config/env'

import { Resend } from 'resend'

const resend = new Resend(env.RESEND_API_KEY)

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'vitorgabrielsbo1460@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
})
