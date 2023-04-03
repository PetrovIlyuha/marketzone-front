import { RootState } from "store/types";

export const isLoggedIn = (state: RootState) => state.app.isLoggedIn;
export const isAppLoading = (state: RootState) => state.app.isAppLoading;
