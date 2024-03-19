import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ReduxStore',
  initialState: {
    registrationData: {},
  },
  reducers: {
    addRegistrationData: (state, action) => {
      state.registrationData = action.payload;
    },
  },
});

export const {addRegistrationData} = slice.actions
export default slice.reducer;