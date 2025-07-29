import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid px-4">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
          <i className="bi bi-bank2 me-2 fs-4"></i> Banking
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                <i className="bi bi-house-door me-1"></i> Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/features">
                <i className="bi bi-gear me-1"></i> Chức năng
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/account">
                <i className="bi bi-person-circle me-1"></i> Tài khoản của tôi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
