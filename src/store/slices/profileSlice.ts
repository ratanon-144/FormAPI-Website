import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import * as serverService from "@/services/serverService";
import { RootState, store } from "../store";
import { NextRouter } from "next/router";
import { UserData } from "@/models/user.model";

interface ProfileState {
  user?: UserData | undefined ;
}
const initialState: ProfileState = {
  user: {
    token: "",
    id: 0,
    username: "",
    level: "",
    email: "",
    fullname: ""
  }
};

export const getProfiles = createAsyncThunk("profile/get", async (credential: ProfileState) => {
  const response = await serverService.getProfiles();
  return response;
});

// export const getProfiles = createAsyncThunk(
//   "profile/get",
//   async (credential: ProfileState) => { 
//     return await serverService.getProducts();
//   }
// );

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfiles.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

// export common user selector
export const profileSelector = (store: RootState): UserData | undefined =>
  store.user.user;
// export reducer
export default profileSlice.reducer;
