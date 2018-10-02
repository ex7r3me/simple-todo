import React from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./SingleTask.css";
import classnames from "classnames";
class SingleTask extends React.Component {
  state = {
    date: null,
    focused: false
  };
  priorityNames = priorityNumber => {
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
    return (
      <div className="task-container">
        <button onClick={this.props.onDone}>#</button>
        <div className={classnames({ done: this.props.isDone })}>
          {this.props.title}
        </div>
        <SingleDatePicker
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) =>
            this.setState({
              focused
            })
          }
          id={`task-date-${this.props.id}`}
        />
        <div className="priority">
          {this.priorityNames(this.props.priority)}
        </div>
        <button onClick={this.props.onIncreasePriority}>+</button>
        <button onClick={this.props.onDecreasePriority}>-</button>
        <button onClick={this.props.onDelete}>x</button>
      </div>
    );
  }
}
export default SingleTask;
