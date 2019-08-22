require("dotenv").config();

const { ApolloServer } = require('apollo-server');
const mongoose = require("mongoose");

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
