import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/Header';

const { Footer } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Layout>
        <Outlet />
      </Layout>
      <Footer style={{ textAlign: 'center', background: '#fff' }}>
        OpenPortfolio ©{new Date().getFullYear()} Created with Ant Design
      </Footer>
    </Layout>
  );
};

export default MainLayout;
