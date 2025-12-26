import React, { useState } from 'react';
import { Layout, Typography, Card, Tag, Row, Col, Radio, Modal, Button, Space, Image } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import styles from './index.module.scss';

// Import assets
import coverImg from '../../assets/images/海浪海边美女.png';
import detailImg from '../../assets/images/大屏.png';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  cover: string;
  detailImage: string;
  demoUrl?: string;
  repoUrl?: string;
  date: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock Data
  const projectsData: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Dashboard',
      category: 'Frontend',
      description: 'A comprehensive dashboard for managing online stores with real-time data visualization.',
      fullDescription: 'This project is a modern e-commerce dashboard built to help shop owners manage their inventory, orders, and customers efficiently. It features real-time data updates, interactive charts, and a responsive design that works seamlessly across devices.',
      tags: ['React', 'Ant Design', 'Recharts'],
      cover: coverImg,
      detailImage: detailImg,
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
      date: '2024-01',
      features: [
        'Real-time sales monitoring',
        'Inventory management system',
        'Customer analytics',
        'Dark/Light mode support'
      ]
    },
    {
      id: '2',
      title: 'Task Management API',
      category: 'Backend',
      description: 'A robust RESTful API for task management with authentication and role-based access control.',
      fullDescription: 'A scalable backend solution for task management applications. It provides secure authentication using JWT, role-based access control for different user tiers, and optimized database queries for high performance.',
      tags: ['Node.js', 'Express', 'MongoDB'],
      cover: coverImg,
      detailImage: detailImg,
      repoUrl: 'https://github.com',
      date: '2023-11',
      features: [
        'JWT Authentication',
        'Role-Based Access Control (RBAC)',
        'API Rate Limiting',
        'Comprehensive Documentation'
      ]
    },
    {
      id: '3',
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'A personal portfolio website to showcase projects and skills (This website!).',
      fullDescription: 'My personal portfolio website designed to showcase my professional journey, projects, and skills. Built with modern web technologies to ensure high performance and accessibility.',
      tags: ['React', 'TypeScript', 'Vite'],
      cover: coverImg,
      detailImage: detailImg,
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
      date: '2023-12',
      features: [
        'Responsive Design',
        'Theme Customization',
        'Interactive UI',
        'SEO Optimized'
      ]
    },
    {
      id: '4',
      title: 'Mobile Fitness App',
      category: 'Mobile',
      description: 'A cross-platform mobile application for tracking workouts and nutrition.',
      fullDescription: 'A fitness tracking application that helps users stay on top of their health goals. Users can log workouts, track nutrition, and view progress over time through intuitive charts.',
      tags: ['React Native', 'Redux', 'Firebase'],
      cover: coverImg,
      detailImage: detailImg,
      demoUrl: 'https://example.com',
      date: '2023-08',
      features: [
        'Workout Logging',
        'Nutrition Tracking',
        'Progress Visualization',
        'Social Sharing'
      ]
    },
  ];

  const categories = ['all', 'Frontend', 'Backend', 'Mobile', 'Full Stack'];

  const handleFilterChange = (e: RadioChangeEvent) => {
    setFilter(e.target.value);
  };

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  const showProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

  return (
    <Content className={styles.projectsContainer}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2}>My Projects</Title>
        <Paragraph>
          Here are some of the projects I've worked on.
        </Paragraph>
      </div>

      {/* Filter Section */}
      <div className={styles.filterSection}>
        <Radio.Group value={filter} onChange={handleFilterChange} buttonStyle="solid" size="large">
          {categories.map(cat => (
            <Radio.Button key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>

      {/* Projects Grid */}
      <Row gutter={[24, 24]}>
        {filteredProjects.map(project => (
          <Col xs={24} sm={12} lg={8} key={project.id}>
            <Card
              hoverable
              className={styles.projectCard}
              cover={<img alt={project.title} src={project.cover} />}
              onClick={() => showProjectDetails(project)}
            >
              <div className={styles.cardMeta}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <Tag color="blue">{project.category}</Tag>
                  <Text type="secondary" style={{ fontSize: 12 }}>{project.date}</Text>
                </div>
                <Title level={4} style={{ margin: '0 0 8px 0' }}>{project.title}</Title>
                <Paragraph ellipsis={{ rows: 3 }} type="secondary">
                  {project.description}
                </Paragraph>
              </div>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <Tag key={tag} style={{ marginRight: 4, marginBottom: 4 }}>{tag}</Tag>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Project Details Modal */}
      <Modal
        title={null}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        width={1000}
        centered
        destroyOnClose
        className={styles.projectModal}
      >
        {selectedProject && (
          <div>
            <div className={styles.modalImageContainer}>
              <Image
                src={selectedProject.detailImage}
                alt={selectedProject.title}
                style={{ width: '100%' }}
                preview={{
                  src: selectedProject.detailImage,
                }}
              />
            </div>

            <div className={styles.modalContent}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div>
                  <Title level={2} style={{ marginBottom: 8 }}>{selectedProject.title}</Title>
                  <Space>
                    <Tag color="blue" style={{ fontSize: 14, padding: '4px 8px' }}>{selectedProject.category}</Tag>
                    <Text type="secondary">{selectedProject.date}</Text>
                  </Space>
                </div>
                <Space>
                  {selectedProject.demoUrl && (
                    <Button type="primary" icon={<LinkOutlined />} href={selectedProject.demoUrl} target="_blank">
                      Live Demo
                    </Button>
                  )}
                  {selectedProject.repoUrl && (
                    <Button icon={<GithubOutlined />} href={selectedProject.repoUrl} target="_blank">
                      Source Code
                    </Button>
                  )}
                </Space>
              </div>

              <Paragraph style={{ fontSize: 16, lineHeight: 1.8 }}>
                {selectedProject.fullDescription}
              </Paragraph>

              <Row gutter={[32, 32]} style={{ marginTop: 32 }}>
                <Col xs={24} md={12}>
                  <div className={styles.modalSection}>
                    <Title level={4}>Key Features</Title>
                    <ul style={{ paddingLeft: 20 }}>
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} style={{ marginBottom: 8 }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className={styles.modalSection}>
                    <Title level={4}>Tech Stack</Title>
                    <div>
                      {selectedProject.tags.map(tag => (
                        <Tag key={tag} color="geekblue" style={{ fontSize: 14, padding: '4px 8px', marginBottom: 8 }}>
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </Modal>
    </Content>
  );
};

export default Projects;
