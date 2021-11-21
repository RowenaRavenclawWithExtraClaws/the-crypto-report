## Backend API

This is the backend API for The Crypto Report web project. you can play with it [here](https://dashboard.heroku.com/apps/crypto-report-backend/graphql)

## Run locally

- Clone the repository
- Navigate to the backend folder `cd backend`
- Run `node app.js` or `nodemon app.js` if you have Nodemon installed.
- Visit `localhost:8000`

## Technologies used

- Node.js `16.13.0`
- Express.js `^4.17.1`
- GraphQL (JavaScript implementation) `^15.5.1`

## Endpoints

There is only one endpoints which is `/graphql` to handle GraphQL queries

## GraphQL schema

`Blocks(page: Int): [Block]`

`Block(hash: String): { hash: String, time: Float, size: Float, height: Float, block_index: Float, prev_block: String }`

`pageCount: Int`

## What is lacking?

- Testing
- User authentication
- Caching

## Suggested improvements

- Implement test suites for testing graphql resolvers

- Implement stress testing strategy

- Implement signup/signin cababilities

- Setup caching mechanism, may be using write around techniques to enhance read operations speed.
