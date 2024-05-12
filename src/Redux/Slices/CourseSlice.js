import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  courseComponent:"myCourses"
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    getAllCourses(state, action) {
      state.courses = action.payload;
    },
    setComponent(state, action) {
      state.courseComponent = action.payload;
    },
  },
  
});

export const { getAllCourses,setComponent } = courseSlice.actions;

export default courseSlice.reducer;
