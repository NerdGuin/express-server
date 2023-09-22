# API Express Simples

Esta é uma API simples construída com o framework Express.js em Node.js.

<img src='https://i.imgur.com/4WVbH1k.png' style="height: 128px;"/><img src='https://i.imgur.com/nH3T2iK.png' style="height: 128px;"/><img src='https://i.imgur.com/y2FLWGx.png' style="height: 128px;"/>

## Rotas

- `GET /api`: Obtém detalhes essenciais sobre a API, incluindo a versão atual.
- `GET /api/users`: Obtém a lista de usuários.
- `GET /api/users/:id`: Obtém informações sobre um usuário específico.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js
- npm ou yarn

## Instalação e Uso

1. Clone este repositório:

   ```shell
   git clone https://github.com/NerdGuin/express-server.git
   
2. Na raiz do seu projeto, crie um arquivo chamado ``.env``. Dentro desse arquivo, defina a variável ``DATABASE_URL`` e atribua a ela o valor da URL do seu banco de dados MongoDB.
    ```shell
    DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net
