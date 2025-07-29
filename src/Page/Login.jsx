import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    citizenId: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi dữ liệu login (thay thế bằng API thực tế)
    console.log("Đăng nhập với:", formData);

    if (!formData.citizenId || !formData.password) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    // Gọi API login ở đây...
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4 text-primary">Đăng Nhập</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Số tài khoản (CMND/CCCD)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập số tài khoản"
              name="citizenId"
              value={formData.citizenId}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Đăng nhập
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
