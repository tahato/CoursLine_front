import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/Authslice";
import courseReducer from "./Slices/CourseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
});

export default store;
