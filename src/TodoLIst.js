import react from 'react';
import './TodoList.css'

const TodoLIst = (props) =>{
    return(
        <section className='contentTodoList'>
            <ul className='todoList'>
                {props.children}
            </ul>
        </section>
    )
}

export {TodoLIst}