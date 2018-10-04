import * as React from "react";
import { connect } from "react-redux";
import { addActivity } from "./actions";
import ActivityList from "./component/ActivityList"
import TaskList from "./component/TaskList";
import AddTask from "./component/AddTask";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import { Query } from "react-apollo";
import { GET_TASKS } from "./graphQueries";
class App extends React.Component<{
  activities: [string];
  addActivity: (description: string) => {};
}> {
  render() {
    let input;
    return (
      <div className="App">
        <div>
          <Typography variant="display3" gutterBottom>
            Todo List
          </Typography>
          <AddTask addActivity={this.props.addActivity} />
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
          <p>Session log: </p>
          <ActivityList activities={this.props.activities} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  activities: state.activities
});
const mapDispatchToProps = (dispatch: any) => ({
  addActivity: (description: "string") => dispatch(addActivity(description))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
