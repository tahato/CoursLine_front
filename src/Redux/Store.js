import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/Authslice";
import classeReducer from "./Slices/ClasseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    classe: classeReducer,
  },
});

export default store;
