import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";

class Demo extends React.Component {
    state = {
        users: [
            { id: 1, name: 'Hoang', age: 25 },
            { id: 2, name: 'Thruy', age: 12 },
            { id: 3, name: 'Thao', age: 23 }
        ]
    }

    handleAddNewUser = (user) => {
        console.log("check new user: ", user);
        this.setState({
            users: [user, ...this.state.users]
        })

    }
    //jsx
    render() {
        return (
            <div>
                <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
                <hr />
                <DisplayInfor listUsers={this.state.users} />
                <br />
            </div>
        )
    }
}

export default Demo;