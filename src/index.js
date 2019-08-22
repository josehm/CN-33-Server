require("dotenv").config();

import { ApolloServer } from 'apollo-server';
import mongoose from "mongoose";

import { PostModel } from './database/models';

mongoose.connect(
  process.env.DATABASE,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
  }
);

const mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'Error de conexion !!'));
mongoDB.on('open', () => console.log('BD conectada !!'));

const post = {
  title: "hola a todos",
  content: "es es un nuevo contenido",
};

const createPost = async () => {
  try {
    const newPost = await PostModel.create(post);
    console.log("TCL: createPost -> newPost", newPost)
  } catch (error) {
    console.log("TCL: createPost -> error", error)
  }
}

createPost();
