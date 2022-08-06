import React from 'react';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch} from "../components/TodoSearch";
import { TodoLIst } from "../components/TodoLIst";
import { TodoItem } from "../components/TodoItem";
import {CreateTodoButton} from "../components/CreateTodoButton";


const AppUI = ({totalTodos, completedTodos, searchValue,setSearchValue,searchedTodos,completeTodo,deleteTodo}) => {
    return(
        <div className="col-md App-container">
        <TodoCounter
          total={totalTodos}
          complete={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoLIst>
          { searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                complete={todo.complete}
                onComplete={() => completeTodo(todo.text)}
                deleteTodo={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoLIst>
        <CreateTodoButton></CreateTodoButton>
  
      </div>
  
    )
}

export { AppUI }