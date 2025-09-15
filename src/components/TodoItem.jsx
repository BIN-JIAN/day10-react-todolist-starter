import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import "./TodoList.css";
import { deleteTodo, updateTodo } from "../apis/api";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const { id, text, done } = todo;

  async function toggleTodo(id) {
      const updatedTodo = { ...todo, done: !done };
      await updateTodo(id, updatedTodo);
      dispatch({ type: 'DONE', id });

  }

  async function handleDelete(id) {
    await deleteTodo(id);
    dispatch({ type: 'DELETE', id });
  }

  return (
    <div className="todo-row">
      <div className={done ? 'todo-item done' : 'todo-item'}>
        <span onClick={() => toggleTodo(id)} style={{ cursor: 'pointer' }}>{text}</span>
      </div>
      {/*<button className="delete-btn" onClick={() => dispatch({ type: 'DELETE', id })}>×</button>*/}
      <button className="delete-btn" onClick={() => handleDelete(id)}>×</button>

    </div>
  );
};

export default TodoItem;
