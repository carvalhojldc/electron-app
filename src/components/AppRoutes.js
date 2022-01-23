import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";
import { NetworkPage } from "../pages/NetworkPage.js";
import { StarWarsPage } from "../pages/StarWarsPage.js";
import { AuthProvider, AuthContext } from "./context/Auth.js";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="login" element={<LoginPage />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <HomePage />
              </Private>
            }
          />
          <Route
            exact
            path="/network"
            element={
              <Private>
                <NetworkPage />
              </Private>
            }
          />
          <Route
            exact
            path="/starWars"
            element={
              <Private>
                <StarWarsPage />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
