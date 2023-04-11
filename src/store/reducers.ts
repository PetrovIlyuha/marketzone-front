import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./app/appReducer";
import userData from "./user/reducer";
import favorites from "./favorites/reducer";
export const reducers = combineReducers({
  app: appReducer,
  userData,
  favorites,
});
