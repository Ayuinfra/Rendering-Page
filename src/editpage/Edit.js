import {  useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";


const Edit = (props) => {

    const location = useLocation();
    
    const userObj=location.state.userObj;

    const navigation = useNavigate();
    const [Name, SetName] = useState(userObj.name);
    const [Surname, SetSurname] = useState(userObj.surName);
    const [Email, SetEmail] = useState(userObj.email);
    const [validemail,SetValidEmail] = useState(userObj.Email);

    const handleNameChanges = (e) => {
        SetName(e.target.value);
    }

    const handleSurnameChanges = (e) => {
        SetSurname(e.target.value);
    }
    const handleEmailChanges = (e) => {
         SetEmail(e.target.value);
        SetValidEmail(validatemail(e.target.value))
}
const validatemail = (Email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(Email);

}

    const handleUpdate = () => {
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
                    error = {!validemail}
                    helperText={!validemail ? 'Invalid Email Format' : ''}
                    fullWidth
                />
                
                <Button 
                        varient="contained" 
                        color="primary"
                        onClick={handleUpdate}
                        disabled={!validemail}
                        >
                    Submit
                </Button>
               
            </Container>
    )
}

export default Edit;