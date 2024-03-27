import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ReduxStore',
  initialState: {
    registrationData: {},
    localstorageUserDetails: {},
    screenName:[]
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
    addScreenName:(state,action)=>{
      state.screenName = state.screenName.push(action.payload)
    }
  },
});

export const {
  addRegistrationData,
  addLocalStorageUserDetails,
  clearLocalStorageUserDetails,
  addScreenName
} = slice.actions;
export default slice.reducer;
