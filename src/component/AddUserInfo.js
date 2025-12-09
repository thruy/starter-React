import React, { useEffect, useState } from "react";

// class AddUserInfo extends React.Component {
//     state = {
//         name: '',
//         Address: 'Vinh',
//         age: 20
//     }

//     handleClick(event) {
//         console.log("Data changed");
//         console.log('My name is: ', this.state.name);

//         this.setState({
//             name: 'Thruy',
//             age: Math.floor(Math.random() * 100) + 1
//         })
//     }

//     handleOnMouseOver(event) {
//         console.log("Mouse over event");
//         console.log(event.pageX, event.pageY);
//     }

//     handleOnChangName(event) {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangAge(event) {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit(event) {
//         event.preventDefault();
//         // this.setState({
//         //     name: event.target[0].value,
//         //     age: event.target[1].value
//         // })
//         console.log(this.state);
//         this.props.handleAddNewUser({
//             id: "random" + Math.floor(Math.random() * 1000),
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div>My first component
//                 <p>Demo component with statistic {Math.random()}</p>
//                 <div>My name is: {this.state.name}, {this.state.age} years old and from {this.state.Address}</div>
//                 {/* <button onMouseOver={this.handleOnMouseOver}>onMouseOver</button>
//                 <button onClick={(e) => { this.handleClick(e) }}>onClick</button> */}
//                 <form onSubmit={(e) => this.handleOnSubmit(e)}>
//                     <label>Name: </label>
//                     <input type="text" value={this.state.name} onChange={(e) => this.handleOnChangName(e)}></input>
//                     <label>Name: </label>
//                     <input type="text" value={this.state.age} onChange={(e) => this.handleOnChangAge(e)}></input>
//                     <button >Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

//stateless function component
const AddUserInfo = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(20);
    const [address, setAddress] = useState('Vinh');

    const handleClick = () => {
        console.log("Data changed");
        console.log('My name is: ', name);
        setName('Thruy');
        setAge(Math.floor(Math.random() * 100) + 1);
    }

    const handleOnMouseOver = (event) => {
        console.log("Mouse over event");
        console.log(event.pageX, event.pageY);
    }

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log({ name, age, address });
        props.handleAddNewUser({
            id: "random" + Math.floor(Math.random() * 1000),
            name: name,
            age: age
        })
    }

    return (
        <div>My first component
            <p>Demo component with statistic {Math.random()}</p>
            <div>My name is: {name}, {age} years old and from {address}</div>
            {/* <button onMouseOver={this.handleOnMouseOver}>onMouseOver</button>
                <button onClick={(e) => { this.handleClick(e) }}>onClick</button> */}
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => handleOnChangeName(e)}></input>
                <label>Name: </label>
                <input type="text" value={age} onChange={(e) => handleOnChangeAge(e)}></input>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo;