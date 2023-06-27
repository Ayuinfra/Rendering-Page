import { TextField, Button, Container } from "@mui/material";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddUser = (props) => {

    const navigation = useNavigate();
  
    const [Name, SetName] = useState('');
    const [Surname, SetSurname] = useState('');
    const [Email, SetEmail] = useState('');
    const [isEmailInValid,setIsEmailInVaild] = useState(false);
    const [isNameInvalid,setisNameInvalid] = useState(false);
    const [isSurnameInvalid,setisSurnameInvalid] = useState(false);

    const handleNameChanges = (e) => {
        SetName(e.target.value);
        if(validatename(e.target.value))
            setisNameInvalid(false)
        else
            setisNameInvalid(true)
    }

    const handleSurnameChanges = (e) => {
        SetSurname(e.target.value);
        if(validateSurname(e.target.value))
            setisSurnameInvalid(false)
        else
        setisSurnameInvalid(true)
    }
    const handleEmailChanges = (e) => {
        SetEmail(e.target.value);
        if(validatemail(e.target.value))
            setIsEmailInVaild(false)
        else
            setIsEmailInVaild(true)
    }
    const validatename = (Name) => {

        const NameRegex =  /^[a-zA-Z]+$/ ;
        const res = NameRegex.test(Name);
       
        return res;
    }
    const validateSurname = (Surname) => {

        const SurnameRegex =  /^[a-zA-Z]+$/;
        const res = SurnameRegex.test(Surname);
       
        return res;
    }
    const validatemail = (Email) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const res = emailRegex.test(Email);
        console.log(res);
        return res;

    }

    const handleSubmit = () => 
    {

        let isFormInValid = false;

        if(Name===''){
            setisNameInvalid(true);
            isFormInValid = true;
        }

        if(Surname===''){
            setisSurnameInvalid(true);
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
                <Button onClick={()=> navigation(-1)}>Go Back</Button>
            <Fragment>
                <TextField
                    label="Name"
                    value={Name}
                    onChange={handleNameChanges}
                    error = {isNameInvalid}
                    helperText={isNameInvalid ? 'Invalid Name Format' : ''}
                    fullWidth
                    sx={{
                        marginTop : '20px'
                    }}
                />
                
                <TextField
                    label="Surname"
                    value={Surname}
                    onChange={handleSurnameChanges}
                    error = {isSurnameInvalid}
                    helperText={isSurnameInvalid ? 'Invalid Surname Format' : ''}
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
                    helperText={isEmailInValid ? 'Invalid Email Format' : ''}
                    fullWidth
                    sx={{
                        marginTop : '20px'
                    }}
                />
                
                
                <Button 
                        varient="contained" 
                        color="primary"
                        onClick={handleSubmit}
                        disabled={isEmailInValid || isNameInvalid || isSurnameInvalid}
                        
                        >
                            
                    Submit
                </Button>
                
                </Fragment>
            </Container>


        
    )
}
export default AddUser;