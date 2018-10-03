import * as React from "react";
import * as moment from "moment";
import "react-dates/initialize";
import { Mutation } from "react-apollo";
import { DELETE_TODO, UPDATE_TODO } from "../graphQueries";
import { updateCacheDelete } from "../utils/updateCache";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./SingleTask.css";
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
    const { title, isDone, id, priority }: Task = this.props.task;
    return (
      <div className="task-container">
        <Mutation mutation={UPDATE_TODO} update={updateCacheDelete}>
          {(updateTodo: (variables: object) => {}, {}) => (
            <button
              onClick={() => {
                const newStatus = !isDone;
                updateTodo({
                  variables: { title, isDone: newStatus, id, priority }
                });
              }}
            >
              #
            </button>
          )}
        </Mutation>
        <div className={isDone ? "done" : ""}>{title}</div>
        <SingleDatePicker
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) =>
            this.setState({
              focused
            })
          }
          id={`task-date-${id}`}
        />
        <div className="priority">{this.priorityNames(priority)}</div>
        <Mutation mutation={UPDATE_TODO} update={updateCacheDelete}>
          {(updateTodo: (variables: object) => {}, {}) => (
            <button
              onClick={() => {
                const newPriority = priority - 1;
                updateTodo({
                  variables: { title, isDone, id, priority: newPriority }
                });
              }}
            >
              +
            </button>
          )}
        </Mutation>
        <Mutation mutation={UPDATE_TODO} update={updateCacheDelete}>
          {(updateTodo: (variables: object) => {}, {}) => (
            <button
              onClick={() => {
                const newPriority = priority + 1;
                updateTodo({
                  variables: { title, isDone, id, priority: newPriority }
                });
              }}
            >
              -
            </button>
          )}
        </Mutation>
        <Mutation mutation={DELETE_TODO} update={updateCacheDelete}>
          {(deleteTodo: (variables: object) => {}, { data }) => (
            <button
              onClick={() => {
                deleteTodo({ variables: { id } });
              }}
            >
              x
            </button>
          )}
        </Mutation>
      </div>
    );
  }
}
export default SingleTask;
