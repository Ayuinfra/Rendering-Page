import React from 'react';
import { Button, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
buttonsContainer: {
display: 'flex',
justifyContent: 'center',
marginTop: theme.spacing(2),
},
}));

const Counter = ({ handleIncrement, handleDecrement }) => {
const classes = useStyles();

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