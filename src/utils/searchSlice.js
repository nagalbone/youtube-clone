import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addSearchdata: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { addSearchdata } = searchSlice.actions;
export default searchSlice.reducer;
