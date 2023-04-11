import {
  AnyAction,
  PayloadAction,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import { IFavorites } from "./types";

const addToFavoritesAction = createAction<number>("Favorites/Add");
const removeFromFavoritesAction = createAction<number>("Favorites/Remove");

const initialState: IFavorites = [];

const favoritesReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    addToFavoritesAction,
    (state: any, action: PayloadAction<number>) => [...state, action.payload]
  );
  builder.addCase(
    removeFromFavoritesAction,
    (state: any, action: PayloadAction<number>) =>
      state.filter((favId: number) => favId !== action.payload)
  );
});

export const addToFavorites = (favId: number): AnyAction =>
  addToFavoritesAction(favId);
export const removeFromFavorites = (favId: number): AnyAction =>
  removeFromFavoritesAction(favId);

export default favoritesReducer;
