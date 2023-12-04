import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "search",
  initialState: {
    getVideos: [],
  },
  reducers: {
    addVideos: (state, action) => {
      state.getVideos = action.payload;
    },
  },
});

export const { addVideos } = videosSlice.actions;
export default videosSlice.reducer;
