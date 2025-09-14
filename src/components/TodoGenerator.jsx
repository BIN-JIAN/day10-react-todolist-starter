import { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import './TodoList.css';

const TodoGenerator = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  function addTodo() {
    if (text.trim()) {
      dispatch({ type: "ADD", text });
      setText("");
    }
  }

  return (
    <div className="todo-generator">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={addTodo}>add</button>
    </div>
  );
};

export default TodoGenerator;

