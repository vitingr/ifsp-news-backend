import React from 'react'

import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Button,
  Hr
} from '@react-email/components'
import { InviteEmailProps } from './types'

export const InviteEmail = ({ inviteLink }: InviteEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Convite para ser autor no Portal de Notícias do IFSP</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🎉 Convite Especial do IFSP</Heading>

          <Text style={text}>
            Olá, <br />
            Você foi convidado para participar do{' '}
            <strong>Portal de Notícias do IFSP</strong>. Essa é uma oportunidade
            de compartilhar informações, novidades e conteúdos relevantes com
            toda a comunidade acadêmica.
          </Text>

          <Text style={text}>
            Sua função será: <strong>Autor</strong>
          </Text>

          <Section style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button href={inviteLink} style={button}>
              Aceitar Convite
            </Button>
          </Section>

          <Hr style={hr} />

          <Text style={text}>
            Ao aceitar o convite, você terá acesso à plataforma onde poderá:
          </Text>
          <ul style={{ ...text, paddingLeft: '20px' }}>
            <li>Publicar e gerenciar suas próprias notícias;</li>
            <li>Colaborar com outros autores e editores;</li>
            <li>Ficar por dentro das novidades do IFSP em primeira mão.</li>
          </ul>

          <Text style={text}>
            Caso não tenha solicitado este convite, basta ignorar esta mensagem.
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            Este é um convite automático enviado pela plataforma de notícias do
            IFSP. <br />
            Em caso de dúvidas, entre em contato com a coordenação.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f9fafb',
  fontFamily: 'Arial, sans-serif'
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '600px',
  border: '1px solid #e5e7eb'
}

const h1 = {
  fontSize: '22px',
  marginBottom: '16px',
  color: '#111827'
}

const text = {
  fontSize: '15px',
  lineHeight: '22px',
  color: '#374151'
}

const button = {
  backgroundColor: '#1d4ed8',
  color: '#ffffff',
  padding: '12px 20px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: 'bold'
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '24px 0'
}

const footer = {
  fontSize: '12px',
  color: '#6b7280',
  textAlign: 'center' as const
}
