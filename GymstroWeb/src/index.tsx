import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: `${process.env.HASURA_GRAPHQL_ENDPOINT}`,
  headers: {
    "X-Hasura-Admin-Secret": `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
