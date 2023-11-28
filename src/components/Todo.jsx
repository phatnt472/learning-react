import React from "react"
import { useFetch } from "../customHook/useFetch"
const Todo = () => {

    const { listTodo: todo, isLoading, isError } = useFetch('https://dummyjson.com/todoss')
    return (

        <div>
            {isError === true ? <span className="text-white">Something wrongs!</span> : 
            isLoading === false ? todo.map((item) => (
                    <div key={item.id}
                        className="text-white text-left pl-5 border-slate-200 border-x-4 border-y-2">
                        {item.todo}
                    </div>)) :
                <span className="text-white">Loading...</span>}
            {console.log(`loading: ${isLoading}, error: ${isError}`)}       
        </div>
    )
}

export default Todo
