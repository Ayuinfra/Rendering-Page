import axios from "axios";
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS } from "../actions/ActionType";

const apiUrl = 'https://fakestoreapi.com/products/category/jewelery';

//* Action creator to fetch products 
export const fetchProduct = () => {
    return (dispatch) => {
        //* dispatch the request action
        dispatch({ type: FETCH_PRODUCT_REQUEST })


        //* Make an api call to fetch products
        axios.get(apiUrl).then((response) => {

            //* Dispatch the Success Action with Fetched Data

            dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: response.data });

        })
            .catch((error) => {

                //* Dispatch the Failure Action with error message
                dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error.message })
            })
    };
};



