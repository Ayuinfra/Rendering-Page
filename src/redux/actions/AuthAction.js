// Define action types for authentication
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// Action creator for user signup
export const signupUser = (userData) => {
    return (dispatch) => {
        // Perform API call or authentication logic here
        // After successful signup, dispatch the SIGNUP_SUCCESS action with user data
        const user = {
            username: userData.username,
            token: "example-token",
            // Replace with the actual token from the API or authentication response
        };
        dispatch({ type: SIGNUP_SUCCESS, payload: user });
    };
};

// Action creator for user login
export const loginUser = (userData) => {
    return (dispatch) => {
        // Perform API call or authentication logic here
        // After successful login, dispatch the LOGIN_SUCCESS action with user data
        const user = {
            username: userData.username,
            token: "example-token",
            // Replace with the actual token from the API or authentication response
        };
        dispatch({ type: LOGIN_SUCCESS, payload: user });
    };
};