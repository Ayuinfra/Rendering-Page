import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Cube from '../cube/Cube';
import Counter from '../counter/Counter';
import { increment, decrement, incrementBy2, decrementBy2 } from "../../store/actions/Actions"


const CubeCounter = () => {
  
  const handleIncrement = () => {

    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  const handleIncrementBy2 = () => {
    incrementBy2();
  };

  const handleDecrementBy2 = () => {
    decrementBy2();
  };

  return (
    <>
      <Cube />
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleIncrementBy2={handleIncrementBy2}
        handleDecrementBy2={handleDecrementBy2}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementBy2,
  decrementBy2,
};

export default connect(mapStateToProps, mapDispatchToProps)(CubeCounter);