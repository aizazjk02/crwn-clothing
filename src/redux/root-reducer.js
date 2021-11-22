
// In-Order to combine the reducers we need this
import { combineReducers } from "redux";

// Importing the userReducer 
import userReducer from "./user/user.reducer";

// intialising the user Reducer with the key, so that we can export and use it 
export default combineReducers({
  user: userReducer,
});
