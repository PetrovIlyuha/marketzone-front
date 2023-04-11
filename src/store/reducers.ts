import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./app/appReducer";
import userData from "./user/reducer";

export const reducers = combineReducers({ app: appReducer, userData });
