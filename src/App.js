import React, { Component } from "react";
import SingleTask from "./component/SingleTask";
import "./App.css";
import _ from "lodash";

class App extends Component {
  state = {
    newTaskValue: "",
    tasks: [
      { id: 0, title: "create a Readme", priority: 1, isDone: false },
      { id: 1, title: "add something else", priority: 0, isDone: false },
      { id: 2, title: "read the specs", priority: 2, isDone: true }
    ],
    nextTaskId: 3
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
          id: this.state.nextTaskId
        }
      ]),
      newTaskValue: "",
      nextTaskId: this.state.nextTaskId + 1
    });
    event.preventDefault();
  };
  render() {
    let taskList = this.state.tasks.map(task => {
      return (
        <SingleTask
          isDone={task.isDone}
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
      );
    });
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
