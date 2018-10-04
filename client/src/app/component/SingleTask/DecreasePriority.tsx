import * as React from "react";
import { Mutation } from "react-apollo";
import { ExpandMore } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Task } from "../../common/types";
import { UPDATE_TODO } from "../../graphQueries";
import { updateCacheDelete } from "../../utils/updateCache";
interface ComponentProps {
  task: Task;
}
const DecreasePriority: React.StatelessComponent<ComponentProps> = props => {
  const task = props.task;
  return (
    <div>
      <Mutation mutation={UPDATE_TODO} update={updateCacheDelete}>
        {(updateTodo: (variables: object) => {}) => (
          <IconButton
            onClick={() => {
              const newPriority = task.priority > 1 ? 2 : task.priority + 1;
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
  );
};
export default DecreasePriority;
