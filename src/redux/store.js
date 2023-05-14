import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './usersSlice';
import { pageReducer } from './pageSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    page: pageReducer,
  },
});
