import React from 'react';
import { connect } from 'react-redux';
import Cube from '../cube/Cube';
import Counter from '../counter/Counter';
import { increment, decrement } from '../../store/reducers/Reducers';

const CubeCounter = ({ count, increment, decrement }) => {
  return (
    <>
      <Cube count={count} />
      <Counter handleIncrement={increment} handleDecrement={decrement} />
    </>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CubeCounter);