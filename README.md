# Simple Express API

This is a simple API built using the Express.js framework in Node.js.

## Routes

- `GET /api`: Retrieves essential details about the API, including the current version.
- `GET /api/users`: Retrieves the list of users.
- `GET /api/users/:id`: Retrieves information about a specific user.

## Prerequisites

Before getting started, make sure you have the following tools installed on your machine:

- Node.js
- npm or yarn

## Installation and Usage

1. Clone this repository:

   ```shell
   git clone https://github.com/NerdGuin/express-server.git

2. In the root of your project, create a file named .env. Inside this file, set the DATABASE_URL variable and assign it the value of your MongoDB database URL.

   ```shell
   DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net
