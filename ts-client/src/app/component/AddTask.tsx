import * as React from "react";
import { Mutation } from "react-apollo";
import { ADD_TODO } from '../graphQueries'
import { updateCacheCreate } from '../utils/updateCache'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class AddTask extends React.Component {
  render() {
    let input: HTMLInputElement;

    return (
      <Mutation
        mutation={ADD_TODO}
        update={updateCacheCreate}
      >
        {(createTask, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createTask({
                  variables: {
                    title: input.value,
                    isDone: false,
                    priority: 1,
                    dueDate: null, //moment().add(7, "days")
                    id: null
                  }
                });
                input.value = "";
              }}
            >
              <TextField
                inputRef={node => {
                  input = node;
                }}
              />
              <Button  variant="contained" color="primary" type="submit">Add Todo</Button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
export default AddTask;
