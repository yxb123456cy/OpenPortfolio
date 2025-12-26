import React from 'react';
import { Layout, Typography, Card, Row, Col, Tag, Divider, Space, Avatar, Button } from 'antd';
import {
  TrophyOutlined,
  ReadOutlined,
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined
} from '@ant-design/icons';
import avatarImg from '../../assets/images/avatar.jpg';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const About: React.FC = () => {
  return (
    <Content className="container" style={{ padding: '50px 20px' }}>
      <Row gutter={[32, 32]}>
        {/* Left Column: Basic Info */}
        <Col xs={24} md={8}>
          <Card hoverable style={{ textAlign: 'center' }}>
            <div style={{ margin: '0 auto 20px' }}>
              <Avatar
                size={120}
                src={avatarImg}
                alt="Developer Avatar"
                style={{ border: '2px solid #f0f0f0' }}
              />
            </div>
            <Title level={3}>Developer Name</Title>
            <Text type="secondary">Full Stack Engineer</Text>
            <Divider />
            <Space orientation="vertical" style={{ width: '100%' }}>
              <Button block icon={<MailOutlined />}>Email Me</Button>
              <Button block icon={<GithubOutlined />}>GitHub</Button>
              <Button block icon={<LinkedinOutlined />}>LinkedIn</Button>
            </Space>
          </Card>
        </Col>

        {/* Right Column: Detailed Info */}
        <Col xs={24} md={16}>
          <section style={{ marginBottom: 40 }}>
            <Title level={2}>About Me</Title>
            <Paragraph style={{ fontSize: 16 }}>
              I am a passionate software engineer with experience in building web applications using modern technologies.
              I love solving complex problems and learning new things. My journey in tech started when...
            </Paragraph>
            <Paragraph style={{ fontSize: 16 }}>
              Currently, I am focused on building scalable frontend architectures and exploring server-side rendering techniques.
            </Paragraph>
          </section>

          <section style={{ marginBottom: 40 }}>
            <Title level={3}><ReadOutlined /> Education</Title>
            <Card style={{ marginTop: 16 }}>
              <Title level={5}>University Name</Title>
              <Text type="secondary">Bachelor of Science in Computer Science | 2018 - 2022</Text>
              <Paragraph style={{ marginTop: 10 }}>
                Graduated with Honors. Specialized in Software Engineering and Artificial Intelligence.
              </Paragraph>
            </Card>
          </section>

          <section style={{ marginBottom: 40 }}>
            <Title level={3}><TrophyOutlined /> Skills</Title>
            <div style={{ marginTop: 16 }}>
              <Title level={5}>Frontend</Title>
              <div style={{ marginBottom: 16, display: 'flex', gap: '18px' }}>
                <Tag color="blue">React</Tag>
                <Tag color="blue">TypeScript</Tag>
                <Tag color="blue">Ant Design</Tag>
                <Tag color="blue">Next.js</Tag>
              </div>

              <Title level={5}>Backend</Title>
              <div style={{ marginBottom: 16, display: 'flex', gap: '18px' }}>
                <Tag color="green">Node.js</Tag>
                <Tag color="green">Express</Tag>
                <Tag color="green">PostgreSQL</Tag>
              </div>

              <Title level={5}>Tools</Title>
              <div style={{ marginBottom: 16, display: 'flex', gap: '18px' }}>
                <Tag color="orange">Git</Tag>
                <Tag color="orange">Docker</Tag>
                <Tag color="orange">AWS</Tag>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Content>
  );
};

export default About;
