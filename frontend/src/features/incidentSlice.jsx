import { createSlice } from "@reduxjs/toolkit";

const incidentSlice = createSlice({
  name: "incident",

  initialState: {
    record: null,
    mediator: null,
    profile: null,
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
    getProfileSuccess: (state, { payload }) => {
      state.loading = false;
      state.profile = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getRecordAndMediatorSuccess,
  getProfileSuccess,
  fetchFail,
} = incidentSlice.actions;
export default incidentSlice.reducer;
