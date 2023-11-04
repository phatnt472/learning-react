import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Phát",
    }
    handleChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClick = (event) => {
        alert("You clicked!")
    }
    render() {
        const { name } = this.state
        return (
            <>
                {console.log(this.state)}
                <input type="text" value={name} onChange={(event) => this.handleChangeInput(event)}/>
                <h1>Đây là 1 Component make by {name}</h1>
                <button onClick={(e) => this.handleClick(e)}>Click Me</button>
            </>
        )
    }
}

export default MyComponent;