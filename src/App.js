import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch} from "./TodoSearch";
import { TodoLIst } from "./TodoLIst";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";

const todos = [
  {
    text: 'cortar ceboll', 
    complete: false,
  },
  {
    text: 'Re inscribirme en la prepa', 
    complete: true,
  },
  {
    text: 'cortar cebolla', 
    complete: false,
  }
]

function App(props) {
  return (
    <div className="col-md App-container">
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>
      <TodoLIst>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            complete={todo.complete}
            />
        ))}
      </TodoLIst>
      <CreateTodoButton></CreateTodoButton>

    </div>

  );
}

export default App;
