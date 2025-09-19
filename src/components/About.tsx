import React, { useState } from "react";
import styled from "styled-components";
import ImageMe from "../assets/image/me.jpg";
import MyCV from "../assets/documents/CV_SoftwareEngineer_ThaiVanHiep.pdf";
const Section = styled.section`
  padding: 50px 20px;
  background: #f9f9f9;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 40px;

  span {
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 3px solid #007bff;
    padding-bottom: 5px;
  }
`;

const AboutDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
`;

const Left = styled.div`
  flex: 1;
  min-width: 280px;

  img {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
`;

const Right = styled.div`
  flex: 2;
  min-width: 280px;
`;

const Topic = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const About: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setLoading(true);
    // Tạo một link ẩn để tải file, sau đó reset loading
    const link = document.createElement("a");
    link.href = MyCV;
    link.download = "CV_ThaiVanHiep_SoftwareDeveloper.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setLoading(false), 1500); // Giả lập loading 1.5s
    e.preventDefault();
  };

  return (
    <Section id="about">
      <Content>
        <Title>
          <span>About Me</span>
        </Title>
        <AboutDetails>
          <Left>
            <img src={ImageMe} alt="About Me" />
          </Left>
          <Right>
            <Topic>Designing Is My Passion</Topic>
            <Paragraph>
              Fullstack Developer with experience in building scalable web applications and mobile apps. Skilled in frontend (ReactJS, React Native, TypeScript, Ant Design), backend (Node.js, ASP.NET), and database management (SQL Server, PostgreSQL, Firebase). Passionate about designing responsive UIs and delivering complete end-to-end solutions.
            </Paragraph>
            <ButtonWrapper>
              <DownloadButton href={MyCV} onClick={handleDownload} download style={{ pointerEvents: loading ? "none" : "auto", opacity: loading ? 0.7 : 1 }}>
                {loading ? "Downloading..." : "Download CV"}
              </DownloadButton>
            </ButtonWrapper>
          </Right>
        </AboutDetails>
      </Content>
    </Section>
  );
};

export default About;
