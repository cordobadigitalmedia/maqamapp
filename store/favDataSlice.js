import { createSlice } from "@reduxjs/toolkit";
import { identity } from "lodash";
import { getStateFromStorage, saveStateToStorage } from "./localStorage";

const initialState = getStateFromStorage("favouriteState", {
  favourites: {},
});
//save/get from session variables

export const favDataSlice = createSlice({
  name: "favData",
  initialState,
  reducers: {
    updateFavourites: (state, action) => {
      let favourites = {};
      favourites = state.favourites;
      const { id, status } = action.payload;
      favourites[id] = status;
      state.favourites = favourites;
      saveStateToStorage(state, "favouriteState");
    },
  },
});

export const { updateFavourites } = favDataSlice.actions;

export const selectFav = (state) => state.favData.favourites;

export default favDataSlice.reducer;
