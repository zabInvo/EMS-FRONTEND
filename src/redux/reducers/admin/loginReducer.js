import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  login: false,
};

const userReducer = createSlice({
  name: "User",
  initialState,
  reducers: {
    LOGIN_ADMIN(state, action) {
      state.token = action.payload.token;
      state.login = true;
    },
  },
});

export const { LOGIN_ADMIN } = userReducer.actions;
export default userReducer.reducer;
