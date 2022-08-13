import React, {useContext} from "react";
import '../../styles/TodosLoading.css';
import { TodoContex} from "../../hook/todoContex";

const TodosLoading = () => {
  const {searchedTodos} = useContext(TodoContex)
  console.log(searchedTodos)
  return (
    <div className="contentTodoLoading">
      <div className="TodosLoading"></div>
      <div className="TodosLoading"></div>
      <div className="TodosLoading"></div>
    </div>
  );
};


/**      > */
export {TodosLoading}