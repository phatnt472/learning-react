import React from "react";

class MyComponent extends React.Component {

    state = {
        name: ""
    }
    handleChangeInput = (event) => {
        this.setState({name: event.target.value})
    }
    render() {
        const { name } = this.state
        return (
            <>
                <input type="text" value={name} onChange={(event) => this.handleChangeInput(event)}/>
                <h1>Đây là 1 Component make by {name}</h1>
            </>
        )
    }
}

export default MyComponent;