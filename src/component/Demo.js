import React from "react";

class Demo extends React.Component {
    state = {
        name: 'Hoang',
        Address: 'Vinh',
        age: 25
    }

    handleClick(event) {
        console.log("Data changed");
        console.log('My name is: ', this.state.name);

        this.setState({
            name: 'Thruy',
            age: Math.floor(Math.random() * 100) + 1
        })
    }

    handleOnMouseOver(event) {
        console.log("Mouse over event");
        console.log(event.pageX, event.pageY);
    }

    handleOnChangInput(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.setState({
            name: event.target[0].value
        })
        console.log(this.state);
    }
    //jsx
    render() {
        return (
            <div>My first component
                <p>Demo component with statistic {Math.random()}</p>
                <div>My name is: {this.state.name}, {this.state.age} years old and from {this.state.Address}</div>
                {/* <button onMouseOver={this.handleOnMouseOver}>onMouseOver</button>
                <button onClick={(e) => { this.handleClick(e) }}>onClick</button> */}
                <form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <input type="text"></input>
                    <button >Submit</button>
                </form>
            </div>

        )
    }
}

export default Demo;