import { createStore } from "redux";
import reducer from "./reducer";
// import reducer from "./task";
import { configureStore } from "@reduxjs/toolkit";

// export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export function configureStore(){
//     const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//     return store;
// }

export default function () {
  return configureStore({
    reducer,
  });
}
