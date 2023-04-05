import { createSlice } from "@reduxjs/toolkit";
import { AppStoreInitState } from "./types";
import { AppReducer, AppThunk, AppDispatch } from "../types";

const initialState = {
  isLoggedIn: true,
  isAppLoading: false,
};

export const isLoggedInReducer: AppReducer<AppStoreInitState, boolean> = (
  state,
  action
) => {
  state.isLoggedIn = action.payload;
};

export const isAppLoadingReducer: AppReducer<AppStoreInitState, boolean> = (
  state,
  action
) => {
  state.isAppLoading = action.payload;
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    isLoggedInReducer,
    isAppLoadingReducer,
  },
});

const {
  isLoggedInReducer: isLoggedInAction,
  isAppLoadingReducer: isAppLoadingAction,
} = appSlice.actions;

export const setIsLoggedIn =
  (isLogged: boolean): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(isLoggedInAction(isLogged));
  };

export const setAppLoading =
  (isAppLoading: boolean): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(isAppLoadingAction(isAppLoading));
  };

export default appSlice.reducer;
