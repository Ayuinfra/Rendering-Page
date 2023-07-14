import React from 'react';
import { connect } from 'react-redux';
import Cube from '../cube/Cube';
import Counter from '../counter/Counter';
import {Increment , Decrement} from "../../store/actions/Actions"

const CubeCounter = ({ count, Increment, Decrement }) => {
  return (
    <>
      <Cube count={count} />
      <Counter handleIncrement={Increment} handleDecrement={Decrement} />
    </>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
    Increment,
    Decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CubeCounter);