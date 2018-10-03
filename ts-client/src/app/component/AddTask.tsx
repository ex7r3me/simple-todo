import * as React from "react";
import { Mutation } from "react-apollo";
import { ADD_TODO } from '../graphQueries'
import { updateCacheCreate } from '../utils/updateCache'
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
                    id: 8229
                  }
                });
                input.value = "";
              }}
            >
              <input
                ref={node => {
                  input = node;
                }}
              />
              <button type="submit">Add Todo</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
export default AddTask;
