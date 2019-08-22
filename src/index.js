require("dotenv").config();

import { ApolloServer } from 'apollo-server';
import mongoose from "mongoose";

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

mongoose.connect(
  process.env.DATABASE,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
  }
);

const mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'Error de conexion !!'));
mongoDB.on('open', () => console.log('BD conectada !!'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
