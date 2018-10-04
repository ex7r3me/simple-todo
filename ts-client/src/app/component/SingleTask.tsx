import * as React from "react";
import * as moment from "moment";
import "react-dates/initialize";
import IconButton from "@material-ui/core/IconButton";
import { Close, ExpandMore, ExpandLess } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { Mutation } from "react-apollo";
import { DELETE_TODO, UPDATE_TODO } from "../graphQueries";
import Checkbox from "@material-ui/core/Checkbox";
import { updateCacheDelete } from "../utils/updateCache";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./SingleTask.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

interface Task {
  title: string;
  priority: number;
  isDone: boolean;
  dueDate: moment.Moment;
  id: number;
}
type Priority = "None" | "Low" | "Medium" | "High";

class SingleTask extends React.Component<
  {
    task: Task;
  },
  { focused: boolean; date: moment.Moment }
> {
  constructor() {
    super(null);
    this.state = {
      date: null,
      focused: false
    };
  }
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
    let momentDueDate = dueDate ? moment(dueDate) : null;
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
            <Mutation mutation={UPDATE_TODO} update={updateCacheDelete}>
              {(updateTodo: (variables: object) => {}) => (
                <Checkbox
                  checked={isDone}
                  onChange={() => {
                    const newStatus = !isDone;
                    updateTodo({
                      variables: { ...task, isDone: newStatus }
                    });
                  }}
                  value="isDone"
                />
              )}
            </Mutation>
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
            <Mutation mutation={UPDATE_TODO} update={updateCacheDelete}>
              {(updateTodo: (variables: object) => {}) => (
                <SingleDatePicker
                  date={momentDueDate}
                  onDateChange={date =>
                    updateTodo({
                      variables: { ...task, dueDate: date }
                    })
                  }
                  focused={this.state.focused}
                  onFocusChange={({ focused }) =>
                    this.setState({
                      focused
                    })
                  }
                  id={`task-date-${id}`}
                />
              )}
            </Mutation>
          </Grid>
          <Grid item md={2}>
            <div className="priority-container">
              <div>
                <Mutation mutation={UPDATE_TODO} update={updateCacheDelete}>
                  {(updateTodo: (variables: object) => {}) => (
                    <IconButton
                      aria-label="Increase Priority"
                      onClick={() => {
                        const newPriority = priority < 1 ? 0 : priority - 1;
                        updateTodo({
                          variables: { ...task, priority: newPriority }
                        });
                      }}
                    >
                      <ExpandLess />
                    </IconButton>
                  )}
                </Mutation>
              </div>
              <Typography variant="subheading" gutterBottom>
                {this.priorityNames(priority)}
              </Typography>
              <div>
                <Mutation mutation={UPDATE_TODO} update={updateCacheDelete}>
                  {(updateTodo: (variables: object) => {}) => (
                    <IconButton
                      onClick={() => {
                        const newPriority = priority > 1 ? 2 : priority + 1;
                        updateTodo({
                          variables: { ...task, priority: newPriority }
                        });
                      }}
                    >
                      <ExpandMore />
                    </IconButton>
                  )}
                </Mutation>
              </div>
            </div>
          </Grid>
          <Grid item md={2}>
            <Mutation mutation={DELETE_TODO} update={updateCacheDelete}>
              {(deleteTodo: (variables: object) => {}) => (
                <IconButton
                  onClick={() => {
                    deleteTodo({ variables: { id } });
                  }}
                >
                  <Close />
                </IconButton>
              )}
            </Mutation>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default SingleTask;
