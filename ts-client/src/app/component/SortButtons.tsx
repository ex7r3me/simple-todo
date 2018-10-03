import * as React from "react";
type OrderTypes = "title" | "dueDate" | "priority";

class SortButtons extends React.Component<{
  sortTasks: (orderBy: OrderTypes)=> void
}> {
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
