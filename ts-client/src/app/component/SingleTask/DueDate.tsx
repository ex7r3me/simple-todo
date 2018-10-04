import * as React from "react";
import { Mutation } from "react-apollo";
import { SingleDatePicker } from "react-dates";
import { Task } from "../../common/types";
import { UPDATE_TODO } from "../../graphQueries";
import { updateCacheDelete } from "../../utils/updateCache";
import "react-dates/lib/css/_datepicker.css";
import * as moment from "moment";
interface ComponentProps {
  task: Task;
}
class DueDate extends React.Component<
  { task: Task },
  { focused: boolean; date: moment.Moment }
> {
  constructor() {
    super(null);
    this.state = {
      date: null,
      focused: false
    };
  }
  render() {
    const task = this.props.task;
    let momentDueDate = task.dueDate ? moment(task.dueDate) : null;

    return (
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
            id={`task-date-${task.id}`}
          />
        )}
      </Mutation>
    );
  }
}
export default DueDate;
