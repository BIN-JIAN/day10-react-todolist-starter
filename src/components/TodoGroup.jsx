import React, {useContext, useEffect} from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import {getTodos} from "../apis/api";

const TodoGroup = () => {
  const { dispatch } = useContext(TodoContext);
  const { state } = useContext(TodoContext);
  useEffect(() => {
    getTodos().then(response =>{
      dispatch({type:'LOAD_TODOS',todos:response.data})
    });
  }, []);

  return (
    <div className="todo-group">
      <div className="todo-title">TodoList</div>
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoGroup;
