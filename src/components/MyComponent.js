import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        arrJob: []
    }
    addJob = (job) => {
        if (this.state.arrJob.every((value) => value.name !== job.name && value.salary !== job.salary)) {
            this.setState({
                arrJob: [...this.state.arrJob, job]
            })
        }
        else{
            alert('Data is exist!')
        }
    }

    deleteJob = (id) => {
        const filterArr = this.state.arrJob.filter((value) => value.id !== id)
        this.setState({
            arrJob: [...filterArr]
        })
    }
    render() {

        return (
            <>
                {console.log(this.state.arrJob)}
                <AddComponent addJob={this.addJob} />
                <ChildComponent arrJob={this.state.arrJob} deleteJob={this.deleteJob} />

            </>
        );
    }
}

export default MyComponent;