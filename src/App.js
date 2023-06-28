import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import AddUser from './adduser/AddUser';
import Home from './homepage/Home';
import Edit from './editpage/Edit';
import UserList from './userlist/UserList';



function App() {

    const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState(null);
    const [currentPage,setCurrentPage] = useState("Home")


    const [users, setUsers] = useState([{
        id: 1,
        FirstName: "Vishal",
        LastName: "Chauhan",
        email: "vishal@gmail.com"
    },
    {
        id: 2,
        FirstName: "Prajwal",
        LastName: "Jain",
        email: "Prajwal@gmail.com"
    }]);

    const onAddUserHandler = (user) => {
        setUsers((prev) => ([...prev, user]))
    };

    const onSetSelectedUserHandler = (user) => {
        setSelectedUser(user);
        navigate('Edit', {
            state: {
                userObj: user

            }
        });
    }

    const onEditHandler = (user) => {
        const arr = [...users];
        const index = arr.findIndex(item => item.id === user.id);
        if (index > -1) {
            arr[index] = user;
            setUsers(arr)
        }
        else {
            alert("not exists");
        }
    }
    const onDeleteHandler = (userId) => {
        const arr = users.filter(user => user.id !== userId);
        setUsers(arr);
    }
    const renderPage = () => {
        switch (currentPage) {
          case 'AddUser':
            return (
              <AddUser
              onAddUserHandler={onAddUserHandler}
              />
            );
          case 'home':
            return <Home  />;
          case 'Edit':
            return < Edit />;
        case ' UserList':
            return <UserList />;
    
          default:
            return null;
        }
    }

    return (



        <Fragment>
            <Routes>
                <Route path='AddUser' element={<AddUser addUser={onAddUserHandler} users={users} />} />
                <Route path='' element={<Home onDelete={onDeleteHandler} users={users} onSetSelectedUser={onSetSelectedUserHandler} />} />
                <Route path='UserList' element={<Home onDelete={onDeleteHandler} users={users} onSetSelectedUser={onSetSelectedUserHandler} />} />
                <Route path='Edit' element={<Edit edit={onEditHandler} user={selectedUser} />} />
                {/* <Route path='Edit' element={<Edit edit={onEditHandler} />} /> */}
            </Routes>

        </Fragment>
    )

}
export default App;








