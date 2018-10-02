import React from 'react'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import './SingleTask.css'
class SingleTask extends React.Component {
    state = {
        date: null,
        focused: false
    }
  render () {
    return (
      <div class="task-container">
        <div> {this.props.title}</div>
        <SingleDatePicker
          date={this.state.date}
          onDateChange={date => this.setState({ date })} //
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id={this.props.id}
        />
      </div>
    )
  }
}
export default SingleTask
