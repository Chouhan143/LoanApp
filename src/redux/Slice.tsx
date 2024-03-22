import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ReduxStore',
  initialState: {
    registrationData: {},
    localstorageUserDetails: {},
  },
  reducers: {
    addRegistrationData: (state, action) => {
      state.registrationData = action.payload;
    },
    addLocalStorageUserDetails: (state, action) => {
      state.localstorageUserDetails = action.payload;
    },
    clearLocalStorageUserDetails: (state, action) => {
      state.localstorageUserDetails = {};
    },
  },
});

export const {
  addRegistrationData,
  addLocalStorageUserDetails,
  clearLocalStorageUserDetails,
} = slice.actions;
export default slice.reducer;
