import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class Demo extends React.Component {
    users = [
        { id: 1, name: 'Hoang', age: 25 },
        { id: 2, name: 'Thruy', age: 12 },
        { id: 3, name: 'Thao', age: 23 }
    ]
    //jsx
    render() {
        return (
            <div>
                <UserInfo />
                <hr />
                <DisplayInfor listUsers={this.users} />
                <br />
            </div>
        )
    }
}

export default Demo;