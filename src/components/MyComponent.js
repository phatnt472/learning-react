import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    }
    handleChangeInput = (event) => {
        if (event.target["name"] === "fname") {
            this.setState({
                firstName: event.target.value
            })
        }
        else if (event.target["name"] === "lname") {
            this.setState({
                lastName: event.target.value
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        let arrJobs = [
            {jobName: 'tester'},
            {jobName: 'Devops'},
            {jobName: 'FE Dev'}
        ]
        return (
            <>
                {console.log(">>> Call Render() state: ",this.state)}
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname"
                        value={this.state.firstName}
                        onChange={(e) => this.handleChangeInput(e)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname"
                        value={this.state.lastName}
                        onChange={(e) => this.handleChangeInput(e)}
                    /><br /><br />
                    <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}/>
                </form>
                <ChildComponent arrJobs={arrJobs}/>

            </>
        );
    }
}

export default MyComponent;