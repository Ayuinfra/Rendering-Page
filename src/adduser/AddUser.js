import { TextField, Button, Container } from "@mui/material";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddUser = (props) => {

    const navigation = useNavigate();
  
    const [FirstName, SetFirstName] = useState('');
    const [LastName, SetLastName] = useState('');
    const [Email, SetEmail] = useState('');
    const [isEmailInValid,setIsEmailInVaild] = useState(false);
    const [isFirstNameInvalid,setisFirstNameInvalid] = useState(false);
    const [isLastNameInvalid,setisLastNameInvalid] = useState(false);

    const handleNameChanges = (e) => {
        
        SetFirstName(e.target.value.trim());
        if(e.target.value === ''){
            setisFirstNameInvalid(false);
            return;
        }
        if(validatename(e.target.value))
            setisFirstNameInvalid(false)
        else
            setisFirstNameInvalid(true)
    }

    const handleSurnameChanges = (e) => {
        SetLastName(e.target.value.trim());
        if(e.target.value === ''){
            setisLastNameInvalid(false);
            return;
        }
        if(validateSurname(e.target.value))
            setisLastNameInvalid(false)
        else
        setisLastNameInvalid(true)
    }
    const handleEmailChanges = (e) => {
        SetEmail(e.target.value).trim();
        if(e.target.value === ''){
            setIsEmailInVaild(false);
            return;
        }
        if(validatemail(e.target.value))
            setIsEmailInVaild(false)
        else
            setIsEmailInVaild(true)
    }
    const validatename = (Name) => {

        const NameRegex =  /^[a-zA-Z ]*$/ ;
        const res = NameRegex.test(Name);
       
        return res;
    }

    const validateSurname = (Surname) => {

        const SurnameRegex =  /^[a-zA-Z ]*$/;
        const res = SurnameRegex.test(Surname);
       
        return res;
    }
    const validatemail = (Email) => {

        const emailRegex = /^\s*[\w+\-.]+@[a-zA-Z\d\-]+(\.[a-zA-Z\d\-]+)*\s*$/;
        const res = emailRegex.test(Email);
        console.log(res);
        return res;

    }

    const handleSubmit = () => 
    {

        let isFormInValid = false;

        if(FirstName===''){
            setisFirstNameInvalid(true);
            isFormInValid = true;
        }

        if(LastName===''){
            setisLastNameInvalid(true);
            isFormInValid = true;
        }
        
        
        if(Email===''){
            setIsEmailInVaild(true);
            isFormInValid = true;
        }
        
        if(isFormInValid){
            return;
        }

        const id= props.users.length+1
        const data = {
            FirstName: FirstName,
            LastName: LastName,
            email: Email,
            id:id,
        };
        props.addUser(data);
        navigation('/UserList')
    };
    return (

            <Container maxWidth="md" sx={{marginTop:'2rem',display:'flexStart'}}>
                <Button onClick={()=> navigation(-1)}>Go Back</Button>
            <Fragment>
                <TextField
                    label="Name"
                    value={FirstName}
                    onChange={handleNameChanges}
                    error = {isFirstNameInvalid}
                    helperText={isFirstNameInvalid &&  'Invalid Format'}
                    fullWidth
                    sx={{
                        marginTop : '20px'
                    }}
                />
                
                <TextField
                    label="LastName"
                    value={LastName}
                    onChange={handleSurnameChanges}
                    error = {isLastNameInvalid}
                    helperText={isLastNameInvalid  && 'Invalid Format'}
                    fullWidth
                    sx={{
                        marginTop : '20px'
                    }}
                />
                
                <TextField
                    label="Email"
                    value={Email}
                    onChange={handleEmailChanges}
                    error = {isEmailInValid}
                    helperText={isEmailInValid &&  'Invalid Format' }
                    fullWidth
                    sx={{
                        marginTop : '20px'
                    }}
                />
                
                
                <Button 
                        varient="contained" 
                        color="primary"
                        onClick={handleSubmit}
                        disabled={isEmailInValid || isFirstNameInvalid || isLastNameInvalid}
                        
                        >
                            
                    Submit
                </Button>
                
                </Fragment>
            </Container>


        
    )
}
export default AddUser;