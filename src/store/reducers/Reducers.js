import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        incrementByTwo: (state) => state + 2,
        decrementByTwo: (state) => state - 2,
        reset : (state)=>state  = 0
    }
});

export const { increment, decrement, incrementByTwo, decrementByTwo,reset } = counterSlice.actions;
export default counterSlice.reducer;