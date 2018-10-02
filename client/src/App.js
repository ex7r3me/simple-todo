import React, { Component } from "react";
import SingleTask from "./component/SingleTask";
import moment from "moment";
import "./App.css";
import _ from "lodash";
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
  deleteTask = removeTaskId => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== removeTaskId)
    });
  };
  increasePriority = taskId => {
    this.setState({
      tasks: this.state.tasks.map(
        task =>
          task.id === taskId ? { ...task, priority: ++task.priority } : task
      )
    });
  };
  decreasePriority = taskId => {
    this.setState({
      tasks: this.state.tasks.map(
        task =>
          task.id === taskId ? { ...task, priority: --task.priority } : task
      )
    });
  };
  toggleTaskStatus = taskId => {
    this.setState({
      tasks: this.state.tasks.map(
        task => (task.id === taskId ? { ...task, isDone: !task.isDone } : task)
      )
    });
  };
  sortTasks = (key, direction) => {
    this.setState({ tasks: _.orderBy(this.state.tasks, [key], "asc") });
  };
  newTaskChangeValue = event => {
    this.setState({ newTaskValue: event.target.value });
  };

  addTask = event => {
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
    });
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
              {data.tasks.map(task => (
                <SingleTask
                  isDone={task.isDone}
                  dueDate={task.dueDate}
                  key={task.id}
                  onDone={() => {
                    this.toggleTaskStatus(task.id);
                  }}
                  onDelete={() => {
                    this.deleteTask(task.id);
                  }}
                  onIncreasePriority={() => {
                    this.increasePriority(task.id);
                  }}
                  onDecreasePriority={() => {
                    this.decreasePriority(task.id);
                  }}
                  priority={task.priority}
                  id={task.id}
                  title={task.title}
                />
              ))}
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
          <p>sort by</p>
          <button
            onClick={() => {
              this.sortTasks("title");
            }}
          >
            Name
          </button>
          <button
            onClick={() => {
              this.sortTasks("dueDate");
            }}
          >
            Due Date
          </button>
          <button
            onClick={() => {
              this.sortTasks("priority");
            }}
          >
            Priority
          </button>
          <div>{taskList}</div>
        </div>
      </div>
    );
  }
}

export default App;
