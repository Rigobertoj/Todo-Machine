import react from 'react';
import './TodoItem.css'


const TodoItem = (props) => {
    return (
        <li className="todo-item">
            <span className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}>C</span>
            <p className={`TodoItem-p ${props.complete && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span id='reject' className={`Icon Icon-delete`}>X</span>
        </li>
    )
}

export {TodoItem}