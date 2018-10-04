import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as React from "react";

class suffList extends React.Component<{ activities:[string] }> {
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

function mapStateToProps(state: any) {
  return {
    activities: state.activities
  };
}

export default connect(mapStateToProps)(suffList);
