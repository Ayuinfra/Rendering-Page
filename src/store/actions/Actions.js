 export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_2 = 'INCREMENT_BY_2';
export const DECREMENT_BY_2 = 'DECREMENT_BY_2';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementBy2 = () => ({
  type: INCREMENT_BY_2,
});

export const decrementBy2 = () => ({
  type: DECREMENT_BY_2,
});
