import { createSlice } from "@reduxjs/toolkit";

const incidentSlice = createSlice({
  name: "incident",

  initialState: {
    loading: true,
    error: false,
    record: null,
    mediator: null,
    profile: null,
    isSidebarOpen: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    // getSuccess: (state, { payload: { data, url } }) => {
    //   state.loading = false;
    //   state[url] = data;
    // },
    getRecordAndMediatorSuccess: (state, { payload }) => {
      state.loading = false;
      state.record = payload[0];
      state.mediator = payload[1];
    },
    updateProfileSuccess: (state, { payload }) => {
      state.loading = false;
      state.profile = payload;
    },
    getProfileSuccess: (state, { payload }) => {
      state.loading = false;
      state.profile = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const {
  fetchStart,
  getRecordAndMediatorSuccess,
  getProfileSuccess,
  fetchFail,
  updateProfileSuccess,
  openSidebar,
  closeSidebar,
} = incidentSlice.actions;
export default incidentSlice.reducer;
