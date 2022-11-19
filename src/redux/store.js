/* import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
}); */

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/** Import reducers */
import rootReducers from "./reducers";

export default createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
