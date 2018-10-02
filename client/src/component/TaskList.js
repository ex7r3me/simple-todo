import React from "react";
import SingleTask from "./SingleTask";
import SortButtons from "./SortButtons";
import _ from "lodash";

class TaskList extends React.Component {
  state = {
    tasks: this.props.tasks
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
          task.id === taskId ? { ...task, priority: --task.priority } : task
      )
    });
  };
  decreasePriority = taskId => {
    this.setState({
      tasks: this.state.tasks.map(
        task =>
          task.id === taskId ? { ...task, priority: ++task.priority } : task
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

  render() {
    let taskList = this.state.tasks.map(task => {
      return (
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
      );
    });
    return (
      <div>
        <SortButtons sortTasks={this.sortTasks} />
        {taskList}
      </div>
    );
  }
}
export default TaskList;
