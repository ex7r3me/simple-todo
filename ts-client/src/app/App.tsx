import * as React from "react";
import TaskList from "./component/TaskList";
import AddTask from "./component/AddTask";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import { Query, Mutation } from "react-apollo";
import { GET_TASKS } from "./graphQueries";
class App extends React.Component {
  render() {
    let input;
    return (
      <div className="App">
        <div>
          <Typography variant="display3" gutterBottom>
            Todo List
          </Typography>
          <AddTask />
          <Query query={GET_TASKS}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;
              return (
                <div>
                  <TaskList tasks={data.tasks} />
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default App;
