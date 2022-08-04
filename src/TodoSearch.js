import React from 'react';
import './TodoSearch.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoSearch = ({searchValue, setSearchValue}) => {
    const onSearchValueChange = (event) => {
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