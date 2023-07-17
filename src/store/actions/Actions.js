export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export const increment = (amount) => ({
  type: INCREMENT,
  payload: amount,
});

export const decrement = (amount) => ({
  type: DECREMENT,
  payload: amount,
});

