import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { TodoContext } from '../contexts/TodoContext';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const TodoDetailPage = () => {
  const { id } = useParams();
  const { state } = useContext(TodoContext);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const todoItem = state.find(item => item.id === parseInt(id) || item.id === id);
    if (todoItem) {
      setTodo(todoItem);
    }
  }, [id, state]);

  if (!todo) {
    return (
      <div className="page-container">
        <Title level={2}>未找到该待办事项</Title>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Title level={2}>待办事项详情</Title>
      <Card
        title={`待办事项 #${todo.id}`}
      >
        <p><strong>状态：</strong> {todo.done ? '已完成' : '未完成'}</p>
        <p><strong>内容：</strong> {todo.text}</p>
        <p><strong>创建日期：</strong> {new Date().toLocaleDateString()}</p>
      </Card>
    </div>
  );
};

export default TodoDetailPage;
