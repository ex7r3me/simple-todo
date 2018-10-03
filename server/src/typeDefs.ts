import { gql } from "apollo-server-express";
export const typeDefs = gql`
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
