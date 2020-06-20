FROM hasura/graphql-engine:latest.cli-migrations

ENV HASURA_GRAPHQL_MIGRATIONS_DIR /migrations
ENV HASURA_GRAPHQL_ENABLE_CONSOLE true
ENV HASURA_GRAPHQL_UNAUTHORIZED_ROLE anonymous
ENV HASURA_GRAPHQL_ENABLE_TELEMETRY false
ENV HASURA_GRAPHQL_ENABLED_LOG_TYPES startup, http-log, webhook-log, websocket-log, query-log

COPY migrations /migrations