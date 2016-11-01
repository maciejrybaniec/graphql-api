import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString
} from 'graphql';

import TaskType from './task';
import TaskModel from '../models/Task';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    tasks: {
        type: new GraphQLList(TaskType),
        resolve(root, params, options) {
            return TaskModel.find({ userId: root.id }).exec();
        }
    }
  }
});
