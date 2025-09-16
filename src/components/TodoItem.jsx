import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import "./TodoList.css";
import { deleteTodo, updateTodo } from "../apis/api";
import {Button, Input, message, Modal} from "antd";
import { EditOutlined } from "@ant-design/icons";
import {data} from "react-router";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const { id, text, done } = todo;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [loading, setLoading] = useState(false);

  async function toggleTodo(id) {
    const updatedTodo = {
      ...todo,
      done: !done
    };
      const response = await updateTodo(id, updatedTodo);
      if (response && response.data) {
        dispatch({ type: 'DONE', id });
      }

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
    // 加强空白内容的检测
    const trimmedText = editedText ? editedText.trim() : '';

    if (!trimmedText) {
      message.error("待办事项内容不能为空");
      return;
    }

    if (trimmedText === text) {
      setIsModalVisible(false);
      return; // 内容没有变化，直接关闭modal
    }

    setLoading(true);

    try {
      const updatedTodo = {
        ...todo,
        text: trimmedText
      };

      const response = await updateTodo(id, updatedTodo);

      if (response && response.data) {
        dispatch({ type: 'UPDATE_TEXT', id, text: trimmedText });
        setIsModalVisible(false);
        message.success("更新成功");
      }
    } catch (error) {
      if (error.response.data.code === 422) {
        message.error(`请求参数无效: ${data?.message || '更新内容不能为空'}`);
        setLoading(false);
      }
    }
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
            title="编辑"
          />
          <button className="delete-btn" onClick={() => handleDelete(id)}>×</button>
        </div>
      </div>

      <Modal
        title="编辑待办事项"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="保存"
        cancelText="取消"
        confirmLoading={loading}
      >
        <Input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          autoFocus
          placeholder="请输入待办事项内容"
          disabled={loading}
        />
      </Modal>
    </>
  );
};

export default TodoItem;
