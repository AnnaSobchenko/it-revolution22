import { createSlice } from "@reduxjs/toolkit";
import {
  logout,
  signin,
  signup,
  getInfo,
  getNewTokens,
} from "./authOperations";
import { getAllUsers } from "./userOperations";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    email: "",
    name: "",
    token: null,
    refreshToken: null,
    _id: null,
    error: null,
  },
  reducers: {
    logoutUser(state) {
      state.user = { email: null };
      state.token = null;
      state.refreshToken = null;
      state._id = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    // getAllUsers
    [getAllUsers.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getAllUsers.fulfilled](state, { payload }) {
      state.user.email = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state._id = payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [getAllUsers.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    // SIGN IN
    [signin.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [signin.fulfilled](state, { payload }) {
      state.user.email = payload.user.email;
      state.user.name = payload.user.name;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state._id = payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [signin.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    // GET INFO
    [getInfo.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getInfo.fulfilled](state, { payload }) {
      state.user.email = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [getInfo.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    // REFRESH
    [getNewTokens.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getNewTokens.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },
    [getNewTokens.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.isLoggedIn = false;
    },

    // LOGOUT
    [logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.user = { email: null };
      state.token = null;
      state.refreshToken = null;
      state._id = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = payload;
    },
  },
});
export const { logoutUser } = usersSlice.actions;
export default usersSlice.reducer;
