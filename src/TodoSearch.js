import React from 'react';
import './TodoSearch.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoSearch = () => {
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
    }

    return(
        <div className="contentTodoSearch">
            <input 
                className="TodoSearch"
                placeholder='Cortar la cebolla' 
                onChange={onSearchValueChange}/>
        </div>
    )
}

export {TodoSearch}