import React from "react";
import { Mutation } from "react-apollo";
import moment from "moment";
import gql from "graphql-tag";
const ADD_TODO = gql`
  mutation CreateTask(
    $title: String!
    $isDone: Boolean
    $dueDate: String
    $priority: Int
  ) {
    createTask(
      title: $title
      isDone: $isDone
      dueDate: $dueDate
      priority: $priority
    ) {
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
      <Mutation mutation={ADD_TODO}>
        {(addTodo, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                addTodo({
                  variables: {
                    title: input.value,
                    isDone: false,
                    priority: 1,
                    dueDate: moment().add(7, "days")
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
