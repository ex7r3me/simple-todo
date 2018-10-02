const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Task {
    id: Int!
    title: String
    isDone: Boolean
    priority: Int
    dueDate: String
  }
  type Query {
    tasks: [Task]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    tasks: () => tasks
  }
};
const tasks = [
  {
    id: 0,
    title: "create a Readme",
    priority: 1,
    isDone: false,
    dueDate: null
  },
  {
    id: 1,
    title: "add something else",
    priority: 0,
    isDone: false,
    dueDate: null
  },
  {
    id: 2,
    title: "read the specs",
    priority: 2,
    isDone: true,
    dueDate: null
  }
];
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
