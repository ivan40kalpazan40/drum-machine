import { configureStore } from '@reduxjs/toolkit';
import padReducer from './src/slices/padSlice';

export const store = configureStore({
  reducer: {
    pads: padReducer,
  },
});
