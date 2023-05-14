import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://644148b4fadc69b8e07ff29b.mockapi.io';
axios.defaults.params = {
  limit: 4,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (page, thunkAPI) => {
    try {
      const config = {
        params: {
          page: page,
        },
      };
      const response = await axios.get('/users', config);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleFollow = createAsyncThunk(
  'users/followUser',
  async (user, thunkAPI) => {
    try {
      const newQtyOfFollowers = user.isFolowing
        ? user.followers - 1
        : user.followers + 1;
      const response = await axios.put(`/users/${user.id}`, {
        followers: newQtyOfFollowers,
        isFolowing: !user.isFolowing,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
