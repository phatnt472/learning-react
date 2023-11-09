import React from "react";
import { toast } from 'react-toastify';

class ListTodoHeader extends React.Component {
    state = {
        work: ""
    }

    handleInput = (event) => {
        this.setState({
            work: event.target.value
        })
    }

    handleClickAdd = () => {
        if (this.state.work !== "") {
            const work = {
                id: Math.floor(Math.random() * 1001) + 1,
                work: this.state.work
            }
            this.props.addListWorks(work)
        }
        else {
            toast.warning("Invalid work!")
        }
        this.setState({
            work: ""
        })
    }
    render() {
        return (
            <div className="mt-6 w-[800px]">
                <input type="text" name="todo" className="px-4 py-2 rounded-[50px] outline-1 text-black text-sm" value={this.state.work} onChange={(e) => this.handleInput(e)} />
                <button className="bg-red-300 px-4 py-2 ml-2 rounded-[20px] max-h-9 leading-4 hover:bg-slate-200 hover:text-black" onClick={this.handleClickAdd}>Add</button>
            </div>
        );
    }
}

export default ListTodoHeader
