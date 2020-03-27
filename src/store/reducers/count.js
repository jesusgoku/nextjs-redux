import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
  initialState: 0,
  name: 'count',
});

const { reducer, actions } = countSlice;

export { countSlice as default, reducer, actions };
