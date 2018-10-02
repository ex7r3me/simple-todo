import React, { Component } from "react";
import TaskList from "./component/TaskList";
import moment from "moment";
import AddTask from "./component/AddTask";
import "./App.css";
import gql from "graphql-tag";
import { Query } from "react-apollo";
const GET_TASKS = gql`
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

class App extends Component {
  render() {
    let taskList = (
      <Query query={GET_TASKS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <div>
              <TaskList tasks={data.tasks} />
            </div>
          );
        }}
      </Query>
    );

    return (
      <div className="App">
        <div>
          <h1>Todo List</h1>
          <AddTask />
          <div>{taskList}</div>
        </div>
      </div>
    );
  }
}

export default App;
