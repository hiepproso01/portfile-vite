import React from "react";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
const { Header, Content, Footer: AntFooter } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <Header style={{ position: "sticky", top: 0, zIndex: 1000, padding: 0 }}>
        <Navbar />
      </Header>

      {/* Main Content */}
      <Content>
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </Content>

      {/* Footer */}
      <AntFooter style={{ padding: 0, background: "#111" }}>
        <Footer />
      </AntFooter>
    </Layout>
  );
};

export default App;
