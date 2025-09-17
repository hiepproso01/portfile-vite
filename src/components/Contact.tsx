import React from "react";
import { Form, Input, Button, message, Typography, Card } from "antd";
import emailjs from "@emailjs/browser";

const { Title } = Typography;

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
  const templateParams = {
  company_name: values.companyName || "",
  recruiter_email: values.recruiterEmail || "",
  recruiter_phone: values.recruiterPhone || "",
  recruiter_message: values.recruiterMessage || "",
};
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        message.success("Sent successfully! I'll get back to you soon.");
        form.resetFields();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        message.error("Failed to send 😢, please try again later.");
      });
  };

  return (
    <section id="contact" style={{ padding: "60px 20px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <Card style={{ borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: 30 }}>
            Contact Me
          </Title>

          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="companyName"
              label="Company Name"
              rules={[{ required: true, message: "Please enter the company name" }]}
            >
              <Input placeholder="e.g. FPT Software" />
            </Form.Item>

            <Form.Item
              name="recruiterEmail"
              label="Recruiter Email"
              rules={[
                { required: true, message: "Please enter the recruiter's email" },
                { type: "email", message: "Invalid email format" },
              ]}
            >
              <Input placeholder="example@company.com" />
            </Form.Item>

            <Form.Item
              name="recruiterPhone"
              label="Recruiter Phone"
              rules={[{ required: true, message: "Please enter the recruiter's phone number" }]}
            >
              <Input placeholder="0987xxxxxx" />
            </Form.Item>

            <Form.Item name="recruiterMessage" label="Additional Information">
              <Input.TextArea rows={4} placeholder="Position, interview time..." />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Send Invitation
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
