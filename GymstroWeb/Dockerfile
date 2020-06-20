# FROM node:12.14.1-alpine as build

# WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

# ARG CBL_ENDPOINT
# ENV CBL_ENDPOINT=$CBL_ENDPOINT

# ARG HASURA_ENDPOINT
# ENV HASURA_ENDPOINT=$HASURA_ENDPOINT

# COPY package.json package-lock.json ./

# RUN npm ci

# COPY . .
# RUN npm run build

FROM nginx:1.17-alpine

# COPY --from=build /app/build /usr/share/nginx/html

COPY build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
