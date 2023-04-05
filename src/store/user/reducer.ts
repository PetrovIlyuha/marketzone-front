import { AppThunk } from "./../types";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { IUserData } from "./types";

const initialState: IUserData = {
  id: null,
  login: null,
  email: null,
  phone: null,
  nameFirst: null,
  nameLast: null,
  namePatronymic: null,
  displayName: null,
  birthDate: null,
  gender: null,
};

const setUserDataAction = createAction<IUserData>("User_Data/set");

const userDataReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserDataAction, (_, action) => action.payload);
});

export const setUserData =
  (userData: IUserData): AppThunk =>
  (dispatch) => {
    dispatch(setUserDataAction(userData));
  };

export default userDataReducer;
