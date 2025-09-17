import React from "react";
import { Layout, Typography, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Link } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center", background: "#111", color: "#aaa", padding: "30px 20px" }}>
      <Space direction="vertical" size="small">
        <Text style={{ color: "#aaa" }}>
          Created by <span style={{ color: "#1677ff", fontWeight: "bold" }}>Thai Van Hiep</span> | © {new Date().getFullYear()} All Rights Reserved
        </Text>

        <Space size="large">
          <Link href="mailto:thaihiep1052@gmail.com" target="_blank">
            <MailOutlined style={{ fontSize: "18px" }} />
          </Link>
          <Link href="https://github.com/hiepproso01" target="_blank">
            <GithubOutlined style={{ fontSize: "18px" }} />
          </Link>
          <Link href="https://www.linkedin.com/in/hiep-thai-b72563248" target="_blank">
            <LinkedinOutlined style={{ fontSize: "18px" }} />
          </Link>
        </Space>
      </Space>
    </Footer>
  );
};

export default AppFooter;
