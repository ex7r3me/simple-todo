import * as React from "react";
type OrderTypes = "LcTitle" | "dueDate" | "priority";
import Button from "@material-ui/core/Button";

class SortButtons extends React.Component<{
  sortTasks: (orderBy: OrderTypes) => void;
}> {
  render() {
    return (
      <div>
        <p>sort by</p>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            this.props.sortTasks("LcTitle");
          }}
        >
          Name
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            this.props.sortTasks("dueDate");
          }}
        >
          Due Date
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            this.props.sortTasks("priority");
          }}
        >
          Priority
        </Button>
      </div>
    );
  }
}
export default SortButtons;
