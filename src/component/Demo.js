import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";

// class Demo extends React.Component {
//     state = {
//         users: [
//             { id: 1, name: 'Hoang', age: 25 },
//             { id: 2, name: 'Thruy', age: 12 },
//             { id: 3, name: 'Thao', age: 23 }
//         ]
//     }

//     handleAddNewUser = (user) => {
//         console.log("check new user: ", user);
//         this.setState({
//             users: [user, ...this.state.users]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let filteredUsers = [...this.state.users];
//         filteredUsers = filteredUsers.filter(user => user.id !== userId);
//         this.setState({
//             users: filteredUsers
//         })
//     }
//     //jsx
//     render() {
//         return (
//             <div>
//                 <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//                 <hr />
//                 <DisplayInfor listUsers={this.state.users} handleDeleteUser={this.handleDeleteUser} />
//                 <br />
//             </div>
//         )
//     }
// }

//stateless function component
const Demo = (props) => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Hoang', age: 25 },
        { id: 2, name: 'Thruy', age: 12 },
        { id: 3, name: 'Thao', age: 23 }
    ]);

    const handleAddNewUser = (user) => {
        console.log("check new user: ", user);
        setUsers([user, ...users]);
    }

    const handleDeleteUser = (userId) => {
        let filteredUsers = [...users];
        filteredUsers = filteredUsers.filter(user => user.id !== userId);
        setUsers(filteredUsers);
    }

    return (
        <div>
            <AddUserInfo handleAddNewUser={handleAddNewUser} />
            <hr />
            <DisplayInfor listUsers={users} handleDeleteUser={handleDeleteUser} />
            <br />
        </div>
    )
}

export default Demo;