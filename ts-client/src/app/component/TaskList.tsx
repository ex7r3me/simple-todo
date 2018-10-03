import * as React from "react";
import SingleTask from "./SingleTask";
import SortButtons from "./SortButtons";
import * as moment from "moment";
import * as _ from "lodash";
interface Task {
  title: string;
  priority: number;
  isDone: boolean;
  dueDate: moment.Moment;
  id: number;
}
type OrderTypes = "title" | "dueDate" | "priority";
type OrderDirectionTypes = "asc" | "desc";
class TaskList extends React.Component<
  { tasks: Array<Task> },
  {
    tasks: Array<Task>;
    orderBy: OrderTypes;
    orderDirection: OrderDirectionTypes;
  }
> {
  constructor() {
    super(null);
    this.state = {
      tasks: [],
      orderDirection: "asc",
      orderBy: "title"
    };
  }

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
  sortTasks = (key: OrderTypes) => {
    this.setState({ orderBy: key, orderDirection: "asc" });
  };

  render() {
    let sortedTaskList = _.orderBy(
      this.props.tasks,
      [this.state.orderBy],
      this.state.orderDirection
    );
    let taskList = sortedTaskList.map(task => {
      return (
        <SingleTask
          task={task}
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
