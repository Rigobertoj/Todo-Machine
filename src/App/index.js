import './App.css';
import React from "react";
import  { AppUI } from './AppUI'
import {useLocalStorage} from '../hook/useLocalStorage'


function App(props) {

  const [todos, saveTodos] =  useLocalStorage('TODOS_V1', [])


  const [searchValue, setSearchValue] = React.useState('')
  console.log(todos)


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

    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = searchedTodos.findIndex(todo => todo.text === text)
    const NewTodos = [...todos]
    NewTodos.splice(todoIndex,1)
    saveTodos(NewTodos)
  }

  return (
    <AppUI 
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
