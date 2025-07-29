import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import Navigate

function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <Router>
          <div>
            <Navbar />

            {/* Use Routes instead of Route in React Router v6 */}
            <Routes>
              {/* Home route */}
              <Route path="/" element={<Home />} />
              <Route path="/view-cv" element={<ViewCV />} />
              <Route path="/addSkill" element={<AddSkill />} />
              <Route path="/addProject" element={<AddProject />} />
              <Route path="/updateSkill/:id" element={<UpdateSkill />} />
              <Route path="/viewSkill/:id" element={<ViewSkill />} />
              <Route path="/updateUser/:id" element={<UpdateUser />} />
              <Route path="/viewUser/:id" element={<ViewUser />} />
              <Route path="/updateProject/:id" element={<UpdateProject />} />
              <Route path="/viewProject/:id" element={<ViewProject />} />
              <Route path="/chat" element={<ChatRoom />} />

              {/* Private route for /dashboard */}
              <Route
                path="/dashboard"
                element={
                  localStorage.getItem("token") &&
                  localStorage.getItem("token") !== "undefined" &&
                  localStorage.getItem("token") !== "" ? (
                    <Admin />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />

              {/* Login route */}
              <Route path="/login" element={<Login />} />

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
