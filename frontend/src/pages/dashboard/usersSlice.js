import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, { payload: user }) => {
      state.user = user;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logoutUser } = usersSlice.actions;

const usersState = (state) => state.users;
export const selectCurrentUser = (state) => usersState(state).user;
export const selectIsLoggedIn = (state) => usersState(state).isLoggedIn;

export default usersSlice.reducer;
