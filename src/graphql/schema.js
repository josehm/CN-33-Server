import { gql } from 'apollo-server';

import otrolado from '..'

const typeDefs = gql`
type Book {
  title: String
  author: String
}

type Query {
  books: [Book]
}
`;

export default typeDefs;
