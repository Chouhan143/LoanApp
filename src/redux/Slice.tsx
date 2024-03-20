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
  },
});

export const {addRegistrationData, addLocalStorageUserDetails} = slice.actions;
export default slice.reducer;
