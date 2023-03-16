import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    items: null,
  },
  reducers: {
    login: (state, action) => {
      state.items = action.payload;
    },
    logout: (state, action) => {
      state.items = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
