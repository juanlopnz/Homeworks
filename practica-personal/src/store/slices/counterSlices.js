import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  counter: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
    },
    incrementBy: (state, value) => {
      state.counter = state.counter + Number(value.payload);
    }
  }
});

export const { increment, decrement, incrementBy } = counterSlice.actions