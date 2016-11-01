import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import Queries from '../queries';
import Mutations from '../mutations';

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: Queries
});

const mutationsType = new GraphQLObjectType({
    name: 'Mutation',
    fields: Mutations
});

export const Schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationsType
});
