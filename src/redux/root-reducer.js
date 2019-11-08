import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root", // from what point we need to start storing?
  storage,
  whitelist: ["cart"] // only reducer we need to persist. User is handled by firebase ( add more reducer keys as app grows )
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});
// modified version of root reducer
export default persistReducer(persistConfig, rootReducer);
