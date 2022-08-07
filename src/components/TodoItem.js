import react from 'react';
import '../styles/TodoItem.css'


const TodoItem = ({text,complete,onComplete,deleteTodo}) => {
    return (
        <li className="todo-item">
            <span 
                className={`Icon Icon-check ${complete && 'Icon-check--active'}`}
                onClick={() => onComplete()}
            >
                C
            </span>
            <p className={`TodoItem-p ${complete && 'TodoItem-p--complete'}`}>{text}</p>
            <span 
                className={`Icon Icon-delete`}
                onClick={deleteTodo}>
                X
            </span>
        </li>
    )
}

export {TodoItem}