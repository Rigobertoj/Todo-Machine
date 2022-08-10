import React, {useState,createContext,} from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContex = createContext()

const TodoProvider = (props) => {
    const [openModal, setModal] = useState(false)
    const {item:todos, saveItem:saveTodos, loading, error} =  useLocalStorage('TODOS_V1', [])

    const setOpenModal = () => {
        return setModal(prevState => !prevState)
    }

    const [searchValue, setSearchValue] = useState('')
    console.log(todos)


    const completedTodos = todos.filter(todo => todo.complete === true).length
    const totalTodos = todos.length

    let searchedTodos= []
    if(!searchedTodos >= 1){
        searchedTodos = todos
    }else{
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText  = searchValue.toLowerCase();
        return todoText.includes(searchText)
        })
    }
    


    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)

        const newTodos = [...todos]
        newTodos[todoIndex] = {
        text:newTodos[todoIndex].text,
        complete: true,
    }
  
    saveTodos(newTodos)
    }
  
    const deleteTodo = (text) => {
        const todoIndex = searchedTodos.findIndex(todo => todo.text === text)
        const NewTodos = [...todos]
        NewTodos.splice(todoIndex,1)
        saveTodos(NewTodos)
    }
  
    return(
        <TodoContex.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContex.Provider>
    )
}

export { TodoContex, TodoProvider}