import React from "react";
import './TodoCounter.css'

const TodoCounter = ({total, complete}) => {
    return(
        <div className="contentTodoCounter">
            <h2 className="TodoCounter">Has completado {complete} de {total} TODOs</h2>
        </div>
    )
}

export {TodoCounter}