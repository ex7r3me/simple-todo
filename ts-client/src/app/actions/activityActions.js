import * as types from './actionTypes';


export function addActivity(json) {
  return {type: types.ADD_ACTIVITY, stuff: json.stuff};
}

export function deleteActivity(json) {
    return {type: types.DELETE_ACTIVITY, stuff: json.stuff};

}