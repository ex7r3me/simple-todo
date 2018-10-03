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
class App extends Component {
  render() {
    let input;
    return (
      <div className="App">
        <div>
          <h1>Todo List</h1>
          <AddTask />
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
