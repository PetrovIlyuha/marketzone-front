import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./app/appReducer";

export const reducers = combineReducers({ app: appReducer });
