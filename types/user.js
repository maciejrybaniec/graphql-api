import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  }
});
