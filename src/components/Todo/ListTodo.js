import React from "react";
import ListTodoHeader from "./ListTodoHeader";
import ListTodoContent from "./ListTodoContent";
import { ToastContainer, toast } from 'react-toastify';


class ListTodo extends React.Component {
    state = {
        works: []
    }

    addListWorks = (work) => {
        const checkData = this.state.works.every((value) => value.work !== work.work)
        if (checkData) {
            this.setState({
                works: [...this.state.works, work]
            })
            toast.success(`This work have been added your work list!`)

        }
        else {
            toast.warning("Data have been created!")
        }
    }

    deleteListWorks = (id) => {
        let checkInList = false
        const filterList = this.state.works.filter((value) => {
            if (value.id === id) {
                checkInList = true
            }
            return value.id !== id
        })
        if (checkInList) {
            this.setState({
                works: [...filterList]
            })
            toast.info("This work have been deleted!")
        }

    }

    render() {
        return (
            <div>
                <ListTodoHeader addListWorks={this.addListWorks} />
                <ListTodoContent works={this.state.works} deleteListWorks={this.deleteListWorks} />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        );
    }
}

export default ListTodo