import React from "react";

class Demo extends React.Component {
    state = {
        name: 'Hoang',
        Address: 'Vinh',
        age: 25
    }

    handleClick(event) {
        console.log("Data changed");
        console.log(event);
    }

    handleOnMouseOver(event) {
        console.log("Mouse over event");
        console.log(event.pageX, event.pageY);
    }
    //jsx
    render() {
        return (
            <div>My first component
                <p>Demo component with statistic {Math.random()}</p>
                <div>My name: {this.state.name}, {this.state.age} years old and from {this.state.Address}</div>
                <button onMouseOver={this.handleOnMouseOver}>onMouseOver</button>
                <button onClick={this.handleClick}>onClick</button>
            </div>

        )
    }
}

export default Demo;