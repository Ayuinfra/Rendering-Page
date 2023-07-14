import { INCREMENT, DECREMENT } from "../actions/Actions"

//* Initial State 
const InitialState = {
    count: 0,
};


//* Reducer
const CounterReducer = (state = InitialState, actions) => {

    switch (actions.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default CounterReducer;