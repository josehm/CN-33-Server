const mongoose = require('mongoose');

const userSchena = require('../schemas/userSchema');


const UserModel = mongoose.model('users', userSchena);

module.exports = {
  UserModel,
};
