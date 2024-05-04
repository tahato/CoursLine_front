import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    getAllCourses(state, action) {
      state.courses = action.payload;
    },
  },
});

export const { getAllCourses } = courseSlice.actions;

export default courseSlice.reducer;
