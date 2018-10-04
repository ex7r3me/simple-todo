import * as React from "react";
import { Mutation } from "react-apollo";
import { Close } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Task } from "../../common/types";
import { DELETE_TODO } from "../../graphQueries";
import { updateCacheDelete } from "../../utils/updateCache";
interface ComponentProps {
  task: Task;
}
const DeleteTaskButton: React.StatelessComponent<ComponentProps> = props => {
  const task = props.task;
  return (
    <Mutation mutation={DELETE_TODO} update={updateCacheDelete}>
      {(deleteTodo: (variables: object) => {}) => (
        <IconButton
          onClick={() => {
            deleteTodo({ variables: { id: task.id } });
          }}
        >
          <Close />
        </IconButton>
      )}
    </Mutation>
  );
};
export default DeleteTaskButton;
