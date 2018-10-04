import * as React from "react";
import { Mutation } from "react-apollo";
import { ADD_TODO } from "../graphQueries";
import { updateCacheCreate } from "../utils/updateCache";
import TextField from "@material-ui/core/TextField";
import * as moment from "moment";

class AddTask extends React.Component<{ addActivity: (description: string) => {} }> {
  onChange = (e: any) => {
    const newtitle = e.target.value;
    this.setState({ title: newtitle });
  };
  state = {
    title: ""
  };
  render() {
    return (
      <Mutation mutation={ADD_TODO} update={updateCacheCreate}>
        {createTask => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createTask({
                  variables: {
                    title: this.state.title,
                    isDone: false,
                    priority: 1,
                    dueDate: moment().add(7, "days"),
                    id: null
                  }
                });
                this.props.addActivity(`add todo item: ${this.state.title}`);
                this.setState({ title: "" });
              }}
            >
              <TextField value={this.state.title} onChange={this.onChange} />
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
export default AddTask;
