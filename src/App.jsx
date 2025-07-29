import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import Navigate
import Navbar from "./Component/Navbar";
import Home from "./Page/Home";
import Profile from "./Page/Profile";
import Register from "./Page/Register";
import Login from "./Page/Login";
import User from "./Page/User/User";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Navbar />

            {/* Use Routes instead of Route in React Router v6 */}
            <Routes>
              {/* Home route */}
              <Route path="/" element={<Home />} />
              <Route path="/account" element={<Profile />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/admin/user" element={<User />} />

              {/* 404 route */}
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
