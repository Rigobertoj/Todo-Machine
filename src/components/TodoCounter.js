import React, { useContext} from "react";
import '../styles/TodoCounter.css'
import { TodoContex } from "../hook/todoContex";
const TodoCounter = () => {
    const {completedTodos, totalTodos} = useContext(TodoContex)
    return(
        <div className="contentTodoCounter">
            <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </div>
    )
}

export {TodoCounter}