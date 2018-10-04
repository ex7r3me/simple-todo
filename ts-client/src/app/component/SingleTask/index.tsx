import * as React from "react";
import "react-dates/initialize";
import Typography from "@material-ui/core/Typography";
import IncreasePriority from "./IncreasePriority";
import DecreasePriority from "./DecreasePriority";
import DeleteTaskButton from "./DeleteTaskButton";
import DoneTaskButton from "./DoneTaskButton";
import DueDate from "./DueDate";
import "./SingleTask.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Task } from "../../common/types";
type Priority = "None" | "Low" | "Medium" | "High";

class SingleTask extends React.Component<{ task: Task }> {
  priorityNames = (priorityNumber: number): Priority => {
    switch (priorityNumber) {
      case 0:
        return "High";
        break;
      case 1:
        return "Medium";
        break;
      case 2:
        return "Low";
        break;
      default:
        return "None";
    }
  };
  render() {
    const task: Task = this.props.task,
      { title, isDone, id, priority, dueDate }: Task = this.props.task;
    return (
      <Paper className="single-task-paper">
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="row"
          spacing={24}
        >
          <Grid item md={2}>
            <DoneTaskButton task={task} />
          </Grid>
          <Grid item md={3}>
            <Typography
              variant="subheading"
              gutterBottom
              className={isDone ? "done" : ""}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item md={3}>
            <DueDate task={task} />
          </Grid>
          <Grid item md={2}>
            <div className="priority-container">
              <IncreasePriority task={task} />
              <Typography variant="subheading" gutterBottom>
                {this.priorityNames(priority)}
              </Typography>
              <DecreasePriority task={task} />
            </div>
          </Grid>
          <Grid item md={2}>
            <DeleteTaskButton task={task} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default SingleTask;
