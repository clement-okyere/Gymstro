import convict from 'convict';
import fs from 'fs';

const config = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    cookieDomain: {
        doc: 'Domain for which cookie is sent to',
        format: String,
        default: 'localhost',
        env: 'COOKIE_DOMAIN',
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 8003,
        env: 'PORT',
        arg: 'port',
    },
    logs: {
        level: {
            doc: 'Log level',
            format: String,
            default: 'silly',
            env: 'LOG_LEVEL',
        },
    },
    reactClientUrl: {
        doc: 'react client url',
        format: String,
        default: 'http://localhost:3000',
        env: 'REACT_CLIENT_URL',
    },
    graphqlApiUrl: {
        doc: 'graphql api url',
        format: String,
        default: 'http://host.docker.internal:8081/v1',
        env: 'HASURA_GRAPHQL_ENGINE_URL',
    },
});

const env = config.get('env');
const configPath = `./config/${env}.json`;

if (fs.existsSync(configPath)) {
    config.loadFile(configPath);
}

export default config;
