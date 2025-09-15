import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import "./TodoList.css";
import { deleteTodo, updateTodo } from "../apis/api";
import { Button, Input, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const { id, text, done } = todo;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedText, setEditedText] = useState(text);

  async function toggleTodo(id) {
    const updatedTodo = { ...todo, done: !done };
    await updateTodo(id, updatedTodo);
    dispatch({ type: 'DONE', id });
  }

  async function handleDelete(id) {
    await deleteTodo(id);
    dispatch({ type: 'DELETE', id });
  }

  const handleEdit = () => {
    setIsModalVisible(true);
    setEditedText(text);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditedText(text);
  };

  const handleOk = async () => {
    if (editedText.trim() && editedText !== text) {
      const updatedTodo = { ...todo, text: editedText };
      await updateTodo(id, updatedTodo);
      dispatch({ type: 'UPDATE_TEXT', id, text: editedText });
    }
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="todo-row">
        <div className={done ? 'todo-item done' : 'todo-item'}>
          <span
            onClick={() => toggleTodo(id)}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </span>
        </div>
        <div className="action-buttons">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={handleEdit}
            size="small"
          />
          <button className="delete-btn" onClick={() => handleDelete(id)}>×</button>
        </div>
      </div>

      <Modal
        title="编辑待办事项"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <Input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          autoFocus
          placeholder="输入待办事项内容"
        />
      </Modal>
    </>
  );
};

export default TodoItem;
