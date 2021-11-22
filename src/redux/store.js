import { createStore, applyMiddleware } from "redux";

// We are using this logger middleware to keep track of the changes 
import logger from "redux-logger";

import rootReducer from "./root-reducer";
// An Array to store all of our middlewares 
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;