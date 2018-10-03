import * as React from "react";
import * as moment from "moment";
import "react-dates/initialize";
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
    onIncreasePriority: () => void;
    onDecreasePriority: () => void;
    onDelete: () => void;
    onDone: () => void;
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
        <button onClick={this.props.onDone}>#</button>
        <div className={ isDone ? 'done' : '' }>{title}</div>
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
        <button onClick={this.props.onIncreasePriority}>+</button>
        <button onClick={this.props.onDecreasePriority}>-</button>
        <button onClick={this.props.onDelete}>x</button>
      </div>
    );
  }
}
export default SingleTask;
