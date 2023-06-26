import { Fragment } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper ,Container, Button} from "@mui/material";


const UserList = (props) => {


    const onEditUserHandler = (selectedUser)=>{
        console.log("selected",selectedUser);
        props.onSetSelectedUser(selectedUser);
    };

    const onDeleteHandler = (deleteUser)=>{
        props.onDelete(deleteUser.id);
    }

    return (
        <Container maxWidth="md" sx={{ marginTop: '2rem', display: 'flexStart' }}>
              <Fragment>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">SurName</TableCell>
                            <TableCell align="center">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users.map(item => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">{item.surName}</TableCell>
                                <TableCell align="center">{item.email}</TableCell>
                                <TableCell align="center"><Button onClick={()=>onEditUserHandler(item)}>Edit</Button></TableCell>
                                <TableCell align="center"><Button onClick={()=>onDeleteHandler(item)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
        </Container>
      
    )
}
export default UserList;