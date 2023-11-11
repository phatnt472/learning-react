import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
class ListUser extends React.Component {
    state = {
        data: []
    }
    async componentDidMount() {
        try {
            let res = await axios.get('https://reqres.in/api/users?page=1')
            this.setState({ data: res && res.data && res.data.data ? res.data.data : []})
        }
        catch(e) {
            console.log(">>>error: ", e)
        }

    }

    handleClickName = (id) => {
        this.props.history.push(`/user/${id}`)
    }
    render() {
        return <>
            {this.state.data.length !== 0 ? this.state.data.map((item, index) => <div className="cursor-pointer" key={index} onClick={() => this.handleClickName(item.id)}>{item.id} - {item.first_name} {item.last_name}</div>) : ""}
        </>
    }
}
export default withRouter(ListUser)