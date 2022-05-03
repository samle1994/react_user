import { combineReducers, createStore } from "redux";
import infoReducer from "./reducers/info";
const rootReducer = combineReducers({
  infoReducer: infoReducer,
});
const store = createStore(rootReducer);
export default store;
