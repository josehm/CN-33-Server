
import { CommentModel } from '../database/models';
import { updatePost } from './postActions';


export const addCommentToPostActions = async (commentData) => {
  try {
    const commentCreated = await CommentModel.create(commentData);
    const filter = { _id: commentData.postID };
    const update = { $push: { 'comments': commentCreated._id } }
    await updatePost(filter, update);
    return commentCreated;
  } catch (error) {
    return error;
  }
};
