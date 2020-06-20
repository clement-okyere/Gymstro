import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import { createSchema } from './src/utils/create-schema';
import config from './src/config';

const main = async (): Promise<void> => {
    const schema = await createSchema();

    const apolloServer = new ApolloServer({
        schema,
    });

    const app = express();

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(config.get('port'), () => {
        console.log(`app started on port ${config.get('port')}/graphql`);
    });
};

main().catch((err) => console.log(err));
