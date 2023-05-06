import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
