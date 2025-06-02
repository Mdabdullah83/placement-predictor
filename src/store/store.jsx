import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchSlice";
import AuthReducer from "./reducers/authSlice";
const store = configureStore({
  reducer: {
    search: searchReducer,
    auth: AuthReducer,
  },
});

export default store;
