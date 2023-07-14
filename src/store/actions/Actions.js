//* Define Action Types
export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';

//* Action Creators
export const Increment  = () => ({
type : INCREMENT

})

export const Decrement = () => ({
    type: DECREMENT
})