import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        arrJob: []
    }
    addJob = (job) => {
        if (!this.state.arrJob.every((value) => value.name === job.name && value.salary === job.salary && Number(job.salary))) {
            this.setState({
                arrJob: [...this.state.arrJob, job]
            })
        }
    }
    render() {

        return (
            <>
                {console.log(this.state.arrJob)}
                <AddComponent addJob={this.addJob} />
                <ChildComponent arrJob={this.state.arrJob} />

            </>
        );
    }
}

export default MyComponent;