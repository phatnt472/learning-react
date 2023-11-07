import React from "react";

class ChildComponent extends React.Component {
    render() {
        const {arrJobs} = this.props

        return (
            <>
               {arrJobs.map((value, index) => <div keys={index}>{index} - {value.jobName}</div>)}
            </>
        );
    }
}

export default ChildComponent;