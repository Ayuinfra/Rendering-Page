import React from 'react';
import { Button, Paper } from '@mui/material';



const Counter = ({ handleIncrement, handleDecrement }) => {


return (

<>
<Button variant="contained" color="primary" onClick={handleIncrement} >
Add + 1
</Button>
<Button variant="contained" color="secondary" onClick={handleDecrement}>
Sub - 1
</Button>
</>

);
};

export default Counter;