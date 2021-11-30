// In-Order to combine the reducers we need this
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
// Importing the userReducer
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
// intialising the user Reducer with the key, so that we can export and use it

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop:shopReducer,
});
export default persistReducer(persistConfig,rootReducer)
