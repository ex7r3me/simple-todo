import * as React from "react";

class SortButtons extends React.Component {
  render() {
    return (
      <div>
        <p>sort by</p>
        <button
          onClick={() => {
            this.props.sortTasks("title");
          }}
        >
          Name
        </button>
        <button
          onClick={() => {
            this.props.sortTasks("dueDate");
          }}
        >
          Due Date
        </button>
        <button
          onClick={() => {
            this.props.sortTasks("priority");
          }}
        >
          Priority
        </button>
      </div>
    );
  }
}
export default SortButtons;
