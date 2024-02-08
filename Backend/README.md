## Sobre o projeto

Um sistema para manipulação de usuários

### Funcionalidades

1. Listar usuários;
2. Cria novo usuários;
3. Editar um usuário existente;
4. Ver dados de um usuário especifico;
5. Excluir um usuário;

### Das tecnologias utilizadas

- NodeJs;
- fastify;
- zod;
- dotenv;
- uuid;
- knex;
- typescript;

### Requisitos para rodar o projeto

1. Node na versão >= 18;

### Como rodar a aplicação

1. Para criar as tablas no banco

```
npm run knex -- migrate:latest
```

2. Para deixar a aplicação funcionando

```
npm run dev
```

### Sobre as tecnologias utilizadas

- O **Zod** serve para validar dados, tipagem e obrigatoriedade por exemplo;
- O **Fastify** é um framework inspirado no Express e no Hapi, possui grande manutenção pela comunidade e o mesmo possui uma ótima velocidade e também boa documentação;
- O **Knex** é um query builder para conexões com bancos como SQLite, MySQL, Oracle entre outros, sendo simples e bém legível.
