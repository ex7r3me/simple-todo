import * as React from "react";
import * as ReactDOM from "react-dom";
import { store } from "./store/configureStore";
import { Provider } from 'react-redux'
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
declare let module: any;

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
