import React, { useState } from "react";
import { Layout, Menu, Drawer, Button, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link as ScrollLink } from "react-scroll";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint(); 

  const menuItems = [
    { key: "home", label: (
      <ScrollLink to="home" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" style={{ cursor: "pointer" }}>
        Home
      </ScrollLink>
    ) },
    { key: "about", label: (
      <ScrollLink to="about" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" style={{ cursor: "pointer" }}>
        About
      </ScrollLink>
    ) },
    { key: "skills", label: (
      <ScrollLink to="skills" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" style={{ cursor: "pointer" }}>
        Skills
      </ScrollLink>
    ) },
    { key: "services", label: (
      <ScrollLink to="services" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" style={{ cursor: "pointer" }}>
        Services
      </ScrollLink>
    ) },
    { key: "projects", label: (
      <ScrollLink to="projects" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" style={{ cursor: "pointer" }}>
        Projects
      </ScrollLink>
    ) },
    { key: "experience", label: (
      <ScrollLink to="experience" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" style={{ cursor: "pointer" }}>
        Experience
      </ScrollLink>
    ) },
    { key: "contact", label: (
      <ScrollLink to="contact" smooth={true} duration={500} offset={-70} spy={true} activeClass="active" style={{ cursor: "pointer" }}>
        Contact
      </ScrollLink>
    ) },
  ];

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        background: "#fff",
        boxShadow: "0 2px 8px #f0f1f2",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "18px", color: "#1677ff", cursor: "pointer" }}>
        <ScrollLink to="home" smooth={true} duration={500} offset={-70} style={{ color: "#1677ff" }}>
          Portfolio.
        </ScrollLink>
      </div>

      {/* Nếu màn hình >= md thì show menu ngang */}
      {screens.md ? (
        <Menu
          mode="horizontal"
          items={menuItems}
          style={{ borderBottom: "none", flex: 1, justifyContent: "flex-end" }}
        />
      ) : (
        <>
          {/* Mobile menu button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            style={{ fontSize: "20px" }}
          />

          {/* Drawer menu */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setOpen(false)}
            open={open}
          >
            <Menu
              mode="vertical"
              items={menuItems.map((item) => ({
                ...item,
                label: (
                  <ScrollLink
                    to={item.key}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(false)}
                  >
                    {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
                  </ScrollLink>
                ),
              }))}
            />
          </Drawer>
        </>
      )}
    </Header>
  );
};

export default Navbar;
