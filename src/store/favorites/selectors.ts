import { RootState } from "store/types";

export const selectFavoritedProducts = (state: RootState) => state.favorites;
