import React from "react";
import { Row, Col, Typography, Card, Tag } from "antd";

const { Title } = Typography;

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "ReactJS",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Ant Design",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "ASP.NET"],
  },
  {
    category: "Database",
    skills: ["SQL Server", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "Figma", "Postman", "Jira (Agile/Scrum)"],
  },
  {
    category: "Soft Skills",
    skills: ["Teamwork", "Independent Work"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ padding: "60px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Title level={2}>My Skills</Title>
        </div>

        <Row gutter={[24, 24]}>
          {skillGroups.map((group, idx) => (
            <Col xs={24} sm={12} md={8} key={idx}>
              <Card
                title={group.category}
                bordered={false}
                style={{
                  borderRadius: 12,
                  height: "100%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // 🌟 shadow
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                bodyStyle={{ minHeight: 120 }}
                hoverable
              >
                {group.skills.map((skill, i) => (
                  <Tag
                    key={i}
                    color="blue"
                    style={{
                      marginBottom: 8,
                      fontSize: "0.95rem",
                      padding: "6px 12px",
                    }}
                  >
                    {skill}
                  </Tag>
                ))}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;
