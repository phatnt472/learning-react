import React from "react";

class AddComponent extends React.Component {
    state = {
        name: "",
        salary: ""
    }
    name = ""
    salary = ""
    handleChangeInput = (event) => {
        if (event.target["name"] === "name") {
            this.setState({name: event.target.value})
        }
        else if (event.target["name"] === "salary") {
            this.setState({salary: event.target.value})

        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if(this.state.name === '' || this.state.salary === '' || isNaN(Number(this.state.salary)) || !isNaN(Number(this.state.name))){
            alert("Valid Data!")
        }
        else{
            this.props.addJob(this.state)
        }
        console.log(">>> Data: ",this.state)
        this.setState({
            name: "",
            salary: ""
        })

    }
    render() {
        return (<>
            <form>
                <label htmlFor="fname">Name:</label><br />
                <input type="text" id="name" name="name"
                    value={this.state.name}
                    onChange={(e) => this.handleChangeInput(e)}
                /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" id="salary" name="salary"
                    value={this.state.salary}
                    onChange={(e) => this.handleChangeInput(e)}
                /><br /><br />
                <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)} />
            </form>
            
        </>
        )
    }
}

export default AddComponent;