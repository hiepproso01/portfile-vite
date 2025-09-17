import React from "react";
import { Row, Col, Card, Tag, Typography } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const projects = [
  {
    title: "Class Management System",
    description:
      "Web app with OTP login, real-time chat, lesson & notification management, and profile editing.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "Firebase", "Socket.io"],
    role: "Fullstack Developer",
    github: "https://github.com/hiepproso01/class-management",
  },
  {
    title: "E-commerce Web Application",
    description:
      "Full-stack platform with role-based access (Admin & User), product & order management, integrated chatbot (Gemini API), and payment gateways (MoMo, ZaloPay).",
    tech: ["React.js", "Node.js", "ASP.NET", "Swagger"],
    role: "Fullstack Developer",
    github: "https://github.com/hiepproso01/Ecommerce/tree/main1.1",
  },
  {
    title: "Device Management App",
    description:
      "Mobile app for department/device management with role-based access, Firebase integration, issue reporting & notifications.",
    tech: ["React Native", "Node.js", "Firebase"],
    role: "Fullstack Developer",
    github: "https://github.com/hiepproso01/DeviceManagementApp",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ padding: "60px 20px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
          Projects
        </Title>

        <Row gutter={[24, 24]}>
          {projects.map((project, idx) => (
            <Col xs={24} md={12} key={idx}>
              <Card
                title={project.title}
                bordered={false}
                style={{ borderRadius: 12 }}
                actions={[
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubOutlined /> GitHub
                  </a>,
                ]}
              >
                <Paragraph>{project.description}</Paragraph>
                <Paragraph>
                  <strong>Role:</strong> {project.role}
                </Paragraph>
                <div>
                  {project.tech.map((t, i) => (
                    <Tag color="blue" key={i}>
                      {t}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;
