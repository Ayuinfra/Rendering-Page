import React from 'react';
import { Button, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
       },
      button: {
        margin: theme.spacing(2),
      },
    }));

const Counter = ({ handleIncrement, handleDecrement }) => {
  const classes = useStyles();

  return (
    <Paper>
      <Paper className={classes.buttonsContainer}>
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          Add
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDecrement}>
          Subtract
        </Button>
      </Paper>
    </Paper>
  );
};

export default Counter;