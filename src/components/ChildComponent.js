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
    render() {
        const { arrJob } = this.props


        return (
            <>
                {this.state.isShow ?
                    <button onClick={this.handleShow}>Show</button> :
                    (<>
                        {arrJob.map((value, index) => <div key={index}>{value.name} - {value.salary}$</div>)}
                        <button onClick={this.handleShow}>Hide</button>
                    </>)
                }
            </>
        );
    }
}

export default ChildComponent;