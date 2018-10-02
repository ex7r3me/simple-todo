import React, { Component } from "react";
import SingleTask from "./component/SingleTask";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      { id: 0, title: "create a Readme", priority: 1 },
      { id: 1, title: "add something else", priority: 0 },
      { id: 2, title: "read the specs", priority: 2 }
    ]
  };
  deleteTask = removeTaskId => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== removeTaskId)
    });
  };
  render() {
    let taskList = this.state.tasks.map(task => {
      return (
        <SingleTask
          key={task.id}
          onDelete={() => {
            this.deleteTask(task.id);
          }}
          onIncreasePriority={() => {}}
          onDecreasePriority={() => {}}
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
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <p>sort by</p>
          <button>Name</button>
          <button>Due Date</button>
          <button>Priority</button>
          <div>{taskList}</div>
        </div>
      </div>
    );
  }
}

export default App;
