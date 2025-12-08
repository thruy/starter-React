import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class Demo extends React.Component {
    //jsx
    render() {
        return (
            <div>
                <UserInfo />
                <hr />
                <DisplayInfor name="Thruy" age="20" />
                <br />
                <DisplayInfor name="Thao" age={22} />
            </div>
        )
    }
}

export default Demo;