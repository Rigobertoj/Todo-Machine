import React from "react";
import './CreateTodoButton.css'

const CreateTodoButton = () => {
    const onClickButton = (msg) => {
        alert(msg)
    }

    return (
            <button 
                className="btn btn-primary btn-md Button"
                onClick={() => onClickButton('Holi')}
            >
            +
            </button>
    )
}

export {CreateTodoButton}