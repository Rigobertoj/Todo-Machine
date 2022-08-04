import react from 'react';
import './TodoItem.css'


const TodoItem = (props) => {
    const onComplite = () => {
        alert(`Ya completaste el todo ${props.text}`);
    }
    const onDelete = () => {
        alert('eliminando el TODO')
    }

    return (
        <li className="todo-item">
            <span 
                className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}
                onClick={() => onComplite()}
            >
                C
            </span>
            <p className={`TodoItem-p ${props.complete && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className={`Icon Icon-delete`}
                onClick={onDelete}>
                X
            </span>
        </li>
    )
}

export {TodoItem}