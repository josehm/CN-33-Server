import {
  createPost,
  getPost,
  updatePost,
} from '../actions/postActions';

import {
  addCommentToPostActions,
} from '../actions/commentActions';

import {
  addUserAction,
  doLoginAction,
} from '../actions/userActions';


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
    },
    updatePost: async (parent, { data, postID }, context, info) => {
      try {
        const filter = { _id: postID };
        const update = { $set: { ...data } };
        return await updatePost(filter, update);
      } catch (error) {
        return error;
      }
    },
    addUser: async (parent, { data }, context, info) => {
      try {
        return await addUserAction(data);
      } catch (error) {
        return error;
      }
    },
    doLogin: async (parent, { email, password }, context, info) => {
      try {
        return await doLoginAction(email, password);
      } catch (error) {
        return error;
      }
    }
  }
}

export default resolvers;
