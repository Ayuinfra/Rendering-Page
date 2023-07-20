
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "../actions/ActionType";

const initialState = {
    loading: false,
    products: [],
    error: "",
};


//* Reducer to handle product fetching state
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: "",
            };
        case FETCH_PRODUCT_FAILURE:
            return {
                loading: false,
                products: [],
                error: action.payload,
            };
        default: return state;
    }
};

export default productReducer;