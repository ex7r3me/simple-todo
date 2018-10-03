import initialState from './initialState';
import {ADD_ACTIVITY, DELETE_ACTIVITY} from '../actions/actionTypes';

export default function stuff(state = initialState.activities, action) {
  let newState;
  switch (action.type) {
    case ADD_ACTIVITY:
      console.log('FETCH_STUFF Action')
      return action;
    case DELETE_ACTIVITY:
      newState = action.stuff;
      console.log('RECEIVE_STUFF Action')
      return newState;
    default:
      return state;
  }
}
