import { createAsyncThunk } from "@reduxjs/toolkit";
import { delUserByIdApi, getAllUsersApi } from "../../utils/fetchApi";

export const getAllUsers = createAsyncThunk("users/get", async (_, thunkApi) => {
  try {
    const data = await getAllUsersApi();

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const delUserById = createAsyncThunk("users/del", async (id, thunkApi) => {
  try {
    await delUserByIdApi(id);
    return;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// export const signin = createAsyncThunk(
//   "auth/signin",
//   async (userData, thunkApi) => {
//     try {
//       const data = await signinUserApi(userData);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const getInfo = createAsyncThunk(
//   "auth/current",
//   async (userInfo, thunkApi) => {
//     try {
//       const data = await getUserInfo(userInfo);
//       return data.user.email;
//     } catch (error) {
//       return thunkApi.rejectWithValue("No user data :(");
//     }
//   }
// );

// export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
//   const state = thunkApi.getState();
//   const persistedToken = state.auth.accessToken;
//   try {
//     return await logoutUserApi(persistedToken);
//   } catch (error) {
//     return thunkApi.rejectWithValue(error.message);
//   }
// });

// export const getNewTokens = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const persistedToken = state.auth.accessToken;
//     if (!persistedToken) thunkApi.rejectWithValue();

//     try {
//       const data = await refreshUserTokenApi({ persistedToken });
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
