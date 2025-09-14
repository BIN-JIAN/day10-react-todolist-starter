import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import'./TodoList.css'
import TodoGenerator from "./TodoGenerator";
const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext);
  function toggleTodo(id) {
    dispatch({type:'DONE', id})
  }
  return <div className="todo-group">

    <div>This is the TodoList Component.</div>
    {
      state.map(({id, text, done}) => {
        return <div key={id} className={done ? 'todo-item done' : 'todo-item'} onClick={() => toggleTodo(id)}>{text}</div>
      })
    }
    <TodoGenerator />
  </div>
}

export default TodoList