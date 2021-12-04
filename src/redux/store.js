import { createStore, applyMiddleware } from "redux";
import persistStore from "redux-persist/es/persistStore";
// We are using this logger middleware to keep track of the changes 
import logger from "redux-logger";

import rootReducer from "./root-reducer";
// An Array to store all of our middlewares 
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
// export default {persistor, store};