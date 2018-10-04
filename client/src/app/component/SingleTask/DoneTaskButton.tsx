import * as React from "react";
import { Mutation } from "react-apollo";
import Checkbox from "@material-ui/core/Checkbox";
import { Task } from "../../common/types";
import { UPDATE_TODO } from "../../graphQueries";
import { updateCacheDelete } from "../../utils/updateCache";
interface ComponentProps {
  task: Task;
}
const DoneTaskButton: React.StatelessComponent<ComponentProps> = props => {
  const task = props.task;
  return (
    <Mutation mutation={UPDATE_TODO} update={updateCacheDelete}>
      {(updateTodo: (variables: object) => {}) => (
        <Checkbox
          checked={task.isDone}
          onChange={() => {
            const newStatus = !task.isDone;
            updateTodo({
              variables: { ...task, isDone: newStatus }
            });
          }}
          value="isDone"
        />
      )}
    </Mutation>
  );
};
export default DoneTaskButton;
