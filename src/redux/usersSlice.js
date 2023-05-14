import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, toggleFollow } from './services';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(...action.payload);
    },
    [fetchUsers.rejected]: handleReject,

    [toggleFollow.pending]: handlePending,
    [toggleFollow.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items[index].followers = action.payload.followers;
      state.items[index].isFolowing = action.payload.isFolowing;
    },
    [toggleFollow.rejected]: handleReject,
  },
});

export const usersReducer = usersSlice.reducer;
