import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";


const Edit = (props) => {

  
    const navigation = useNavigate();
    const [Name, SetName] = useState(props.user.name);
    const [Surname, SetSurname] = useState(props.user.surName);
    const [Email, SetEmail] = useState(props.user.email);


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
            id: props.user.id,
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