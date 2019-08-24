const JWT = require('jsonwebtoken');
const { UserModel } = require('../dataBase/models');

const { SchemaDirectiveVisitor, AuthenticationError } = require('apollo-server-express');

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args) {
      const ctx = args[2];
      if (ctx.user) {
        return await resolve.apply(this, args);
      } else {
        throw new AuthenticationError("You need to be logged in.");
      }
    };
  }
}

const getContext = (req) => {
  try {
    const token = req.headers.authorization;
    if (typeof token === typeof undefined) return req;
    return JWT.verify(token, process.env.SECRET, function (err, result) {
      if (err) return req;
      return UserModel.findOne({ _id: result._id }).then((user) => {
        return { ...req, user };
      });
    });
  } catch (e) {
    return req;
  }
}

export {
  getContext,
  AuthDirective,
}