import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems: MenuProps['items'] = [
    { key: '/', label: 'Home' },
    { key: '/projects', label: 'Projects' },
    { key: '/resume', label: 'Resume' },
    { key: '/about', label: 'About' },
  ];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
    setMobileMenuOpen(false);
  };

  return (
    <Header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      padding: '0 20px'
    }}>
      <div
        className="logo"
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          color: '#1890ff'
        }}
        onClick={() => navigate('/')}
      >
        OpenPortfolio
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu" style={{ display: 'none' }}>
        {/* We will handle responsiveness with CSS or Grid, for now using simple display logic in style tag 
            Actually, Antd Menu mode="horizontal" handles basic horizontal layout. 
            We need media queries to hide/show. 
        */}
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{
            borderBottom: 'none',
            background: 'transparent',
            minWidth: '400px',
            justifyContent: 'flex-end'
          }}
        />
      </div>

      {/* Mobile Menu Button */}
      <Button
        className="mobile-menu-btn"
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setMobileMenuOpen(true)}
        style={{ display: 'none' }}
      />

      {/* Drawer for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ borderRight: 'none' }}
        />
      </Drawer>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: block !important; flex: 1; display: flex !important; justify-content: flex-end; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </Header>
  );
};

export default AppHeader;
