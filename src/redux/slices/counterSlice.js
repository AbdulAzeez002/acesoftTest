import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counters: [
      { id: 1, value: 0, name: "counter1" },
      { id: 2, value: 0, name: "counter2" },
      { id: 3, value: 0, name: "counter3" },
      { id: 4, value: 0, name: "counter4" },
    ],
  },
  reducers: {
    increment: (state, action) => {
      const mappedCounters = state.counters?.map((counter) => {
        if (counter.id == action.payload.id) {
          counter.value = counter.value === 10 ? 10 : counter.value + 1;
        }
        return counter;
      });
      state.counters = mappedCounters;
    },
    decrement: (state, action) => {
      const mappedCounters = state.counters?.map((counter) => {
        if (counter.id == action.payload.id) {
          counter.value = counter.value === 0 ? 0 : counter.value - 1;
        }
        return counter;
      });
      state.counters = mappedCounters;
    },
    reset: (state, action) => {
      const mappedCounters = state.counters?.map((counter) => {
        counter.value = 0;
        return counter;
      });
      state.counters = mappedCounters;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const counter = counterSlice.reducer;
