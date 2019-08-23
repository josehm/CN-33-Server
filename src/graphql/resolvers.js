import {
  createPost,
  getPost,
} from '../actions/postActions';

import {
  addCommentToPostActions,
} from '../actions/commentActions';

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    books: () => books,
    getPost: async (parent, args, context, info) => {
      try {
        return await getPost();
      } catch (error) {
        return null;
      }
    }
  },
  Mutation: {
    addPost: async (parent, args, context, info) => await createPost(args.data),
    addCommentToPost: async (parent, { data }, context, info) => {
      try {
        return await addCommentToPostActions(data);
      } catch (error) {
        return error;
      }
    }
  }
}

export default resolvers;
