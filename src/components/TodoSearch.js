import React, {useContext}from 'react';
import '../styles/TodoSearch.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoContex } from '../hook/todoContex';

const TodoSearch = () => {
    const {searchValue, setSearchValue} = useContext(TodoContex)

    const onSearchValueChange = event => {
        const value = event.target.value
        setSearchValue(value)
        console.log(searchValue)
    }

    return(
        <div className="contentTodoSearch">
            <input 
                className="TodoSearch"
                value={searchValue}
                placeholder='Cortar la cebolla' 
                onChange={onSearchValueChange}/>
        </div>
        )
}

export {TodoSearch}