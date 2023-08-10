import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/loginSlice';
export const store = configureStore({
  // Create the reducer and add it here
  reducer: {
    login: loginSlice.reducer,
  },
});
