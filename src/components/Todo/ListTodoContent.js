import React from "react";
import { toast } from "react-toastify";

class ListTodoContent extends React.Component {
    state = {
        editTodo: {}
    }

    handleEditClick = (editTodo) => {
        let isEmpty = Object.keys(this.state.editTodo).length === 0

        if (isEmpty) {
            this.setState({
                editTodo
            })
        }
        else {
            const index = this.props.works.indexOf(editTodo)
            this.props.works[index].work = editTodo.work
            this.setState({
                editTodo: {}
            })
            toast.info("This work have been changed")
        }

    }

    handleEditInput = (event) => {
        const editTodoCopy = this.state.editTodo
        editTodoCopy.work = event.target.value
        this.setState({
            ...editTodoCopy
        })
    }

    render() {
        let isEmpty = Object.keys(this.state.editTodo).length === 0
        return (
            <div className="mt-3 w-[600px] mx-[100px] h-[30px]">
                {this.props.works && this.props.works.length !== 0 && <div className="text-left first:border-blue-200 first:border-t-2">
                    {this.props.works.map((value, index) => (
                        <div key={value.id} className="p-2 border-blue-200 border-b-2 pl-[50px]">
                            {index + 1} -
                            {/* {console.log(this.state.id === value.id)} */}
                            {(isEmpty) ?
                                <>
                                    <span className="text-[20px] w-20 leading-[30px]">  {value.work} </span>

                                </> :
                                <>
                                    {
                                        value.id === this.state.editTodo.id ?
                                            <input
                                                type="text"
                                                className="ml-2 px-4 py-2 rounded-[50px] outline-1 text-black text-sm"
                                                value={value.work}
                                                onChange={(e) => this.handleEditInput(e)}
                                            /> :
                                            <span className="text-[20px] w-20 leading-[30px]"> {value.work} </span>
                                    }

                                </>}
                            <button
                                className="leading-[30px] bg-red-300 px-4 py-[4px] ml-2 rounded-[20px] max-h-9 text-[12px] hover:bg-slate-200 hover:text-black"
                                onClick={() => this.handleEditClick(value)}
                            >
                                {!isEmpty && value.id === this.state.editTodo.id ? 'Save' : 'Edit'}
                            </button>
                            <button className="leading-[30px] bg-red-300 px-4 py-[4px] ml-2 rounded-[20px] max-h-9 text-[12px] hover:bg-slate-200 hover:text-black" onClick={() => this.props.deleteListWorks(value.id)}>Delete</button>
                        </div>
                    ))}
                </div>}
            </div>
        );
    }
}

export default ListTodoContent
