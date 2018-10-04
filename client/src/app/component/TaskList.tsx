import * as React from "react";
import SingleTask from "./SingleTask/";
import SortButtons from "./SortButtons";
import * as _ from "lodash";
import "./TaskList.css";
import Grid from "@material-ui/core/Grid";
import { Task } from "../common/types";

type OrderTypes = "LcTitle" | "dueDate" | "priority";
type OrderDirectionTypes = "asc" | "desc";

class TaskList extends React.Component<
  { tasks: Array<Task> },
  {
    tasks: Array<Task>;
    orderBy: OrderTypes;
    toggleOrder: boolean;
    orderDirection: OrderDirectionTypes;
  }
> {
  state: {
    tasks: Array<Task>;
    orderBy: OrderTypes;
    toggleOrder: boolean;
    orderDirection: OrderDirectionTypes;
  } = {
    tasks: [],
    orderDirection: "asc",
    toggleOrder: false,
    orderBy: "LcTitle"
  };
  sortTasks = (key: OrderTypes) => {
    let toggleOrder: boolean = false;
    if (this.state.orderBy === key) {
      toggleOrder = !this.state.toggleOrder;
    }
    let orderDirection: OrderDirectionTypes = toggleOrder ? "desc" : "asc";
    this.setState({
      orderBy: key,
      orderDirection,
      toggleOrder
    });
  };

  render() {
    let shadowTaskList = this.props.tasks.map(task => {
      return { ...task, LcTitle: task.title.toLowerCase() };
    });
    let sortedTaskList = _.orderBy(
      shadowTaskList,
      [this.state.orderBy],
      this.state.orderDirection
    );
    let taskList = sortedTaskList.map(task => {
      return <SingleTask task={task} key={task.id} />;
    });
    return (
      <div>
        <SortButtons sortTasks={this.sortTasks} />
        <div className="root">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={6}>
              {taskList}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default TaskList;
