import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
declare let module: any

const client = new ApolloClient({
  connectToDevTools: true,
  uri: "http://localhost:8080/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);


if (module.hot) {
   module.hot.accept();
}