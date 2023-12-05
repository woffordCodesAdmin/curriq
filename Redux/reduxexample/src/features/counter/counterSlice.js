import { createSlice } from "@reduxjs/toolkit";

// Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated.
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library,which detects changes to a "draft state" and produces a brand new immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
