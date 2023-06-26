import { Button } from "@mui/material";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const PassData = () => {

    const navigate = useNavigate();
    const openProfile = () =>{
        navigate("/viewstate",{
            state:{
                id:"Vishal Chauhan"
            }
        });
    };

    return (
        <Fragment>
            <>
            Proile
            </>
            <Link to ="/viewstate"
            state = {{
                id:"Vishal Chauhan"
            }}
         >
         open Vishal Chauhan 
        </Link>
         <Button onClick = {openProfile}> open Vishal Chauhan </Button>
        </Fragment>
    )

}
export default PassData;