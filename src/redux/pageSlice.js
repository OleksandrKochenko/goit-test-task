import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: { pageNumber: 1, total: 5 },
  reducers: {
    setPage: state => {
      state.pageNumber += 1;
    },
  },
});

export const { setPage } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
