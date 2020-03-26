import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
  initialState: 0,
  name: 'count',
});
