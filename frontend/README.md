## Frontend web application

This is the frontend web application for The Crypto Report project. you can start using it [here](https://th-crypto-report.vercel.app/)

## Run locally

- Clone the repository
- Navigate to the frontend folder `cd backend`
- Run `npm start`
- Visit `localhost:3000`

## Test

Run `npm test` to see testing results.

## Technologies used

- React.js `^17.0.2`
- Redux `^4.1.2`
- TypeScript `^4.1.2`
- Bootstrap `^5.1.3`

## GraphQL schema

`Blocks(page: Int): [Block]`

`Block(hash: String): { hash: String, time: Float, size: Float, height: Float, block_index: Float, prev_block: String }`

`pageCount: Int`

## Suggested improvements

- Implement test mockups for the redux store.

- Add more pages to introduce more features
