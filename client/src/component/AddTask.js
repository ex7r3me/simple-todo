import React from "react";
import { Mutation } from "react-apollo";
import moment from "moment";
import gql from "graphql-tag";
const GET_TASKS = gql`
  query {
    tasks {
      id
      title
      dueDate
      isDone
      priority
    }
  }
`;

const ADD_TODO = gql`
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
class AddTask extends React.Component {
  render() {
    let input;

    return (
      <Mutation
        mutation={ADD_TODO}
        update={(cache, { data: { createTask } }) => {
          const query = GET_TASKS;
          const { tasks } = cache.readQuery({ query });
          cache.writeQuery({
            query,
            data: { tasks: tasks.concat([createTask]) }
          });
        }}
      >
        {(createTask, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createTask({
                  variables: {
                    title: input.value,
                    isDone: false,
                    priority: 1,
                    dueDate: null, //moment().add(7, "days")
                    id: 8229
                  }
                });
                input.value = "";
              }}
            >
              <input
                ref={node => {
                  input = node;
                }}
              />
              <button type="submit">Add Todo</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
export default AddTask;
