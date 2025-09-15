import React from "react";
import "./TodoList.css";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  return (
    <div className="todo-container">
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
};

export default TodoList;
