import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleHideUser() {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        //console.log(this.props);
        const { listUsers } = this.props;
        //console.log('Check list user: ', listUsers);
        //console.table(listUsers);
        return (
            <div>
                <div>
                    <span onClick={(e) => this.handleHideUser(e)}>{this.state.isShowListUser ? "Hide list users" : "Show list user"}</span>
                </div>
                <div>Display users information: </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age >= 18 ? "blue" : "red"}>
                                    <p>My name is {user.name}, My age: {user.age} years old.</p>
                                    <hr />
                                </div>
                            )
                        })}
                        {/* <p>My name is {name}</p>
                <p>My age: {age} years old.</p> */}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;