import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import Background from "../assets/image/wallhalla-17-2560x1440.jpg";
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fff;
  position: relative;
  background:  url(${Background}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
`;

const HomeContent = styled.div`
  text-align: center;
`;

const Text = styled.div`
  margin-bottom: 30px;

  .text-one {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  .text-two {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .text-three {
    font-size: 1.2rem;
    margin-bottom: 6px;
  }

  .text-four {
    font-size: 1rem;
    color: #eee;
  }
`;

const ButtonWrapper = styled.div``;

const HireButton = styled.button`
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: bold;
  color: #007bff;
  background: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #f0f0f0;
  }
`;

const Home: React.FC = () => {
  return (
    <Section id="home">
      <HomeContent>
        <Text>
          <div className="text-one">Hello,</div>
          <div className="text-two">I'm Thai Van Hiep</div>
          <div className="text-three">Frontend | Web | Fullstack Developer</div>
          <div className="text-four">Based in Ho Chi Minh, Viet Nam</div>
        </Text>
        <ButtonWrapper>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70} style={{ display: "inline-block" }}>
            <HireButton>Hire Me</HireButton>
          </ScrollLink>
        </ButtonWrapper>
      </HomeContent>
    </Section>
  );
};

export default Home;
