import { Fragment } from "react";
import UserList from "../userlist/UserList";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Home = (props) => {

    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{ marginTop: '2rem', display: 'flexStart' }}>
            <Fragment>
                
                <UserList
                    users={props.users}
                    onSetSelectedUser={props.onSetSelectedUser}
                    onDelete={props.onDelete}
                />
                <Button onClick={() => navigate('/AddUser')}>Add User</Button>
             </Fragment>
        </Container>

    )
}
export default Home;