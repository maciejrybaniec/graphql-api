import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import UserModel from './models/User';
import UserInputType from './types/userInput';
import UserType from './types/user';

export default {
    addUser: {
        type: GraphQLBoolean,
        args: {
          data: {
            name: 'data',
            type: new GraphQLNonNull(UserInputType)
          }
        },
        resolve(root, params, options) {
          const userModel = new UserModel(params.data);
           userModel.save((error) => {
              if (error) {
                  throw new Error('Error adding user');
              }
           });

          return true;
        }
    }
}
