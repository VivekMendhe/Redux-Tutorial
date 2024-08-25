// []
/*
import {TASK_ADDED, TASK_REMOVED} from './actionType';
export default function reducer(state = [], action) {
  if (action.type === TASK_ADDED) {
    return [
      ...state,
      {
        id: action.payload.id,
        description: action.payload.description,
        status: action.payload.status,
      },
    ];
  } else if (action.type === TASK_REMOVED) {
    return state.filter((item) => item.id !== action.payload.id);
  } else {
    return state;
  }
}
*/

import { combineReducers } from "redux";
import taskReducer from "./task";
import cartReducer from "./cart";

export default combineReducers({
  task:taskReducer,
  cart:cartReducer,
});
