import { Typography } from "@material-ui/core";
import { Fragment } from "react";



const Home = (props) => {
    
    return (

        <Fragment>
            <Typography variant="body1" align="center">
                Welcome : {props.userData?.name  }
            </Typography>
            <Typography>
                Email   :   {props.userData?.email}
            </Typography>
            <Typography>
                gender  :  {props.userData?.gender}
            </Typography>
        </Fragment>
    )


};

export default Home;