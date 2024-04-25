import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../pages/dashboard/usersSlice.js";
import toursReducer from "../pages/tours/toursSlice.js";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    tours: toursReducer,
  },
});
