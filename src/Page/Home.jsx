import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaMoneyCheckAlt,
  FaExchangeAlt,
  FaWallet,
  FaMoneyBillWave,
  FaHistory,
  FaUserCog,
} from "react-icons/fa";

const features = [
  {
    title: "Xem số dư",
    desc: "Kiểm tra số dư tài khoản của bạn.",
    icon: <FaMoneyCheckAlt size={40} className="text-primary" />,
  },
  {
    title: "Chuyển tiền",
    desc: "Gửi tiền đến tài khoản khác.",
    icon: <FaExchangeAlt size={40} className="text-success" />,
  },
  {
    title: "Nạp tiền",
    desc: "Thêm tiền vào tài khoản của bạn.",
    icon: <FaWallet size={40} className="text-info" />,
  },
  {
    title: "Rút tiền",
    desc: "Rút tiền từ tài khoản ngân hàng.",
    icon: <FaMoneyBillWave size={40} className="text-danger" />,
  },
  {
    title: "Lịch sử giao dịch",
    desc: "Xem chi tiết các giao dịch gần đây.",
    icon: <FaHistory size={40} className="text-warning" />,
  },
  {
    title: "Cài đặt tài khoản",
    desc: "Quản lý thông tin cá nhân và bảo mật.",
    icon: <FaUserCog size={40} className="text-secondary" />,
  },
];

const Home = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <Container>
        <h1 className="text-center mb-5 text-primary fw-bold">
          🏦 Trang Chủ Ngân Hàng
        </h1>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm hover-shadow text-center p-3">
                <div className="mb-3">{feature.icon}</div>
                <Card.Body>
                  <Card.Title className="fw-semibold fs-5">
                    {feature.title}
                  </Card.Title>
                  <Card.Text className="text-muted small">
                    {feature.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
