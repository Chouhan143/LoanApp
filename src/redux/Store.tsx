import {configureStore} from '@reduxjs/toolkit';
import Reducers from './Slice';

const ReduxStore = configureStore({
  reducer: {
    ReduxStore: Reducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default ReduxStore;
