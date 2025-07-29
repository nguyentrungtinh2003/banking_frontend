import React from "react";

const Navbar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Banking</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Trang chủ</Nav.Link>
            <Nav.Link href="#features">Chức năng</Nav.Link>
            <Nav.Link href="#pricing">Tài khoản của tôi</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar;
