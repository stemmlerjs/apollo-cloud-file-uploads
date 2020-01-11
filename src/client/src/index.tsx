import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client'

/**
 * Key notes:
 * - We need to use apollo-upload-client in order to make uploads work
 *   for some reason.
 */

const client = new ApolloClient({
  cache: new InMemoryCache(),
  //@ts-ignore
  link: createUploadLink({
    uri: "http://localhost:4000",
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);




