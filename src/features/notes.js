import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: undefined,
};

export const notes = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotesFromApi: (state, action) => {
      state.list = action.payload;
    },
  },
});

export function getNotesFromAPI(action) {
  return function (dispatch, getState) {
    fetch("/data/notes.json")
      .then((response) => response.json())
      .then((data) => dispatch(addNotesFromApi(data.notes)));
  };
}

export const { addNotesFromApi } = notes.actions;
export default notes.reducer;