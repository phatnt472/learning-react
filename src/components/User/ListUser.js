import React from 'react'
import axios from 'axios'

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
    render() {
        return <>
            {this.state.data.length !== 0 ? this.state.data.map((item, index) => <div key={index}>{item.id} - {item.first_name} {item.last_name}</div>) : ""}
        </>
    }
}
export default ListUser