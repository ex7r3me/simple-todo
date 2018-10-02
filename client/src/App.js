import React, { Component } from "react";
import TaskList from "./component/TaskList";
import moment from "moment";
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
  state = {
    newTaskValue: "",
    nextTaskId: 1
  };
  newTaskChangeValue = event => {
    this.setState({ newTaskValue: event.target.value });
  };
  addTask = event => {
    /*
    this.setState({
      tasks: this.state.tasks.concat([
        {
          title: this.state.newTaskValue,
          isDone: false,
          priority: 1,
          id: this.state.nextTaskId,
          dueDate: moment().add(7, "days")
        }
      ]),
      newTaskValue: "",
      nextTaskId: this.state.nextTaskId + 1
    }); */
    event.preventDefault();
  };
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
          <form onSubmit={this.addTask}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.newTaskValue}
                onChange={this.newTaskChangeValue}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>{taskList}</div>
        </div>
      </div>
    );
  }
}

export default App;
