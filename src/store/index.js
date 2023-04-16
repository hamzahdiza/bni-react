import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/mainReducer";

const rootReducer = combineReducers({
  user: mainReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
