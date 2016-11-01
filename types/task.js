import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    text: { type: GraphQLString }
  }
});
