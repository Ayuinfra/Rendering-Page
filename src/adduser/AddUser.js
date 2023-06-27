import { TextField, Button, Container } from "@mui/material";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddUser = (props) => {

    const navigation = useNavigate();
    const [Name, SetName] = useState('');
    const [Surname, SetSurname] = useState('');
    const [Email, SetEmail] = useState('');
    const [validemail,SetValidEmail] = useState('');


    

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
    const handleSubmit = () => 
    {
        const id= props.users.length+1

        const data = {
            name: Name,
            surName: Surname,
            email: Email,
            id:id,
        };
        props.addUser(data);
        navigation('/UserList')
    };
    return (
      
            <Container maxWidth="md" sx={{marginTop:'2rem',display:'flexStart'}}>
            <Fragment>
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
                        onClick={handleSubmit}
                        disabled={!validemail}
                        >
                    Submit
                </Button>
                </Fragment>
            </Container>


        
    )
}
export default AddUser;