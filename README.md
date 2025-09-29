# Blog IFSP Capivari - Backend

Este é o backend do projeto **Blog IFSP Capivari**, desenvolvido com **Node.js**, **TypeScript** e **Fastify**. Ele oferece uma API REST completa para gerenciar usuários, artigos, categorias e convites. Também integra serviços de envio de e-mail (via Resend) e armazenamento de arquivos (via Supabase).

---

## Tecnologias utilizadas

- [Fastify](https://www.fastify.io/) – Framework web rápido e leve
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática para maior robustez
- [Prisma](https://www.prisma.io/) – ORM para modelagem e acesso ao banco de dados
- [Resend](https://resend.com/) – Envio de e-mails transacionais
- [Supabase Storage](https://supabase.com/storage) – Armazenamento de imagens (thumbnails de artigos, avatares)
- [Zod](https://zod.dev/) – Validação de schemas e tipos
- [JWT](https://jwt.io/) – Autenticação com tokens

---

## Funcionalidades da API

### Autenticação
- Login com e-mail e senha
- Registro via convite com token
- Criação de JWTs

### Artigos
- CRUD de artigos
- Upload de thumbnail via Supabase
- Associação com categorias e autores

### Usuários
- Cadastro via convite
- Gerenciamento de perfis e permissões (admin, autor, etc.)

### Convites
- Envio de convites por e-mail
- Link único com token
- Aceitação de convite com criação de conta

### Categorias
- Criação e edição de categorias de artigos
- Associação de múltiplos artigos a categorias

---
