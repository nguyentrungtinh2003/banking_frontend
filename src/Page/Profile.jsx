import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const user = {
  name: "Nguyễn Văn A",
  email: "nguyenvana@example.com",
  accountNumber: "0123456789",
  balance: "10,000,000 VND",
  avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
};

const Profile = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center text-primary mb-4">Thông Tin Cá Nhân</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow border-0">
            <Card.Body className="text-center">
              <img
                src={user.avatar}
                alt="Avatar"
                className="rounded-circle mb-3"
                width="120"
                height="120"
              />
              <h4 className="mb-2 text-dark">{user.name}</h4>
              <p className="text-muted mb-1">{user.email}</p>
              <hr />
              <div className="text-start px-3">
                <p>
                  <strong>Số tài khoản:</strong> {user.accountNumber}
                </p>
                <p>
                  <strong>Số dư hiện tại:</strong> {user.balance}
                </p>
              </div>
              <Button variant="primary" className="mt-3">
                Cập nhật thông tin
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
