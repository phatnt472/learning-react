import React from "react";
import { withRouter } from 'react-router-dom'
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        let { id } = this.props.match.params
        try {
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
        catch (e) {
            console.log(e)
        }
    }
    handleBack = () => {
        this.props.history.push('/user')
    }
    render() {
        const { user } = this.state
        return <div>
            Hello with user - id: {user.id}
            <p>{user.first_name} - {user.last_name}</p>
            <img src={user.avatar} alt=""/>
            <button onClick={() => this.handleBack()}>Back</button>
        </div>
    }
}

export default withRouter(DetailUser)

