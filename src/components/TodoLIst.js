import react from 'react';
import '../styles/TodoList.css'

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