import * as gql from "graphql-tag";

export const ADD_TODO = gql`
  mutation CreateTask(
    $title: String!
    $isDone: Boolean
    $dueDate: String
    $priority: Int
    $id: Int
  ) {
    createTask(
      title: $title
      isDone: $isDone
      dueDate: $dueDate
      priority: $priority
      id: $id
    ) {
      id
      title
      isDone
      priority
      dueDate
    }
  }
`;
export const GET_TASKS = gql`
  {
    tasks {
      id
      title
      dueDate
      isDone
      priority
    }
  }
`;
export const DELETE_TODO = gql`
  mutation DeleteTask($id: Int!) {
    deleteTask(id: $id)
  }
`;
export const UPDATE_TODO = gql`
  mutation UpdateTask(
    $title: String!
    $isDone: Boolean
    $dueDate: String
    $priority: Int
    $id: Int
  ) {
    updateTask(
      title: $title
      isDone: $isDone
      dueDate: $dueDate
      priority: $priority
      id: $id
    ) {
      id
      title
      isDone
      priority
      dueDate
    }
  }
`;