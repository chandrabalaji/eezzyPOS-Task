import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  Token: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddUserinfo: (state, action) => {
      state.email = action.payload.email;
      state.Token = action.payload.Token;
    },
  },
});

export const { AddUserinfo } = userSlice.actions;
export const userMail = (state) => state.user.email;
export const userToken = (state) => state.user.Token;

export default userSlice.reducer;
