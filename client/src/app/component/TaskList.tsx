import * as React from "react";
import SingleTask from "./SingleTask/";
import SortButtons from "./SortButtons";
import * as _ from "lodash";
import "./TaskList.css";
import Grid from "@material-ui/core/Grid";
import { Task } from '../common/types';

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
