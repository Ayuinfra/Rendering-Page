import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/actions/Actions';


const CounterApp = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      
      <div style={{ backgroundColor: 'lightgrey', padding: 10 }}>
        <h1>Counter</h1>
      </div>

      <div style={styles.container}>
        <h2 style={styles.heading}>Counter Header</h2>
        <div style={styles.counterView}>
          <h1 style={styles.counter}>{count}</h1>
        </div>
        <div style={styles.alignButton}>
          <button onClick={handleIncrement} style={styles.increment}>
            +
          </button>
          <button onClick={handleDecrement} style={styles.decrement}>
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterApp;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'blue',
    fontSize: 20,
  },
  alignButton: {
    display: 'flex',
    flexDirection: 'row',
  },
  increment: {
    backgroundColor: 'blue',
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    color: 'white',
    border: 'none',
  },
  decrement: {
    backgroundColor: 'blue',
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    border: 'none',
  },
  counter: {
    fontSize: 40,
    color: 'white',
  },
  counterView: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 20,
  },
};
