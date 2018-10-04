"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
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
    deleteTask(id: Int): Int!
  }
`;
//# sourceMappingURL=typeDefs.js.map