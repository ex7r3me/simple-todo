import React, { Component } from "react";
import TaskList from "./component/TaskList";
import moment from "moment";
import AddTask from "./component/AddTask";
import "./App.css";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
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
class App extends Component {
  render() {
    let input;
    return (
      <div className="App">
        <div>
          <h1>Todo List</h1>
          <Mutation
            mutation={ADD_TODO}
            update={(cache, { data: { createTask } }) => {
              const query = GET_TASKS;
              const { tasks } = cache.readQuery({ query });
              console.log(tasks.concat([createTask]));
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
          <Query query={GET_TASKS}>
            {({ loading, error, data, refetch }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;
              return (
                <div>
                  <TaskList tasks={data.tasks} />
                  <button onClick={() => refetch()}>Refetch!</button>
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default App;
