import { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import './TodoList.css';
import { addTodo } from "../apis/api";

const TodoGenerator = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);
  const handleSubmit = async() => {
    if(text && text.trim()) {
      const newTodo = {
        done: false,
        text: text.trim(),
      }
      const response = await addTodo(newTodo);
      dispatch({type:'ADD',todo:response.data});
       setText('');
    }
  };


  return (
    <div className="todo-generator">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {/*<button onClick={addTodo}>add</button>*/}
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default TodoGenerator;

