import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (userName, password) => {
    if (password === "admin" && userName === "admin") {
      setUser({ userName });
      navigate("/");
    }
  };

  const logout = () => {
    console.log("logout");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuth: Boolean(user), user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
