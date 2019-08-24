import jwt from 'jsonwebtoken';

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

const createToken = (userData) => {
  const exp = new Date().addDays(5).getTime();
  const payload = {
    _id: userData._id,
    email: userData.email,
    name: userData.name,
    exp,
  }

  const token = jwt.sign(payload, process.env.SERCRET);
  return { token }
}


export const addUserAction = async (userData) => {
  try {
    const newUser = await UserModel.create(userData);
    const token = createToken(newUser);
    return token;
  } catch (error) {
    return error;
  }
};

export const doLoginAction = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email });
    const token = createToken(user);
    return token;
  } catch (error) {
    return error;
  }
}