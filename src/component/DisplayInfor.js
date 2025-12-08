import React from "react";

class DisplayInfor extends React.Component {

    render() {
        //console.log(this.props);
        const { name, age } = this.props;
        return (
            <div>
                <div>Display this information: </div>
                <p>My name is {name}</p>
                <p>My age: {age} years old.</p>
            </div>
        )
    }
}

export default DisplayInfor;