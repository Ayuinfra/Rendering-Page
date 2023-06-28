import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";


const Edit = (props) => {


    const location = useLocation();

    const userObj = location.state.userObj;

    const navigation = useNavigate();

    const [FirstName, SetFirstName] = useState(userObj.FirstName);
    const [LastName, SetLastName] = useState(userObj.LastName);
    const [Email, SetEmail] = useState(userObj.email);
    const [isEmailInValid, setIsEmailInVaild] = useState(false);
    const [isFirstNameInvalid, setisFirstNameInvalid] = useState(false);
    const [isLastNameInvalid, setisLastNameInvalid] = useState(false);
    const [hasChanged,SetHasChanged] = useState(false);
    

   

    const handleNameChanges = (e) => {
        SetFirstName(e.target.value);
        SetHasChanged(true)
        if (e.target.value === '') {
            setisFirstNameInvalid(false);
            return;
        }
        if (validatefirstname(e.target.value))
            setisFirstNameInvalid(false)
        else
            setisFirstNameInvalid(true)
    }

    const handleSurnameChanges = (e) => {
        SetLastName(e.target.value);
        SetHasChanged(true)
        if (e.target.value === '') {
            setisLastNameInvalid(false);
            return;
        }
        if (validatelastname(e.target.value))
            setisLastNameInvalid(false)
        else
            setisLastNameInvalid(true)
    }
    const handleEmailChanges = (e) => {
        SetHasChanged(true)
        SetEmail(e.target.value);
        if (validatemail(e.target.value))
            setIsEmailInVaild(false)
        else
            setIsEmailInVaild(true)

    }

    const validatefirstname = (FirstName) => {

        const FirstNameRegex = /^[a-zA-Z ]*$/;
        const res = FirstNameRegex.test(FirstName);

        return res;
    }
    const validatelastname = (LastName) => {

        const LastNameRegex = /^[a-zA-Z ]*$/;
        const res = LastNameRegex.test(LastName);

        return res;
    }
    const validatemail = (Email) => {

        const emailRegex = /^\s*[\w+\-.]+@[a-zA-Z\d\-]+(\.[a-zA-Z\d\-]+)*\s*$/;
        const res = emailRegex.test(Email);
        console.log(res);
        return res;

    }


    const handleSubmit = () => {

        let isFormInValid = false;

        if (FirstName === '') {
            setisFirstNameInvalid(true);
            isFormInValid = true;
        }

        if (LastName === '') {
            setisLastNameInvalid(true);
            isFormInValid = true;
        }


        if (Email === '') {
            setIsEmailInVaild(true);
            isFormInValid = true;
        }

        if (isFormInValid) {
            return;
        }


        const data = {
            FirstName: FirstName,
            LastName: LastName,
            email: Email,
            id: userObj.id,
        };

        props.edit(data);
        navigation('../UserList')
    };
    return (

        <Container maxWidth="md" sx={{ marginTop: '2rem', display: 'flexStart' }}>
            <Button onClick={() => navigation(-1)}>Go Back</Button>
            <TextField
                label="FirstName"
                value={FirstName}
                onChange={handleNameChanges}
                error={isFirstNameInvalid}
                
                helperText={isFirstNameInvalid ? 'Invalid Name Format' : ''}
                fullWidth
                sx={{
                    marginTop: '20px'
                }}
            />

            <TextField
                label="LastName"
                value={LastName}
                onChange={handleSurnameChanges}
                error={isLastNameInvalid}
                helperText={isLastNameInvalid ? 'Invalid Surname Format' : ''}
                fullWidth
                sx={{
                    marginTop: '20px'
                }}
            />

            <TextField
                label="Email"
                value={Email}
                onChange={handleEmailChanges}
                error={isEmailInValid}
                helperText={isEmailInValid ? 'Invalid Email Format' : ''}
                fullWidth
                sx={{
                    marginTop: '20px'
                }}
            />


            <Button
                varient="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isEmailInValid || isFirstNameInvalid || isLastNameInvalid || !hasChanged}

            >

                Update
            </Button>
        </Container>

    )
}

export default Edit;