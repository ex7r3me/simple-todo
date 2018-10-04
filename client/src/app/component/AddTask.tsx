import * as React from "react";
import { Mutation } from "react-apollo";
import { ADD_TODO } from '../graphQueries'
import { updateCacheCreate } from '../utils/updateCache'
import TextField from '@material-ui/core/TextField';
import * as moment from 'moment'


class AddTask extends React.Component {
  render() {
    let input: HTMLInputElement;

    return (
      <Mutation
        mutation={ADD_TODO}
        update={updateCacheCreate}
      >
        {(createTask) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createTask({
                  variables: {
                    title: input.value,
                    isDone: false,
                    priority: 1,
                    dueDate: moment().add(7, "days"),
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
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
export default AddTask;
