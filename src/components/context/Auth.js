import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (userName, password) => {
    if (password === "Admin123!" && userName === "admin") {
      setUser({ userName });
      navigate("/");
    } else {
      alert("Invalid login!");
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
