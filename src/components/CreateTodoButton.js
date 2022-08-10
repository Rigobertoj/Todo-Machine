import React, {useContext} from "react";
import '../styles/CreateTodoButton.css'
import { TodoContex } from "../hook/todoContex";
const CreateTodoButton = () => {
    const {setOpenModal, openModal} = useContext(TodoContex)

    return (
            <button 
                className="btn btn-primary btn-md Button"
                onClick={() => setOpenModal(openModal)}
            >
            +
            </button>
    )
}

export {CreateTodoButton}