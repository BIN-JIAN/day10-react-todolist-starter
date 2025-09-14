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

    <div className="todo-title">TodoList</div>
    {
      state.map(({id, text, done}) => {
        return (
          <div key={id} className="todo-row">
            <div className={done ? 'todo-item done' : 'todo-item'}>
              <span onClick={() => toggleTodo(id)} style={{cursor: 'pointer'}}>{text}</span>
            </div>
            <button className="delete-btn" onClick={() => dispatch({type: 'DELETE', id})}>×</button>
          </div>
        )
      })
    }
    <TodoGenerator />
  </div>
}

export default TodoList