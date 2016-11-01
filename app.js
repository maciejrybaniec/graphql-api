import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';

import { Schema } from './graphql/schema';

import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';

const server = express();

mongoose.connect(config.mongodb);
const connection = mongoose.connection;

connection.on('error', () => console.log('MongoDB connection error'));
connection.once('open', () => console.log('MongoDB connection established'));

server.use(bodyParser.json());

server.use('/graphql', expressGraphQL({
    pretty: true,
    schema: Schema,
    graphiql: true
}));

server.options('*', cors());

server.listen(config.port, () => {
    console.log(`Server listen on port ${config.port}`);
});
