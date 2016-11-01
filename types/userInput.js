import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
      name: { type: GraphQLString }
  }
});
