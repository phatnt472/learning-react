import React from "react";

class ChildComponent extends React.Component {
    render() {
        const {id, name, age} = this.props

        return (
            <>
               <div>Child Component: {id} - {name} - {age} </div>
            </>
        );
    }
}

export default ChildComponent;