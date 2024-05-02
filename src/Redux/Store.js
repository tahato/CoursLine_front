import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/Authslice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
