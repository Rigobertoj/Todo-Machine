import React from 'react';
import './TodoSearch.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoSearch = () => {
    return(
        <div className="contentTodoSearch">
            <input className="TodoSearch"placeholder='Cortar la cebolla' />
        </div>
    )
}

export {TodoSearch}