import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  role:"",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
   
    logout(state) {
      state.user = null;
      state.isAuth = false;
    },
    setRole(state,action){
      state.role=action.payload
    },
  },
});

export const { login, logout,setRole } = authSlice.actions;

export default authSlice.reducer;
