const JWT = require('jsonwebtoken');
import {
  findUserAction
} from '../actions/userActions';

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
    return JWT.verify(token, process.env.SECRET, async function (err, result) {
      if (err) return req;
      try {
        const user = await findUserAction({ _id: result._id });
        return { ...req, user };
      } catch (error) {
        return req;
      }
    });
  } catch (e) {
    return req;
  }
}

export {
  getContext,
  AuthDirective,
}