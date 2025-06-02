import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.role = action.payload?.role;
      state.isLoggedIn = true;
    },
  },
});

export const { setUser } = AuthSlice.actions;
export default AuthSlice.reducer;
