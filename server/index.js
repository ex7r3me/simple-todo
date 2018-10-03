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
  type Mutation {
    createTask(
      id: Int
      title: String!
      priority: Int
      dueDate: String
      isDone: Boolean
    ): Task!
    updateTask(
      id: Int
      title: String!
      priority: Int
      dueDate: String
      isDone: Boolean
    ): Task!
    deleteTask(
      id: Int
    ): Int!
  }
  
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    tasks: () => tasks
  },
  Mutation: {
    createTask: (root, { title, priority, isDone, dueDate }) => {
      const task = {
        priority,
        isDone,
        dueDate,
        title,
        id: tasks.length
      };
      tasks.push(task);
      return task;
    },
    updateTask: (root, { id, title, priority, isDone, dueDate }) => {
      const updatedTask = {
        priority,
        isDone,
        dueDate,
        title,
        id
      };
      tasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
      return updatedTask;
    },
    deleteTask: (root, { id }) => {
      tasks = tasks.filter(task => task.id !== id);
      return id;
    },
  }
};
let tasks = [
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
  },
  {
    id: 3,
    title: "Let's get started",
    priorty: 3,
    isDone: false,
    dueDate: null
  }
];
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 8080 }, () =>
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
);
