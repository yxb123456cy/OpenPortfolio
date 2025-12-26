import React from 'react';
import { Layout, Typography, Tabs, Timeline, Card, Progress, Row, Col } from 'antd';
import { RiseOutlined, ReadOutlined, CodeOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const Resume: React.FC = () => {
  const educationData = [
    {
      school: 'University Name',
      degree: 'Master of Computer Science',
      year: '2022 - 2024',
      description: 'Specialized in Artificial Intelligence and Machine Learning. GPA: 3.8/4.0',
    },
    {
      school: 'College Name',
      degree: 'Bachelor of Software Engineering',
      year: '2018 - 2022',
      description: 'Core courses: Data Structures, Algorithms, Operating Systems, Computer Networks.',
    },
  ];

  const experienceData = [
    {
      company: 'Tech Company A',
      position: 'Senior Frontend Engineer',
      year: '2024 - Present',
      description: 'Leading the frontend team to build a scalable SaaS platform using React and TypeScript. Improved performance by 40%.',
    },
    {
      company: 'Startup B',
      position: 'Full Stack Developer',
      year: '2022 - 2024',
      description: 'Developed and maintained multiple web applications. Implemented CI/CD pipelines and automated testing.',
    },
  ];

  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', percent: 90 },
        { name: 'TypeScript', percent: 85 },
        { name: 'Next.js', percent: 80 },
        { name: 'Ant Design', percent: 90 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', percent: 75 },
        { name: 'Express', percent: 70 },
        { name: 'PostgreSQL', percent: 65 },
      ],
    },
    {
      category: 'Tools & DevOps',
      skills: [
        { name: 'Git', percent: 85 },
        { name: 'Docker', percent: 60 },
        { name: 'AWS', percent: 50 },
      ],
    },
  ];

  const items = [
    {
      key: '1',
      label: (
        <span>
          <ReadOutlined />
          Experience & Education
        </span>
      ),
      children: (
        <Row gutter={[32, 32]} className={styles.timelineSection}>
          <Col xs={24} md={12}>
            <Card title={<span><RiseOutlined /> Work Experience</span>} bordered={false}>
              <Timeline
                items={experienceData.map((item) => ({
                  children: (
                    <div className={styles.timelineItem}>
                      <Title level={5} style={{ margin: 0 }}>{item.position}</Title>
                      <Text strong>{item.company}</Text>
                      <br />
                      <Text type="secondary">{item.year}</Text>
                      <Paragraph style={{ marginTop: 8 }}>{item.description}</Paragraph>
                    </div>
                  ),
                }))}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title={<span><ReadOutlined /> Education History</span>} bordered={false}>
              <Timeline
                items={educationData.map((item) => ({
                  children: (
                    <div className={styles.timelineItem}>
                      <Title level={5} style={{ margin: 0 }}>{item.school}</Title>
                      <Text strong>{item.degree}</Text>
                      <br />
                      <Text type="secondary">{item.year}</Text>
                      <Paragraph style={{ marginTop: 8 }}>{item.description}</Paragraph>
                    </div>
                  ),
                }))}
              />
            </Card>
          </Col>
        </Row>
      ),
    },
    {
      key: '2',
      label: (
        <span>
          <CodeOutlined />
          Professional Skills
        </span>
      ),
      children: (
        <div className={styles.skillsSection}>
          <Row gutter={[24, 24]}>
            {skillsData.map((category, index) => (
              <Col xs={24} md={8} key={index}>
                <Card title={category.category} bordered hoverable>
                  <div className={styles.skillCategory}>
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className={styles.skillItem}>
                        <div className={styles.skillName}>
                          <span>{skill.name}</span>
                          <span>{skill.percent}%</span>
                        </div>
                        <Progress percent={skill.percent} showInfo={false} strokeColor="#1890ff" />
                      </div>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ),
    },
  ];

  return (
    <Content className={styles.resumeContainer}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2}>My Resume</Title>
        <Paragraph>
          A brief overview of my professional journey and technical expertise.
        </Paragraph>
      </div>

      <Tabs defaultActiveKey="1" items={items} centered size="large" />
    </Content>
  );
};

export default Resume;
