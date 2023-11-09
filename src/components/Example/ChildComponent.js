import React from "react";

class ChildComponent extends React.Component {
    state = {
        isShow: true
    }

    handleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    handleClickDelete = (id) => {
        this.props.deleteJob(id)
    }
    render() {
        const { arrJob } = this.props


        return (
            <>
                {this.state.isShow ?
                    <button onClick={this.handleShow}>Show</button> :
                    (<>
                        {arrJob.map((value) =>
                            <>
                                <div key={value.id}>{value.name} - {value.salary}$ <span onClick={() => this.handleClickDelete(value.id)}>X</span></div>
                            </>)}
                        <button onClick={this.handleShow}>Hide</button>
                    </>)
                }
            </>
        );
    }
}

export default ChildComponent;