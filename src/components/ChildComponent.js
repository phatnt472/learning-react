import React from "react";

class ChildComponent extends React.Component {

    render() {

        return (
            <>
               <div>Child Component {this.props.id}</div>
            </>
        );
    }
}

export default ChildComponent;