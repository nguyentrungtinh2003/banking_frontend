import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Form,
  InputGroup,
  Container,
  Row,
  Col,
  Badge,
  Card,
  Stack,
} from "react-bootstrap";
import ReactPaginate from "react-paginate";

// DỮ LIỆU GIẢ
const fakeUsers = [
  {
    id: 1,
    username: "nguyenvana",
    email: "vana@gmail.com",
    phone: "0901234567",
    role: "Admin",
    deleted: false,
  },
  {
    id: 2,
    username: "tranthingoc",
    email: "ngoc.t@gmail.com",
    phone: "0987654321",
    role: "User",
    deleted: false,
  },
  {
    id: 3,
    username: "lehoang",
    email: "hoangle@gmail.com",
    phone: "0911122233",
    role: "User",
    deleted: true,
  },
  {
    id: 4,
    username: "phamhuong",
    email: "huongph@gmail.com",
    phone: "0903333444",
    role: "Moderator",
    deleted: false,
  },
  {
    id: 5,
    username: "doanthanh",
    email: "thanhdoan@yahoo.com",
    phone: "0905555666",
    role: "User",
    deleted: true,
  },
  {
    id: 6,
    username: "ngocanh",
    email: "anh.ngoc@gmail.com",
    phone: "0932222333",
    role: "Admin",
    deleted: false,
  },
];

const User = () => {
  const [users, setUsers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;

  useEffect(() => {
    setUsers(fakeUsers);
    setFilteredUsers(fakeUsers);
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    const result = users.filter((user) =>
      user.username.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredUsers(result);
    setPageNumber(0);
  };

  const handleDelete = (id) => {
    const updated = users.map((user) =>
      user.id === id ? { ...user, deleted: true } : user
    );
    setUsers(updated);
    setFilteredUsers(updated);
  };

  const handleRestore = (id) => {
    const updated = users.map((user) =>
      user.id === id ? { ...user, deleted: false } : user
    );
    setUsers(updated);
    setFilteredUsers(updated);
  };

  const pageCount = Math.ceil(filteredUsers.length / usersPerPage);
  const currentPageData = filteredUsers.slice(
    pageNumber * usersPerPage,
    (pageNumber + 1) * usersPerPage
  );

  const handlePageClick = ({ selected }) => setPageNumber(selected);

  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Card.Header className="bg-white border-bottom d-flex justify-content-between align-items-center">
          <h5 className="mb-0 fw-bold text-dark">Quản lý người dùng</h5>
          <Button
            variant="primary"
            onClick={() => alert("Hiện form thêm user")}
          >
            Thêm mới
          </Button>
        </Card.Header>

        <Card.Body>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Tìm kiếm theo username..."
              value={searchKeyword}
              onChange={handleSearch}
            />
          </InputGroup>

          <Table hover responsive className="align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Vai trò</th>
                <th>Trạng thái</th>
                <th className="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td className="fw-semibold text-dark">{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Badge
                      bg={
                        user.role === "Admin"
                          ? "dark"
                          : user.role === "Moderator"
                          ? "secondary"
                          : "light"
                      }
                      text={user.role === "User" ? "dark" : "white"}
                    >
                      {user.role}
                    </Badge>
                  </td>
                  <td>
                    <Badge bg={user.deleted ? "secondary" : "success"}>
                      {user.deleted ? "Đã ẩn" : "Hoạt động"}
                    </Badge>
                  </td>
                  <td className="text-center">
                    <Stack
                      direction="horizontal"
                      gap={1}
                      className="justify-content-center"
                    >
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => alert(`Chi tiết user ${user.id}`)}
                      >
                        Xem
                      </Button>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => alert(`Sửa user ${user.id}`)}
                      >
                        Sửa
                      </Button>
                      {!user.deleted ? (
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(user.id)}
                        >
                          Xoá
                        </Button>
                      ) : (
                        <Button
                          variant="outline-success"
                          size="sm"
                          onClick={() => handleRestore(user.id)}
                        >
                          Khôi phục
                        </Button>
                      )}
                    </Stack>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-center">
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination mt-4"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default User;
