import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import image from '../logo.svg';
// khong nen luu file anh trong public vi se khong duoc xu ly boi webpack

//stateful class component
// class DisplayInfor extends React.Component {
//     state = {
//         isShowListUser: true
//     }
//     handleHideUser() {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }
//     render() {
//         //console.log(this.props);
//         const { listUsers } = this.props;
//         //console.log('Check list user: ', listUsers);
//         //console.table(listUsers);
//         return (
//             <div className="display-info-container">
//                 {/* <img src={image} alt="react-image" /> */}
//                 <div>
//                     <span onClick={(e) => this.handleHideUser(e)}>{this.state.isShowListUser ? "Hide list users" : "Show list user"}</span>
//                 </div>
//                 <div>Display users information: </div>
//                 {this.state.isShowListUser &&
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={user.age >= 18 ? "blue" : "red"}>
//                                     <p style={{ fontFamily: "sans-serif", fontWeight: 'bold' }}>My name is {user.name}, My age: {user.age} years old.</p>
//                                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

//stateless function component
const DisplayInfor = (props) => {
    const [isShowListUsers, setIsShowListUsers] = useState(true);
    const { listUsers } = props;

    function handleShowListUsers() {
        setIsShowListUsers(!isShowListUsers);
    }

    console.log("call render");
    useEffect(() => {
        if (listUsers.length === 0) {
            alert("You deleted all the users!");
        }
        console.log("call useEffect");
    }, [listUsers]);

    return (
        <div className="display-info-container">
            {/* <img src={image} alt="react-image" /> */}
            <div>
                <span onClick={() => handleShowListUsers()}>{isShowListUsers === true ? "Hide list users" : "Show list users"}</span>
            </div>
            <div>Display users information: </div>
            {isShowListUsers &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={user.age >= 18 ? "blue" : "red"}>
                                <p style={{ fontFamily: "sans-serif", fontWeight: 'bold' }}>My name is {user.name}, My age: {user.age} years old.</p>
                                <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default DisplayInfor;