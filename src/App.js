import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch} from "./TodoSearch";
import { TodoLIst } from "./TodoLIst";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";

const defaultTodos = [
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
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.complete === true).length
  const totalTodos = todos.length

  let searchedTodos= []
  if(!searchedTodos >= 1){
    searchedTodos = todos
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText  = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    
    const newTodos = [...todos]
    newTodos[todoIndex] = {
      text:newTodos[todoIndex].text,
      complete: true,
    }

    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = searchedTodos.findIndex(todo => todo.text === text)
    const NewTodos = [...todos]
    NewTodos.splice(todoIndex,1)
    setTodos(NewTodos)
  }

  return (
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

  );
}

export default App;
