import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
    const [listTodo, setListTodo] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    async  function fetchAPI(url){
        try {
            const data = await axios.get(url)
            const { todos } = data && data.data ? data.data : []
            console.log(todos)
            setListTodo(todos)
            setLoading(false)

        }
        catch (Error) {
            console.log(">>> Message: ", Error.message)
            console.log(">>> Name: ", Error.name)
            setError(true)
        }
    }
    useEffect(() => {
        setTimeout(() => fetchAPI(url), 10000)
        
    }, [])
    return { listTodo, isLoading, isError };
}
