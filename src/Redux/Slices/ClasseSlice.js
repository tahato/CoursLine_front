import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: []
};

const classeSlice = createSlice({
  name: "classe",
  initialState,
  reducers: {
    setClasses(state, action) {
      state.classes = action.payload;
    }
  }
  
});

export const {setClasses} = classeSlice.actions;

export default classeSlice.reducer;
