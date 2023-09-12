import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";

function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  // console.log("Access Token:", accessToken);

  return accessToken ? (
    children
  ) : (
    <Navigate to="/login" replace /> // Redirect to /login if no accessToken
  );
}
const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRoutes;
