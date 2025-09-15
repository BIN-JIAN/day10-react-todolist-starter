import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from "react-router";
import { HomeOutlined, UnorderedListOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export function DefaultLayOut() {

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              key: '/',
              icon: <HomeOutlined />,
              label: <NavLink to="/">Home</NavLink>,
            },
            {
              key: '/todos',
              icon: <UnorderedListOutlined />,
              label: <NavLink to="/todos">Todo List</NavLink>,
            },
            {
              key: '/about',
              icon: <InfoCircleOutlined />,
              label: <NavLink to="/about">About</NavLink>,
            },
          ]}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Todo List App ©2025 Created with Ant Design
      </Footer>
    </Layout>
  );
}
