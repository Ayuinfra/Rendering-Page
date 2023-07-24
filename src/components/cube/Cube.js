// cube/Cube.js
import React, { useState } from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import CustomChip from '../chip/Chip';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { reset } from '../../store/reducers/Reducers';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};

export const getFactorial = (num) => {
  if (num <= 1) return 1;
  return num * getFactorial(num - 1);
};

const Cube = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const isOdd = count % 2 !== 0;
  const isEven = count % 2 === 0;
  const isPrimeNumber = isPrime(count);


  const resetCubeValue = () => {
    dispatch(reset());
  };

  const showEvenChip = () => (
    <CustomChip
      label='This Num is even'
      color="primary"
      count={count} />
  )

  const showOddChip = () => (
    <CustomChip
      label='This Num is odd'
      color="secondary"
      count={count} />
  )

  const showPrimeChip = () => (
    <CustomChip
      label='This num is prime'
      color="success"
      count={count} />
  )

  const showFactorialChip = () => (
    <CustomChip l
      abel='Factorial'
      color="info"
      count={count} />
  )

  return (
    <Container maxWidth="md"
      sx={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
      <>
        {count < 0 && (
          <>
            {isEven && showEvenChip()}
            {isOdd && showOddChip()}
            {isPrimeNumber && showPrimeChip()}
          </>
        )}
        {count === 0 && showFactorialChip()}
        {(count >= 1 && count <= 7) && (
          <>
            {isEven && showEvenChip()}
            {isOdd && showOddChip()}
            {isPrimeNumber && showPrimeChip()}
            {showFactorialChip()}
          </>
        )}
        {count > 7 && (
          <>
            {isEven && showEvenChip()}
            {isOdd && showOddChip()}
            {isPrimeNumber && showPrimeChip()}
          </>
        )}
      </>
      <Paper style={{
        width: 200,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#3f51b5',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '1rem',
      }}>
        <Typography variant="h1">{count}</Typography>
        <IconButton onClick={resetCubeValue} color="inherit" aria-label="refresh">
          <RefreshIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default Cube;