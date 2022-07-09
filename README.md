## you can create any recorde in MongoDb DataBase.
```
## http://localhost:3000/graphQl

## creating 
mutation{
  createMatchData(creatematchInput:{
    matchId:"11"
    seriesName: "World Cup T20"
    teamName: "SCOTLAND"

  }){
    _id
    matchId
    seriesName
    teamName
  }

 ## feting data by id only

 query{
  match(_id:"62c9172dafa8f7579110aaea"){
    _id
    matchId
    teamName
    seriesName
  }
}

## fetching all data 

query{
  matchs{
    _id,
    matchId
    teamName
    seriesName
  }
}
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
