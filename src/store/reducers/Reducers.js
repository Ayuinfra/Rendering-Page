import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        incrementByTwo: (state) => state + 2,
        decrementByTwo: (state) => state - 2,
    },
});

export const { increment, decrement, incrementByTwo, decrementByTwo } = counterSlice.actions;
export default counterSlice.reducer;