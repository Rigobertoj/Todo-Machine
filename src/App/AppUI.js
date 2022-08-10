import React, { useContext } from "react";
import { TodoContex} from "../hook/todoContex";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoLIst } from "../components/TodoLIst";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../modal";


const AppUI = () => {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, SetCloseModal} = useContext(TodoContex);

  return (
    <div className="col-md App-container">
      <TodoCounter />
      <TodoSearch />
      <TodoLIst>
        {error && <p> desesperate hubo un error</p>}
        {loading && <p>Estamos cargando</p>}
        {!loading && !searchedTodos && <p>crear tu primer TODO</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
            onComplete={() => completeTodo(todo.text)}
            deleteTodo={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoLIst>
      {openModal && 
      <Modal>

      </Modal>
      }
      <CreateTodoButton SetOpenModal={openModal}></CreateTodoButton>
    </div>
  );
};

export { AppUI };
