import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { List, Card, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router';

const { Title, Text } = Typography;

const DonePage = () => {
  const { state } = useContext(TodoContext);
  const doneTodos = state.filter(todo => todo.done);

  return (
    <div className="page-container">
      <Title level={2}>已完成的待办事项</Title>

      {doneTodos.length === 0 ? (
        <Card>
          <Text>还没有完成的任务。</Text>
        </Card>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={doneTodos}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<CheckCircleOutlined style={{ color: '#52c41a', fontSize: '24px' }} />}
                title={<Link to={`/todos/${item.id}`}>{item.text}</Link>}
                description={`待办事项 #${item.id}`}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default DonePage;
