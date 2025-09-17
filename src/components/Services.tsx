import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { FaDesktop, FaCode, FaMobileAlt, FaProjectDiagram } from "react-icons/fa";

const { Title, Paragraph } = Typography;

const services = [
  {
    icon: <FaDesktop />,
    title: "Frontend Development",
    desc: "Build responsive, high-performance user interfaces using ReactJS, TypeScript, Ant Design.",
  },
  {
    icon: <FaCode />,
    title: "Fullstack Development",
    desc: "End-to-end development with Node.js, ASP.NET, SQL Server, PostgreSQL, and Firebase.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps using React Native and Firebase integration for real-time data & authentication.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Web API & System Integration",
    desc: "Design and integrate RESTful APIs, payment gateways, and chatbots to deliver complete solutions.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" style={{ padding: "60px 20px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <Title level={2} style={{ marginBottom: 40 }}>
          My Services
        </Title>
        <Row gutter={[24, 24]}>
          {services.map((service, idx) => (
            <Col xs={24} sm={12} md={12} lg={6} key={idx}>
              <Card
                hoverable
                style={{
                  borderRadius: 12,
                  textAlign: "center",
                  height: "100%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                bodyStyle={{ padding: 24 }}
              >
                <div style={{ fontSize: "2rem", color: "#1677ff", marginBottom: 15 }}>
                  {service.icon}
                </div>
                <Title level={4}>{service.title}</Title>
                <Paragraph style={{ fontSize: "0.95rem", color: "#555" }}>
                  {service.desc}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Services;
