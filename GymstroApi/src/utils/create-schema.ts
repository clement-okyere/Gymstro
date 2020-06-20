import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { LoginResolver } from '../modules/auth/Login';

export const createSchema = (): Promise<GraphQLSchema> =>
    buildSchema({
        resolvers: [LoginResolver],
    });
