import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  user: null,
  isAuthenticated: false,
  role:"",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    register(state, action) {
      state.users = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    setRole(state,action){
      state.role=action.payload
    },
  },
});

export const { login, logout,setRole } = authSlice.actions;

export default authSlice.reducer;
