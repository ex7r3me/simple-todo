import { combineReducers } from "redux";
import activities from "./activityReducer";

const rootReducer = combineReducers({
  activities
});

export default rootReducer;
