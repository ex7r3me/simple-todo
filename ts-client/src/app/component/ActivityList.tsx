
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as activityActions from '../actions/activityActions';
import React from 'react';


class suffList extends React.Component {  
  renderData() {
    return <div>{JSON.stringify(this.props.activities)}</div>;
  }
  
  
  render() {
    return (
      <div className="">
          {this.props.activities.length > 0 ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activities: state.activities
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(activityActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(suffList);