import { SIGNUP_SUCCESS, LOGIN_SUCCESS } from "../actions/AuthAction";

const initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;