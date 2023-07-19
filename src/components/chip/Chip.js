import React from 'react';
import { Chip } from '@mui/material';
import { getFactorial } from '../cube/Cube';

const CustomChip = (props) => {
    const isFactorialLabel = props.label === "Factorial";

    return (
        <Chip
            label={isFactorialLabel ? `${props.label}: ${getFactorial(props.count)}` : props.label}
            color={props.color}
            style={{ margin: '0.5rem' }}
        />
    );
};

export default CustomChip;