import React from "react";
import { Timeline, Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const experiences = [
  {
    company: "XNK TMDV Arena Company Limited",
    time: "Mar 2024 - Jun 2025",
    role: "Front-End Developer",
    desc: [
      "Developed management website using ReactJS, TypeScript, Ant Design with RESTful API integration.",
      "Built mobile management app with React Native.",
      "Wrote automation test scripts to improve software quality.",
    ],
  },
  {
    company: "Thien Ha Nga Hotel Supplies Co., Ltd",
    time: "Jul 2023 - Nov 2023",
    role: "Junior Software Engineer",
    desc: [
      "Participated in requirement analysis with clients.",
      "Contributed as full-stack developer with ReactJS & ASP.NET.",
      "Collaborated with team to deliver projects on time.",
    ],
  },
  {
    company: "Binh Duong Province Digital Transformation Center",
    time: "May 2023 - Jul 2023",
    role: "Intern Mobile Developer (Full-stack)",
    desc: [
      "Developed department management app for Android/iOS with React Native.",
      "Built backend APIs with Node.js/Express, integrated Firebase.",
      "Implemented UI & business logic with real-time data.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: "60px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
          Work Experience
        </Title>

        <Timeline mode="left">
          {experiences.map((exp, idx) => (
            <Timeline.Item key={idx} label={exp.time} color="blue">
              <Card bordered={false} style={{ borderRadius: 8 }}>
                <Title level={4}>{exp.role}</Title>
                <Paragraph>
                  <strong>{exp.company}</strong>
                </Paragraph>
                <ul>
                  {exp.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </Card>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;
