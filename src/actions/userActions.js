import { UserModel } from '../database/models';

export const addUserAction = async (userData) => {
  try {
    return await UserModel.create(userData);
  } catch (error) {
    return error;
  }
};