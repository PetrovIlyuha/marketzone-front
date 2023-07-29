import {
  ThunkAction,
  AnyAction,
  CaseReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import store from "store";

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  AnyAction
>;

export type AppDispatch = typeof store.dispatch;
export type AppReducer<T, Act = any> = CaseReducer<T, PayloadAction<Act>>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
