import logger from "redux-logger";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from "./reducers/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";

export default createStore(
  combineReducers({reducer}),
  {},
  applyMiddleware(logger,thunk,promise())
);


