import mongoose from 'mongoose';

import userSchena from '../schemas/userSchema';
import postSchema from '../schemas/postSchema';
import commentSchema from '../schemas/commentSchema';

const UserModel = mongoose.model('users', userSchena);
const PostModel = mongoose.model('posts', postSchema);
const CommentModel = mongoose.model('comments', commentSchema);

export {
  UserModel,
  PostModel,
  CommentModel,
};
