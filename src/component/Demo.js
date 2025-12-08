import React from "react";

class Demo extends React.Component {
    state = {
        name: 'Hoang',
        Address: 'Vinh',
        age: 25
    }
    //jsx
    render() {
        return (
            <div>My first component
                <p>Demo component with statistic {Math.random()}</p>
                <div>My name: {this.state.name}, {this.state.age} years old and from {this.state.Address}</div>
            </div>

        )
    }
}

export default Demo;