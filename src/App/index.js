import React from "react";
import  { AppUI } from './AppUI'
import { TodoProvider } from '../hook/todoContex'


const App = () => {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;
