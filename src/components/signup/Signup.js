import React from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/actions/AuthAction";
import { Form, useFormAction, useNavigate } from "react-router-dom";


const Signup = () => {
    const { handleSubmit, control, errors } = useFormAction();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(signupUser(data));
        navigate("/home");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <>
                <label>Username</label>
                <Form
                    as={<input />}
                    control={control}
                    name="username"
                    rules={{ required: "Username is required" }}
                />
                {errors.username && <p>{errors.username.message}</p>}
            </>
            <>
                <label>Password</label>
                <Form
                    as={<input />}
                    control={control}
                    name="password"
                    type="password"
                    rules={{ required: "Password is required" }}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </>
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;