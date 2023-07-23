import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    first_name: null,
    last_name: null,
    loading: true,
    error: false,
    isAdmin: false,
    isSuperUser:false,
    email: null,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.first_name = payload?.user?.first_name;
      state.last_name = payload?.user?.last_name;
      state.isAdmin = payload?.user?.is_staff;
      state.isSuperUser = payload?.user?.is_superuser;
      state.email = payload?.user?.email;
      state.token = payload?.key;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.first_name = null;
      state.last_name = null;
      state.token = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.first_name = payload?.first_name;
      state.last_name = payload?.last_name;
      state.isAdmin = payload?.is_staff || payload?.is_superuser;
      state.email = payload?.email;
      state.token = payload?.key;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
