import { gql } from 'apollo-server';

const typeDefs = gql`
type Book {
  title: String
  author: String
}

type Post {
  _id: ID
  title: String,
  content: String
  likes: Int
  comments: [Comment]
}

type Query {
  books: [Book]
  getPost: [Post]
}

type Comment {
  _id: ID
  content: String
  postID: ID
}

type User {
  _id: ID
  name: String!
  lastName: String
  email: String
  password: String
  gender: Gender
}

input CommentInput {
  content: String!
  postID: ID
}

input PostInput {
  title: String,
  content: String
}

enum Gender {
  HOMBRE
  MUJER
}

input UserInput {
  name: String!
  lastName: String
  email: String
  password: String
  gender: Gender
}

type Mutation {
  addPost(data: PostInput) : Post
  addCommentToPost(data: CommentInput) : Comment
  addUser(data: UserInput) : User
  updatePost(data: PostInput, postID: ID) : Post
}
`;

export default typeDefs;
