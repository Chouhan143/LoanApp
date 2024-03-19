import {configureStore} from '@reduxjs/toolkit';
import Reducers from './Slice';

const ReduxStore = configureStore({
  reducer: {
    ReduxStore: Reducers,
  },
});

export default ReduxStore;
