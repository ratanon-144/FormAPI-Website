import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "@/models/user.model";
import { RootState } from "@/store/store";
import * as serverService from "@/services/serverService";
import httpClient from "@/utils/httpClient";
import { AxiosRequestConfig,InternalAxiosRequestConfig } from "axios";
import Router from "next/router";

interface UserState {
  username: string;
  accessToken: string;
  error?: string;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user?: UserData | undefined;
  users?: UserData[];
}
 


interface SingleProp {
  data: string;
}
 
const initialState: UserState = {
  username: "",
  accessToken: "",
  isAuthenticated: false,
  isAuthenticating: true,
  user: undefined
};

interface SignAction {
  username: string;
  password: string; 
  user: UserData;
}
export const signUp = createAsyncThunk(
  "user/signup",
  async (credential: SignAction) => {
    const response = await serverService.signUp(credential);
    return response;
  }
);

export const signIn = createAsyncThunk(
  "user/signin",
  async (credential: SignAction) => {
    const response = await serverService.signIn(credential);
    if (response.result != "ok") {
      throw new Error("login failed");
    }
    httpClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any>) => {
        if (config && config.headers) {
          config.headers["Authorization"] = `Bearer ${response.token}`;
        }
        return config;
      }
    );
    return response; // Add this line to return the response object
  }
);
    
export const signOut = createAsyncThunk("user/signout", async () => {
  await serverService.signOut();
  Router.push("/login");
});

export const getProfiles = createAsyncThunk("user/profile", async () => {
  await serverService.getProfiles();
  Router.push("/profile");
});
export const getSession = createAsyncThunk("user/fetchSession", async () => {
  const response = await serverService.getSession();

  // set access token
  if (response) {
    httpClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any>) => {
      if (config && config.headers && response.user) {
        config.headers["Authorization"] = `Bearer ${response.user?.token}`;
      }
      return config;
    });
  }
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUsername: (state, action: PayloadAction<SingleProp>) => {
      state.username = action.payload.data;  
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.accessToken = "";
      state.user = undefined;
      state.isAuthenticated = false;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.accessToken = action.payload.token;
      state.isAuthenticated = true;
      state.isAuthenticating = false;
      state.user = action.payload.user;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.accessToken = "";
      state.isAuthenticated = false;
      state.isAuthenticating = false;
      state.user = undefined; 
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      state.accessToken = "";
      state.isAuthenticated = false;
      state.isAuthenticating = false;
      state.user = undefined;
    });
    builder.addCase(getSession.fulfilled, (state, action) => { 
      state.isAuthenticating = false;
      if (action.payload && action.payload.user && action.payload.user.token) {
        state.accessToken = action.payload.user.token;  
        state.user = action.payload.user; 
        state.isAuthenticated = true;
      } 
    });
  },
});

export const { resetUsername } = userSlice.actions;

// export common user s
 
export const userSelectorAres = (store: RootState)=> store.user;
export const userID = (store: RootState) => store.user.user?.id;
export const userLevel = (store: RootState):String  | undefined => store.user.user?.level;
export const userFullname = (store: RootState) => store.user.user?.fullname;
export const userAll = (store: RootState) => [store.user.user?.id,store.user.user?.username,store.user.user?.level,store.user.user?.fullname];
export const isAuthenticatedSelector = (store: RootState): boolean =>store.user.isAuthenticated;
export const isAuthenticatingSelector = (store: RootState): boolean =>store.user.isAuthenticating;
export const instructorIdSelector = (state: RootState) => state.user.user?.id;
// export reducer
export default userSlice.reducer;
