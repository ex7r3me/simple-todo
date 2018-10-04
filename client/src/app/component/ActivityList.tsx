import { connect } from "react-redux";
import * as React from "react";

class ActivityList extends React.Component<{ activities:any }> {
  renderData() {
    return this.props.activities.map((activity: any) => <p>{activity.text}</p>);
  }

  render() {
    return (
      <div className="">
        {this.props.activities.length > 0 ? (
          this.renderData()
        ) : (
          <div className="">No Log</div>
        )}
      </div>
    );
  }
}

export default ActivityList