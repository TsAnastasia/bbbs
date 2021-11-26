import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from "./auth/auth-reducer";
import headerReducer from "./header/header-reducer";

const reducers = combineReducers({
  auth: authReducer,
  header: headerReducer,
});

type RootReducerType = typeof reducers;
export type StateType = ReturnType<RootReducerType>;

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
