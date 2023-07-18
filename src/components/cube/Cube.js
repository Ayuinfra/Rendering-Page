import React from 'react';
import { Paper, Typography, Chip } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';

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

const Cube = () => {
const count = useSelector((state) => state.count);
const isOdd = count % 2 !== 0;
const isEven = count % 2 === 0;
const isPrimeNumber = isPrime(count);

return (
<>
<Container maxWidth="md" sx={{ marginTop: "0.1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
<Paper
style={{
width: 200,
height: 200,
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
background: '#3f51b5',
color: '#fff',
fontSize: 20,
fontWeight: 'bold',
}}
>
<Typography variant="h1">{count}</Typography>
</Paper>
</Container>
{count !== 0 && (
<>
{isEven && <Chip label="This value is even" color="primary" style={{ margin: '0.5rem' }} />}
{isOdd && <Chip label="This value is odd" color="secondary" style={{ margin: '0.5rem' }} />}
{isPrimeNumber && (
<Chip label="This value is prime" color="success" style={{ margin: '0.5rem' }} />
)}
</>
)}
</>
);
};

export default Cube;