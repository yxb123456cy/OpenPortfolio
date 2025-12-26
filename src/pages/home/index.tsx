import React, { useState } from 'react';
import { Layout, Typography, Button, Space } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';
import type { WebsiteBase } from '../../types';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const [state] = useState<WebsiteBase>(
    {
      job: 'Developer',
      briefDescription: "Full Stack Engineer | Open Source Enthusiast",
      detailedDescription: "I build accessible, pixel-perfect, and performant web experiences.Passionate about clean code, modern technologies, and creating value through software.",
      gitHubLink: "https://github.com/yxb123456cy/OpenPortfolio",
      emailLink: "2186256471@qq.com"
    }
  );
  return (
    <Content style={{ padding: '50px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 64px)' }}>
      <div style={{ textAlign: 'center', maxWidth: 800, padding: '0 20px' }}>
        <Title level={1} style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Hello, I'm <span style={{ color: '#1890ff' }}>
            {state.job}
          </span>
        </Title>
        <Title level={3} style={{ fontWeight: 300, color: '#666', marginBottom: '2rem' }}>
          {state.briefDescription}
        </Title>
        <Paragraph style={{ fontSize: '1.2rem', color: '#555', marginBottom: '3rem' }}>
          {state.detailedDescription}
        </Paragraph>

        <Space size="large">
          <Button type="primary" size="large" href="/projects">
            View My Work
          </Button>
          <Button size="large" icon={<GithubOutlined />} href={state.gitHubLink} target="_blank">
            GitHub
          </Button>
          <Button size="large" icon={<MailOutlined />} href={state.emailLink}>
            Contact Me
          </Button>
        </Space>
      </div>
    </Content>
  );
};

export default Home;
