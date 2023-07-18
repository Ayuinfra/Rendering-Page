import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Paper } from '@mui/material';
import { decrement, decrementByTwo, increment, incrementByTwo } from '../../store/reducers/Reducers';

const Counter = () => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrementByTwo = () => {
        dispatch(incrementByTwo());
    };

    const handleDecrementByTwo = () => {
        dispatch(decrementByTwo());
    };

    return (
        <Paper>
            <>
                <Button variant="contained" color="primary" onClick={handleIncrement}>
                    Add + 1
                </Button>
                <Button variant="contained" color="secondary" onClick={handleDecrement} style={{ marginRight: '1rem', marginLeft: '1rem' }}>
                    Sub - 1
                </Button>
            </>

            <>
                <Button variant="contained" color="primary" onClick={handleIncrementByTwo} style={{ marginLeft: '1rem' }}>
                    Add + 2
                </Button>
                <Button variant="contained" color="secondary" onClick={handleDecrementByTwo} style={{ marginRight: '1rem', marginLeft: '1rem' }}>
                    Sub - 2
                </Button>
            </>
        </Paper>
    );
};

export default Counter;
