import mongoose from 'mongoose';

import { PostModel } from '../database/models/index';

export const createPost = async (postData) => {
  try {
    return await PostModel.create(postData);
  } catch (error) {
    return null;
  }
}

export const getPost = async () => {
  try {
    return  await PostModel.find().populate('comments');
  } catch (error) {
    return null;
  }
};

export const updatePost = async (filter, update) => {
  try {
    return await PostModel.findOneAndUpdate(filter, update, { new: true });
  } catch (error) {
    return error;
  }
}