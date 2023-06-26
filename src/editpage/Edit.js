import {  useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";


const Edit = (props) => {

    const location = useLocation();
    console.log(location);
    const userObj=location.state.userObj;

    const navigation = useNavigate();
    const [Name, SetName] = useState(userObj.name);
    const [Surname, SetSurname] = useState(userObj.surName);
    const [Email, SetEmail] = useState(userObj.email);


    const handleNameChanges = (e) => {
        SetName(e.target.value);
    }

    const handleSurnameChanges = (e) => {
        SetSurname(e.target.value);
    }
    const handleEmailChanges = (e) => {
        SetEmail(e.target.value);
    }
    const handleSubmit = () => {
        const data = {
            name: Name,
            surName: Surname,
            email: Email,
            id: userObj.id,
        };
        console.log(data);
        props.edit(data);
        navigation('../UserList')

    };

    return (
        <Container maxWidth="md" sx={{ marginTop: '2rem', display: 'flexStart' }}>

            <TextField
                label="Name"
                value={Name}
                onChange={handleNameChanges}
                fullWidth
            />
            <TextField
                label="Surname"
                value={Surname}
                onChange={handleSurnameChanges}
                fullWidth
            />
            <TextField
                label="Email"
                value={Email}
                onChange={handleEmailChanges}
                fullWidth
            />
            <Button varient="contained" onClick={handleSubmit}>
                Update
            </Button>
        </Container>
    )
}

export default Edit;