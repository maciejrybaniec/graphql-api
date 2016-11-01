import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType
} from 'graphql';


import UserModel from './models/User';
import UserType from './types/user';

export default {
    user: {
        type: UserType,
        args: {
            id: {
                type: GraphQLString
            }
        },
        resolve(root, params, options) {
            console.log(UserModel.findById(params.id).exec(), 'lalalala');
            return UserModel.findById(params.id).exec();
        }
    }
}
