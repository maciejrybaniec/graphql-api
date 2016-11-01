import gulp from 'gulp';
import { graphql }  from 'graphql';
import {
    introspectionQuery,
    printSchema
} from 'graphql/utilities';

const path = require('path');
const fs = require('fs');

import { Schema } from './graphql/schema';

const schemaDirectories = {
    serverSchema: path.join(__dirname, './schema.json'),
    userSchema: path.join(__dirname, './schema.graphql')
};

/**
 * Update graphql schema.
 * @method updateSchema
 * @async
 */
const updateSchema = async() => {
    const result = await graphql(Schema, introspectionQuery);
    if (result.errors) {
        console.error(JSON.stringify(result.error));
        throw Error('Introspecting schema');
    } else {
        const { serverSchema, userSchema } = schemaDirectories;
        fs.writeFileSync(serverSchema, JSON.stringify(result, null, 2));
        fs.writeFileSync(userSchema, printSchema(Schema));
    }
}

/**
 * Update graphql schema task.
 */
gulp.task('update-schema', () => {
    updateSchema();
});
