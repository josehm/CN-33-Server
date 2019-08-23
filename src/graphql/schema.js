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

input CommentInput {
  content: String!
  postID: ID
}

input PostInput {
  title: String,
  content: String
}

type Mutation {
  addPost(data: PostInput) : Post
  addCommentToPost(data: CommentInput) : Comment
  updatePost(data: PostInput, postID: ID) : Post
}
`;

export default typeDefs;
